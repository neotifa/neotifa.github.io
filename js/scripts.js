$(function() {
 
 //alert("test");
    //Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("Wmgt9TmgJIxFgupu4BDhUzKQCCElRIiSYutk5ypA", "ZWGkwwlIIkeNtyDsEoCj5YkGgCMVwgfV998eL4j3");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      //alert("yay! it worked");
    });
 
});

function registerNewUser(email, password) {
	//Parse.$ = jQuery;
	//Parse.initialize("Wmgt9TmgJIxFgupu4BDhUzKQCCElRIiSYutk5ypA", "ZWGkwwlIIkeNtyDsEoCj5YkGgCMVwgfV998eL4j3");
	
	//window.alert(email + " " + password);
	var user = new Parse.User();
	user.set("username", email);
	user.set("password", password);
	user.set("email", email);

	user.signUp(null, {
		success: function(user) {
		// Hooray! Let them use the app now.
		},
		error: function(user, error) {
		// Show the error message somewhere and let the user try again.
		alert("Error: " + error.code + " " + error.message);
		}
	});
}

function login(email, password) {
	//alert("logging in");
	Parse.User.logIn(email, password, {
  success: function(user) {
    // Do stuff after successful login.
	//alert("user logged in");
  },
  error: function(user, error) {
    // The login failed. Check error to see why.
	//alert("user not logged in");
  }
});
}

function setupUser() {
	var name = document.getElementById("name").value;
	var gender = document.getElementById("gender").value;
	var age = document.getElementById("age").value;
	var weight = document.getElementById("weight").value;
	//var activities = document.getElementById("activities").value;
}