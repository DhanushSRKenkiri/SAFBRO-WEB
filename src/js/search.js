// Initialize Firebase
const firebaseConfig = {
};

  // Function to handle the search button click
  document.getElementById('searchButton').addEventListener('click', function () {
    var searchInput = document.getElementById('searchInput').value;
    searchFirebaseStorage(searchInput);
  });

  // Function to search Firebase Storage
  function searchFirebaseStorage(query) {
    var storage = firebase.storage();
    var storageRef = storage.ref();

    // Perform a search in Firebase Storage for audio files
    storageRef.child('audios/' + query + '.mp3').getDownloadURL()
      .then(function (url) {
        displayAudioPlayer(url);
      })
      .catch(function (error) {
        console.error("File not found: " + error);
        displayErrorMessage("Audio not found");
      });
  }

  // Function to display the audio player
  function displayAudioPlayer(audioURL) {
    var searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = `
      <audio controls>
        <source src="${audioURL}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    `;
  }

  // Function to display an error message
  function displayErrorMessage(message) {
    var searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = `<p>${message}</p>`;
  }
