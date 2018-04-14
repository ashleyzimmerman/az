<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Greeter</title>
</head>
<body>
 <h1> Press 'ctr + shift + i or 'cmd + opt + j on mac'</h1>
 <script type="text/javascript" src="greeter.js">
   console.log('What is Your Name');

   var checkName = function() {
    if(name === ""){
      name = prompt('What is your name, for real ?');
      checkName(); // repeats until a name exists
    }
<script type="text/javascript" src="greeter.js"></script>
  }
 </script>
</body>
</html>
