var name = prompt("Hi there! What's your name?");
var output = document.querySelector('#greeting');

var checkName = function() {
  if ( name ===""){
    name = prompt('What is your name, for real?')
    checkName(); // repeats until a name exists
  }
}
