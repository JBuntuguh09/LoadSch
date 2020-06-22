firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    // User is signed in.
	document.getElementById("divMain").style.display="block";
	document.getElementById("divLoggedIn").style.display="none";
	
  } else {
	window.location="Page/insert_page.html";
    // No user is signed in.
	document.getElementById("divMain").style.display="none";
	document.getElementById("divLoggedIn").style.display="block";
	
  }
});



function login(){
	var mEmail = document.getElementById("edtEmail").value;
	var mPassword = document.getElementById("edtPassword").value;

	firebase.auth().signInWithEmailAndPassword(mEmail, mPassword).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  // ...
});
	
	
	
	
	
}