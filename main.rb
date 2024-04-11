require 'sinatra'

set :protection, :except => :frame_options
set :bind, '0.0.0.0'
set :port, 8888


#this justs send the user to the home if its the default link, so it can send it the proper page.
get '/' do
  redirect '/home'
end

#this is just for the about page, with HyperDyne publishing as stated in the prompt.
get '/about' do
  File.read(File.join('public', 'ab.html'))
end

#This sends the user to the proper page, and updated the index.erb file according to the :page parameter. If the page does not exist, it will simply send the user to /home.
get '/:page' do
  erb :index, locals: { page: params[:page] }
  
end

#This updates the poll without using a database, making it way simpler. Although if using this on a larger scale, a database would probably be needed.
post '/poll/:p' do
  if params[:p] == '1'
    File.write('poll.txt', "1\n\n", mode: 'a')
  elsif params[:p] == '2'
    File.write('poll.txt', "2\n\n", mode: 'a')
  else 
    puts 'error'
  end
end

post '/post/:data' do
  # Split the data by the `&-&-&` delimiter.
  data = params[:data].split("&-&-&")

  # The first part of the data is the title.
  title = data[0]

  # The second part of the data is the text.
  text = data[1].split("BIGSPACERINCORPERATED")

  xx = text[0]

  yy = text[1]
  

  # Write the title and text to a file.
  if File.exist?("postsx/#{title}.txt")
    #dont do anything cuz STOP!!!!
  else
    File.write("postsx/#{title}.txt", "#{xx}\n#{yy}")
  end
end

  