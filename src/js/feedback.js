const firebaseConfig = {
  // Your Firebase configuration goes here
  apiKey: "AIzaSyAFv90X5ry69-nPzXOADx1JaUAVXyD0vDE",
  authDomain: "safbro-e3372.firebaseapp.com",
  projectId: "safbro-e3372",
  storageBucket: "safbro-e3372.appspot.com",
  databaseURL: "https://safbro-e3372-default-rtdb.asia-southeast1.firebasedatabase.app",
  messagingSenderId: "622539592959",
  appId: "1:622539592959:web:1a0d80e30c77487082a8ca",
  measurementId: "G-K5G2QPJNDV"
};
const app = firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the Firestore database
  var db = firebase.firestore();
  
  // Function to submit the feedback data to Firestore
  function submitFeedback(event) {
    event.preventDefault();
  
    // Get the values of the input fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var feedback = document.getElementById('feedback').value;
  
    // Add the feedback data to Firestore
    db.collection('feedback').add({
      name: name,
      email: email,
      feedback: feedback
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      // Reset the form fields
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('feedback').value = '';
      alert('Thank you for your feedback!');
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
      alert('Oops! Something went wrong. Please try again later.');
    });
  }
  function toggleDropdown() {
    var dropdown = document.getElementById('dropdown');
    if (dropdown.style.display === 'none') {
      dropdown.style.display = 'block';
    } else {
      dropdown.style.display = 'none';
    }
  }
  updateContactDetails('Phone: 555-555-5555 | Email: example@example.com');

  function updateContactDetails(text) {
    var contactDetails = document.getElementById('contact-details');
    contactDetails.textContent = text;
  }
  
    