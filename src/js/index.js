function closePopup() {
	document.getElementById("popup").style.display = "none";
}

if (localStorage.getItem("loggedIn")) {
  // Redirect to homepage
  window.location.href = "home.html";
}


var firebaseConfig = {
  };
  firebase.initializeApp(firebaseConfig);

// Get elements
const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login');
const loginBtnPC = document.getElementById('login1');



// Google login button click event
loginBtn.addEventListener('click', e => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      console.log(result);

      // Set the loggedIn flag in localStorage
      localStorage.setItem("loggedIn", true);

      window.location.href = "home.html";
    })
    .catch(error => {
      console.log(error);
    });
});

loginBtnPC.addEventListener('click', e => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      console.log(result);

      // Set the loggedIn flag in localStorage
      localStorage.setItem("loggedIn", true);

      window.location.href = "home.html";
    })
    .catch(error => {
      console.log(error);
    });
});
