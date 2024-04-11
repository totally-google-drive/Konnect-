function load1() {
  event.preventDefault();
// This sends a post request to the server to update the poll according to the selection.
fetch('/poll/1', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
})
.then(response => {
  console.log(response);
  
});
// Then this disables the buttons and tells the user they have already voted.
 const x = document.getElementById("poll1");

  const y = x.getElementsByTagName('button');

  const z = document.getElementById("num1");

  z.innerHTML = parseInt(z.innerHTML) + 1;

  for (var i = 0; i < y.length; i++) {
    y[i].disabled = true;
  }

  x.innerHTML = x.innerHTML + "<br><br><h3>Voted!"
}

function load2() {
  event.preventDefault();
// This sends a post request to the server to update the poll according to the selection.
fetch('/poll/2', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
})
.then(response => {
  console.log(response);

});
// Then this disables the buttons and tells the user they have already voted.
  const x = document.getElementById("poll1");

  const y = x.getElementsByTagName('button');

  const z = document.getElementById("num2");

  z.innerHTML = parseInt(z.innerHTML) + 1;


  for (var i = 0; i < y.length; i++) {
    y[i].disabled = true;
  }

  x.innerHTML = x.innerHTML + "<br><br><h3>Voted!"
}

