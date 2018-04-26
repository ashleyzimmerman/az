var name = prompt("Hi there! What's your name?");
var output = document.querySelector('#greeting');

var checkName = function() {
  if ( name ===""){
    name = prompt('What is your name, for real?')
    checkName(); // repeats until a name exists
  }
  var firstName = prompt("Hi there! What's your first name?");
  var lastName = prompt("What's your last name?");
  var output = document.querySelector('#greeting');

}
var checkName = function (){
if(firstName && lastName){
  output.innerHTML = "<p>Thanks for visiting, " + firstName + " " + lastName + ".</p>";
} else {

firstName = prompt('What is your first name?');
lastName = prompt("What is your last name?");

}
//checkName(); //kicks off evaluation
// alert(Hello, ' + Name);
//output.innerHTML = "<p>Thanks for visiting, " + name + ".</p>";
