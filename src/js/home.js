// if (window.innerWidth >= 600) {
//   firebase.auth().onAuthStateChanged(function(user) {
//     const uid1 = user.uid;
//     console.log("User UID:", uid1);

//     const maxElements = 9; // Set the maximum number of elements to append

//     storageRef.child("images").listAll().then(function(result) {
//       let count = 0; // Initialize a counter

//       for (let i = 0; i < result.items.length; i++) {
//         if (count < maxElements) {
//           const imageRef = result.items[i];
//           imageRef.getDownloadURL().then(function(url) {
//             const imageName = imageRef.name.split('.')[0];
//             const titleRef = database.ref('UserUploads/' + imageName + '/title');
//             titleRef.once('value', function(snapshot) {
//               const title = snapshot.val();

//               const card = document.createElement('div');
//               card.classList.add('card');

//               const image = document.createElement('img');
//               image.classList.add('card_image');
//               image.src = url;
//               card.appendChild(image);

//               const titleElement = document.createElement('div');
//               titleElement.classList.add('card_title');
//               titleElement.textContent = title;
//               card.appendChild(titleElement);

//               const threedotIcon = document.createElement('div');
//               threedotIcon.classList.add('threedotIcon', 'fa', 'fa-ellipsis-v');

//               const laylst = document.createElement('div');
//               laylst.classList.add('laylst', 'fa', 'fa-bars');

//               const dropdown = document.createElement('div');
//               dropdown.style.display = 'none';
//               dropdown.classList.add('dropdown-menu');

//               const options = [
//                 { value: 'add', text: 'Add to playlist' },
//                 { value: 'report', text: 'Report' },
//                 { value: 'stoprec', text: 'Not Interested' },
//               ];

//               options.forEach((optionData) => {
//                 const option = document.createElement('div');
//                 option.classList.add('dropdown-item');
//                 option.innerText = optionData.text;
//                 option.dataset.value = optionData.value;

//                 option.addEventListener('click', function(e) {
//                   e.stopPropagation();
//                   dropdown.style.display = 'none';
//                 });

//                 if (optionData.value === 'add') {
//                   let imageName;
//                   option.addEventListener('click', async function(e) {
//                     const Ref = database.ref('UserUploads/' + imageName + '/title');
//                     e.stopPropagation();

//                     const playlistDropdown = document.createElement('div');
//                     playlistDropdown.style display = 'none';
//                     playlistDropdown.classList.add('dropdown-menu');

//                     const playlists = [
//                       { value: 'create', text: 'Create' }
//                     ];

//                     const snapshot = await Ref.once('value');
//                     snapshot.forEach(function(childSnapshot) {
//                       var childData = childSnapshot.val();
//                       playlists.push(childData);
//                     });

//                     playlists.forEach((playlistData) => {
//                       const playlistOption = document.createElement('div');
//                       playlistOption.classList.add('dropdown-item');
//                       playlistOption.innerText = playlistData.text;
//                       playlistOption.dataset.value = playlistData.value;

//                       playlistOption.addEventListener('click', function(e) {
//                         e.stopPropagation();
//                         playlistDropdown.style.display = 'none';
//                       });

//                       playlistDropdown.appendChild(playlistOption);
//                     });

//                     card.appendChild(playlistDropdown);
//                     playlistDropdown.style.display = 'block';
//                     dropdown.style.display = 'none';
//                   });
//                 }

//                 dropdown.appendChild(option);
//               });

//               threedotIcon.appendChild(dropdown);

//               const channelIcon = document.createElement('span');
//               channelIcon.classList.add('channel-icon', 'fa', 'fa-user-circle');

//               card.appendChild(channelIcon);
//               card.appendChild(threedotIcon);

//               threedotIcon.addEventListener('click', () => {
//                 if (dropdown.style.display === 'none') {
//                   dropdown.style display = 'block';
//                 } else {
//                   dropdown.style.display = 'none';
//                 }
//               });

//               const playerContainer = document.querySelector('#bottom_player');
//               const cardsContainer = document.querySelector('#cards-container');
//               cardsContainer.appendChild(card);

//               card.addEventListener('click', function() {
//                 const audioRef = storageRef.child('audios/' + imageName + '.mp3');
//                 audioRef.getDownloadURL().then(function(audioUrl) {
//                   const audio = new Audio(audioUrl);

//                   audio.addEventListener('ended', function() {
//                     playPauseButton.textContent = 'Play';
//                   });

//                   if (currentlyPlayingAudio !== null) {
//                     currentlyPlayingAudio.pause();
//                   }

//                   audio.play();
//                   playerContainer.style.display = 'block';
//                   currentlyPlayingAudio = audio;

//                   const recentsRef = database.ref('Recents/' + uid1);

//                   recentsRef.update({
//                     [imageName]: true
//                   })
//                   .then(() => {
//                     console.log('Image uploaded successfully!');
//                   })
//                   .catch((error) => {
//                     console.error('Error uploading image:', error);
//                   });
//                 });

//                 audio.addEventListener('loadedmetadata', function() {
//                   const duration = audio.duration;
//                   const minutes = Math.floor(duration / 60);
//                   const seconds = Math.floor(duration % 60);
//                   const durationString = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

//                   const durationElement = document.createElement('div');
//                   durationElement.classList.add('card_duration');
//                   durationElement.textContent = durationString;
//                   card.appendChild(durationElement);
//                 });
//               });
//             });
//             count++;
//           });
//         } else {
//           break;
//         }
//       }
//     });

//     storageRef.child("images").listAll().then(function(result) {
//       result.items.forEach(function(imageRef) {
//         imageRef.getDownloadURL().then(function(url) {
//           const imageName = imageRef.name.split('.')[0];
//           const titleRef = database.ref('UserUploads/' + imageName + '/title');
//           titleRef.once('value', function(snapshot) {
//             const title = snapshot.val();

//             const card = document.createElement('div');
//             card.classList.add('card2');

//             const image = document.createElement('img');
//             image.classList.add('card_images2');
//             image.src = url;
//             card.appendChild(image);

//             const titleElement = document.createElement('div');
//             titleElement.classList.add('card_title2');
//             titleElement.textContent = title;
//             card.appendChild(titleElement);

//             const channelIcon = document.createElement('span');
//             channelIcon.classList.add('channel-icon', 'fa', 'fa-user-circle');
//             const threedotIcon = document.createElement('span');
//             threedotIcon.classList.add('threedotIcon', 'fa', 'fa-ellipsis-v');

//             threedotIcon.addEventListener('click', function() {
//               // Your custom logic to handle the click event goes here
//               // For example, you can display a dropdown menu or perform some other action
//             });

//             card.appendChild(channelIcon);
//             card.appendChild(threedotIcon);

//             const playerContainer = document.querySelector('#bottom_player');
//             const cardsContainer = document.querySelector('#cards-container2');
//             cardsContainer.appendChild(card);

//             card.addEventListener('click', function() {
//               const audioRef = storageRef.child('audios/' + imageName + '.mp3');
//               audioRef.getDownloadURL().then(function(audioUrl) {
//                 const audio = new Audio(audioUrl);
//                 audio.playbackRate = 0.9;

//                 if (currentlyPlayingAudio !== null) {
//                   currentlyPlayingAudio.pause();
//                 }

//                 audio.play();
//                 playerContainer.style.display = 'block';
//                 currentlyPlayingAudio = audio;
//               });

//               audio.addEventListener('ended', function() {
//                 playPauseButton.textContent = 'Play';
//               });

//               audio.addEventListener('loadedmetadata', function() {
//                 const duration = audio.duration;
//                 const minutes = Math.floor(duration / 60);
//                 const seconds = Math.floor(duration % 60);
//                 const durationString = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

//                 const durationElement = document.createElement('div');
//                 durationElement.classList.add('card_duration2');
//                 durationElement.textContent = durationString;
//                 card.appendChild(durationElement);
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// }


const firebaseConfig = {
};

firebase.initializeApp(firebaseConfig);

const logout = document.querySelector('#logout');

    logout.addEventListener('click', (e) => {
        e.preventDefault();
        firebase.auth().signOut().then(() => {
            console.log("User Signed Out");
            alert("You have been signed out.");
            localStorage.removeItem("loggedIn"); // Clear the loggedIn flag
            window.location.href = "index.html";
        }).catch((error) => {
            console.log("Error signing out:", error);
        });
    });

// Listen for authentication state changes
firebase.auth().onAuthStateChanged(user => {
  if (user) {
      // User is signed in
      const userPhotoElement = document.getElementById("userPhoto");
      
      // Get user's Google account photo URL
      const photoURL = user.photoURL;
      
      if (photoURL) {
          userPhotoElement.src = photoURL;
      }
      // } else {
      //     userPhotoElement.src = ".jpg"; // You can provide a default photo
      // }
  } else {
      console.log("SignIn Ni**a")
  }
});

const storage = firebase.storage();
const storageRef = storage.ref();
const database = firebase.database();
const downloadUrls = {};
let currentlyPlayingAudio = null;



if (window.innerWidth >= 600) {
  firebase.auth().onAuthStateChanged(function(user) {
    const uid1 = user.uid;
    console.log("User UID:", uid1);

    const maxElements = 9; // Set the maximum number of elements to append

      storageRef.child("images").listAll().then(function(result) {
        let count = 0; // Initialize a counter
        
        for (let i = 0; i < result.items.length; i++) {
          if (count < maxElements) {
            const imageRef = result.items[i];
        console.log("so far so good");
        // Retrieve the download URL and filename for the image
        imageRef.getDownloadURL().then(function(url) {

          const imageName = imageRef.name.split('.')[0];

          // Retrieve the title from the Realtime Database
          const titleRef = database.ref('UserUploads/' + imageName + '/title');
          titleRef.once('value', function(snapshot) {
            const title = snapshot.val();

              

                // Create a new card or list item using JavaScript and add the image URL, title, and duration to the HTML
                const card = document.createElement('div');
                card.classList.add('card');

                // Add the image to the card
                const image = document.createElement('img');
                image.classList.add('card_image');
                image.src = url;
                card.appendChild(image);

                // Add the title to the card
                const titleElement = document.createElement('div');
                titleElement.classList.add('card_title');
                titleElement.textContent = title;
                card.appendChild(titleElement);

                  const threedotIcon = document.createElement('div');
                  threedotIcon.classList.add('threedotIcon', 'fa', 'fa-ellipsis-v');

                  const laylst = document.createElement('div');
                  laylst.classList.add('laylst', 'fa', 'fa-bars');

                  // Create a dropdown menu
                  const dropdown = document.createElement('div');
                  dropdown.style.display = 'none'; // Initially, hide the dropdown menu
                  dropdown.classList.add('dropdown-menu');

                  // Create an array of option values and text
                  const options = [
                    { value: 'add', text: 'Add to playlist' },
                    { value: 'report', text: 'Report' },
                    { value: 'stoprec', text: 'Not Interested' },
                  ];

                  // Loop through the options array and create div elements for dropdown
                  options.forEach((optionData) => {
                    const option = document.createElement('div');
                    option.classList.add('dropdown-item');
                    option.innerText = optionData.text;
                    option.dataset.value = optionData.value;

                    // Add a click event listener to each option
                    option.addEventListener('click', function(e) {
                      e.stopPropagation(); // Prevent the event from bubbling up to the threedotIcon click event

                      // Hide the dropdown menu
                      dropdown.style.display = 'none';
                    });

                    // If the option is 'Add to playlist', add a click event listener to create a new dropdown
                    if (optionData.value === 'add') {
                      let imageName;
                      option.addEventListener('click', async function(e) { // Add async here
                        const Ref = database.ref('UserUploads/' + imageName + '/title');
                        e.stopPropagation(); // Prevent the event from bubbling up to the threedotIcon click event
                    
                        // Create a new dropdown for the playlists
                        const playlistDropdown = document.createElement('div');
                        playlistDropdown.style.display = 'none'; // Initially, hide the dropdown menu
                        playlistDropdown.classList.add('dropdown-menu');
                    
                        // Create an array of playlists
                        const playlists = [
                          { value: 'create', text: 'Create' }
                        ];
                    
                        // Add code to extract data from Firebase
                        const snapshot = await Ref.once('value'); // Add await here
                        snapshot.forEach(function(childSnapshot) {
                          var childData = childSnapshot.val();
                          playlists.push(childData);
                        });
                    
                        // Loop through the playlists array and create div elements for dropdown
                        playlists.forEach((playlistData) => {
                          const playlistOption = document.createElement('div');
                          playlistOption.classList.add('dropdown-item');
                          playlistOption.innerText = playlistData.text;
                          playlistOption.dataset.value = playlistData.value;
                    
                          // Add a click event listener to each playlist option
                          playlistOption.addEventListener('click', function(e) {
                            e.stopPropagation(); // Prevent the event from bubbling up to the threedotIcon click event
                    
                            // Hide the playlist dropdown menu
                            playlistDropdown.style.display = 'none';
                          });
                    
                          playlistDropdown.appendChild(playlistOption);
                        });
                    
                        // Append the new dropdown to the card
                        card.appendChild(playlistDropdown);
                    
                        // Show the new dropdown and hide the old one
                        playlistDropdown.style.display = 'block';
                        dropdown.style.display = 'none';
                      });
                    }
                    
                    

                    dropdown.appendChild(option);
                  });

                  threedotIcon.appendChild(dropdown);

                  const channelIcon = document.createElement('span');
                  channelIcon.classList.add('channel-icon', 'fa', 'fa-user-circle'); // Font Awesome classes

                  // Append the channel icon to the card
                  card.appendChild(channelIcon);
                  card.appendChild(threedotIcon);

                  // Add an event listener to toggle dropdown visibility
                  threedotIcon.addEventListener('click', () => {
                    if (dropdown.style.display === 'none') {
                      dropdown.style.display = 'block';
                    } else {
                      dropdown.style.display = 'none';
                    }
                  });

                  // Append card to body (or any other container)
                  document.body.appendChild(card);

                                  
                // // Create the like and dislike buttons
                // const likeButton = document.createElement('button');
                // likeButton.classList.add('like-button');
                // likeButton.innerHTML = '<i class="fa fa-thumbs-up"></i>';
                // card.appendChild(likeButton);

                // const dislikeButton = document.createElement('button');
                // dislikeButton.classList.add('dislike-button');
                // dislikeButton.innerHTML = '<i class="fa fa-thumbs-down"></i>';
                // card.appendChild(dislikeButton);

                // // Create the share button
                // const shareButton = document.createElement('button');
                // shareButton.classList.add('share-button');
                // shareButton.innerHTML = '<i class="fa fa-share"></i>';
                // card.appendChild(shareButton);

                // // Add click listener to the share button to share the audio
                // shareButton.addEventListener('click', function() {
                //   const shareTitle = encodeURIComponent(title);
                //   const shareUrl = encodeURIComponent(audioUrl);
                //   const shareText = `Check out this audio: ${shareTitle} ${shareUrl}`;
                //   navigator.share({ title: shareTitle, text: shareText, url: shareUrl })
                //     .then(() => console.log('Shared successfully'))
                //     .catch((error) => console.log(`Error sharing: ${error}`));
                // });

                // Add the card or list item to the view
                const playerContainer = document.querySelector('#bottom_player');
                const cardsContainer = document.querySelector('#cards-container');
                cardsContainer.appendChild(card);

                // Add an event listener for when the audio finishes playing
                

                // Add click listener to the card to start playing the audio
                  card.addEventListener('click', function() {

                    const audioRef = storageRef.child('audios/' + imageName + '.mp3'); // assuming audio files have the .mp3 extension
                    audioRef.getDownloadURL().then(function(audioUrl) {
                      // Create the Audio object for the audio file
                      const audio = new Audio(audioUrl);

                      audio.addEventListener('ended', function() {
                        playPauseButton.textContent = 'Play';
                      });
                    // Stop the currently playing audio, if any
                    if (currentlyPlayingAudio !== null) {
                      currentlyPlayingAudio.pause();
                    }

                    // Start playing the new audio
                    audio.play();
                    playerContainer.style.display = 'block';

                    // Update the currently playing audio variable
                    currentlyPlayingAudio = audio;
                      
                    const recentsRef = database.ref('Recents/' + uid1);

                      // Upload the imageName as key with value true
                      recentsRef.update({
                        [imageName]: true
                      })
                      .then(() => {
                        console.log('Image uploaded successfully!');
                      })
                      .catch((error) => {
                        console.error('Error uploading image:', error);
                      });
                    

                // // Add click listener to the like button
                // likeButton.addEventListener('click', function() {
                //   // Pause the audio if it is playing
                //   if (currentlyPlayingAudio !== null) {
                //     currentlyPlayingAudio.pause();
                //   }

                //   // Handle the like button click event
                // });

                // // Add click listener to the dislike button
                // dislikeButton.addEventListener('click', function() {
                //   // Pause the audio if it is playing
                //   if (currentlyPlayingAudio !== null) {
                //     currentlyPlayingAudio.pause();
                //   }

                //   // Handle the dislike button click event
                // });

                // Add a seekbar to the audio player
                const seekbar = document.querySelector('.seekbar');
                const seekbarRange = seekbar.querySelector('.seekbar_range');
                const pauseButton = document.querySelector('#play');
                const prevButton = document.querySelector('#prev');
                const nextButton = document.querySelector('#next');

                // Update the seekbar value when the audio time updates
                audio.addEventListener('timeupdate', function() {
                  seekbarRange.value = (audio.currentTime / audio.duration) * 100;
                });

                // Update the audio time when the seekbar value changes
                seekbarRange.addEventListener('input', function() {
                  audio.currentTime = (seekbarRange.value / 100) * audio.duration;
                });

                // Update the seekbar value as the audio plays
                audio.addEventListener('timeupdate', function() {
                  seekbar.value = (audio.currentTime / audio.duration) * 100;
                });

                // Update the audio time as the seekbar is moved
                seekbar.addEventListener('input', function() {
                  audio.currentTime = (seekbar.value / 100) * audio.duration;
                });

                pauseButton.addEventListener('click', function() {
                  audio.pause();
                });

                // Skip back 10 seconds when the prev button is clicked
                prevButton.addEventListener('click', function() {
                  audio.currentTime = Math.max(audio.currentTime - 10, 0);
                });

                // Skip forward 10 seconds when the next button is clicked
                nextButton.addEventListener('click', function() {
                  audio.currentTime = Math.min(audio.currentTime + 10, audio.duration);
                });
                  // Retrieve recent images from the Realtime Database
                 
                  });
                  
                  // Load metadata to get the duration of the audio file
              audio.addEventListener('loadedmetadata', function() {
                const duration = audio.duration;
                const minutes = Math.floor(duration / 60);
                const seconds = Math.floor(duration % 60);
                const durationString = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

                // Add the duration to the card
                const durationElement = document.createElement('div');
                durationElement.classList.add('card_duration');
                durationElement.textContent = durationString;
                card.appendChild(durationElement);
                });
                
              });
              const recentsRef = database.ref('Recents/' + uid1 + '/' + imageName);
                  recentsRef.once('value', function(snapshot) {
                    const recentImages = snapshot.val();
                    console.log("Recent images snapshot:", snapshot.val());

                    if (recentImages) {
                      console.log("working")
                      const recentImagesContainer = document.querySelector('.recent-images');
                        const recentImageRef = storageRef.child('images/' + imageName + '.jpg'); // Assuming image files have the .jpg extension
                        
                        // Retrieve the download URL for the recent image
                        let cardCount = 0;

// Loop through the data and create cards
                          recentImageRef.getDownloadURL().then(function(imageUrl) {
                            // Check if the maximum number of cards has been reached
                          if (cardCount >= 4) {
                            return; // Stop adding cards
                          }
                          if (cardCount <=4) {
                          const recentImageDiv = document.createElement('div');
                          recentImageDiv.classList.add('recent-image');

                          const imageElement = document.createElement('img');
                          imageElement.src = imageUrl;
                          recentImageDiv.appendChild(imageElement);

                          // Add click listener to the recent image div to play the corresponding audio
                          recentImageDiv.addEventListener('click', function() {

                            if (currentlyPlayingAudio !== null) {
                              currentlyPlayingAudio.pause();
                            }

                            const audioRef = storageRef.child('audios/' + imageName + '.mp3'); // Assuming audio files have the .mp3 extension
                            
                            // Retrieve the download URL for the corresponding audio file
                            audioRef.getDownloadURL().then(function(audioUrl) {

                              
                              
                              // ... (previous audio code)

                              // Start playing the new audio
                              audio.play();
                              playerContainer.style.display = 'block';

                              // Update the currently playing audio variable
                              currentlyPlayingAudio = audio;

                              audio.addEventListener('timeupdate', function() {
                                seekbarRange.value = (audio.currentTime / audio.duration) * 100;
                              });
              
                              // Update the audio time when the seekbar value changes
                              seekbarRange.addEventListener('input', function() {
                                audio.currentTime = (seekbarRange.value / 100) * audio.duration;
                              });
              
                              // Update the seekbar value as the audio plays
                              audio.addEventListener('timeupdate', function() {
                                seekbar.value = (audio.currentTime / audio.duration) * 100;
                              });
              
                              // Update the audio time as the seekbar is moved
                              seekbar.addEventListener('input', function() {
                                audio.currentTime = (seekbar.value / 100) * audio.duration;
                              });
              
                              pauseButton.addEventListener('click', function() {
                                audio.pause();
                              });
              
                              // Skip back 10 seconds when the prev button is clicked
                              prevButton.addEventListener('click', function() {
                                audio.currentTime = Math.max(audio.currentTime - 10, 0);
                              });
              
                              // Skip forward 10 seconds when the next button is clicked
                              nextButton.addEventListener('click', function() {
                                audio.currentTime = Math.min(audio.currentTime + 10, audio.duration);
                              });
                            });


                            
                          });

                          recentImagesContainer.appendChild(recentImageDiv);
                            cardCount++;
                        }
                          

                          
                        }).catch(function(error) {
                          console.error('Error getting recent image URL:', error);
                        }).catch(function(error) {
                          console.error('Error getting recent image URL:', error);
                        });
                    }
                  });
            });
          }); count++; // Increment the counter
        } else {
          break; // Exit the loop
        }
      }
    });

    storageRef.child("images").listAll().then(function(result) {
      result.items.forEach(function(imageRef) {
      console.log("so far so good");
      // Retrieve the download URL and filename for the image
      imageRef.getDownloadURL().then(function(url) {
        const imageName = imageRef.name.split('.')[0];

        // Retrieve the title from the Realtime Database
        const titleRef = database.ref('UserUploads/' + imageName + '/title');
        titleRef.once('value', function(snapshot) {
          const title = snapshot.val();

            

              // Create a new card or list item using JavaScript and add the image URL, title, and duration to the HTML
              const card = document.createElement('div');
              card.classList.add('card2');

              // Add the image to the card
              const image = document.createElement('img');
              image.classList.add('card_images2');
              image.src = url;
              card.appendChild(image);

              // Add the title to the card
              const titleElement = document.createElement('div');
              titleElement.classList.add('card_title2');
              titleElement.textContent = title;
              card.appendChild(titleElement);

              const channelIcon = document.createElement('span');
              channelIcon.classList.add('channel-icon', 'fa', 'fa-user-circle');
              const threedotIcon = document.createElement('span');
              threedotIcon.classList.add('threedotIcon', 'fa', 'fa-ellipsis-v');
              
              threedotIcon.addEventListener('click', function() {
                // Your custom logic to handle the click event goes here
                // For example, you can display a dropdown menu or perform some other action
              });// Font Awesome classes

              // Append the channel icon to the card
              card.appendChild(channelIcon);
              card.appendChild(threedotIcon);

              

              // // Create the like and dislike buttons
              // const likeButton = document.createElement('button');
              // likeButton.classList.add('like-button');
              // likeButton.innerHTML = '<i class="fa fa-thumbs-up"></i>';
              // card.appendChild(likeButton);

              // const dislikeButton = document.createElement('button');
              // dislikeButton.classList.add('dislike-button');
              // dislikeButton.innerHTML = '<i class="fa fa-thumbs-down"></i>';
              // card.appendChild(dislikeButton);

              // // Create the share button
              // const shareButton = document.createElement('button');
              // shareButton.classList.add('share-button');
              // shareButton.innerHTML = '<i class="fa fa-share"></i>';
              // card.appendChild(shareButton);

              // // Add click listener to the share button to share the audio
              // shareButton.addEventListener('click', function() {
              //   const shareTitle = encodeURIComponent(title);
              //   const shareUrl = encodeURIComponent(audioUrl);
              //   const shareText = `Check out this audio: ${shareTitle} ${shareUrl}`;
              //   navigator.share({ title: shareTitle, text: shareText, url: shareUrl })
              //     .then(() => console.log('Shared successfully'))
              //     .catch((error) => console.log(`Error sharing: ${error}`));
              // });

              // Add the card or list item to the view
              const playerContainer = document.querySelector('#bottom_player');
              const cardsContainer = document.querySelector('#cards-container2');
              cardsContainer.appendChild(card);

              // Add an event listener for when the audio finishes playing
              

              // Add click listener to the card to start playing the audio
                card.addEventListener('click', function() {
                  // Retrieve the download URL for the corresponding audio file with the same UID
                  const audioRef = storageRef.child('audios/' + imageName + '.mp3'); // assuming audio files have the .mp3 extension
                  audioRef.getDownloadURL().then(function(audioUrl) {
                    // Create the Audio object for the audio file
                    const audio = new Audio(audioUrl);

                    audio.playbackRate = 0.9;
                  // Stop the currently playing audio, if any
                  if (currentlyPlayingAudio !== null) {
                    currentlyPlayingAudio.pause();
                  }

                  // Start playing the new audio
                  audio.play();
                  playerContainer.style.display = 'block';

                  // Update the currently playing audio variable
                  currentlyPlayingAudio = audio;
                  

              // // Add click listener to the like button
              // likeButton.addEventListener('click', function() {
              //   // Pause the audio if it is playing
              //   if (currentlyPlayingAudio !== null) {
              //     currentlyPlayingAudio.pause();
              //   }

              //   // Handle the like button click event
              // });

              // // Add click listener to the dislike button
              // dislikeButton.addEventListener('click', function() {
              //   // Pause the audio if it is playing
              //   if (currentlyPlayingAudio !== null) {
              //     currentlyPlayingAudio.pause();
              //   }

              //   // Handle the dislike button click event
              // });

              // Add a seekbar to the audio player
              const seekbar = document.querySelector('.seekbar');
              const seekbarRange = seekbar.querySelector('.seekbar_range');
              const pauseButton = document.querySelector('#play');
              const prevButton = document.querySelector('#prev');
              const nextButton = document.querySelector('#next');

              // Update the seekbar value when the audio time updates
              audio.addEventListener('timeupdate', function() {
                seekbarRange.value = (audio.currentTime / audio.duration) * 100;
              });

              // Update the audio time when the seekbar value changes
              seekbarRange.addEventListener('input', function() {
                audio.currentTime = (seekbarRange.value / 100) * audio.duration;
              });

              // Update the seekbar value as the audio plays
              audio.addEventListener('timeupdate', function() {
                seekbar.value = (audio.currentTime / audio.duration) * 100;
              });

              // Update the audio time as the seekbar is moved
              seekbar.addEventListener('input', function() {
                audio.currentTime = (seekbar.value / 100) * audio.duration;
              });

              pauseButton.addEventListener('click', function() {
                audio.pause();
              });

              // Skip back 10 seconds when the prev button is clicked
              prevButton.addEventListener('click', function() {
                audio.currentTime = Math.max(audio.currentTime - 10, 0);
              });

              // Skip forward 10 seconds when the next button is clicked
              nextButton.addEventListener('click', function() {
                audio.currentTime = Math.min(audio.currentTime + 10, audio.duration);
              });
                // Retrieve recent images from the Realtime Database
               
                });
                audio.addEventListener('ended', function() {
                  playPauseButton.textContent = 'Play';
                });
                // Load metadata to get the duration of the audio file
            audio.addEventListener('loadedmetadata', function() {
              const duration = audio.duration;
              const minutes = Math.floor(duration / 60);
              const seconds = Math.floor(duration % 60);
              const durationString = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                // Add the duration to the card
              const durationElement = document.createElement('div');
              durationElement.classList.add('card_duration2');
              durationElement.textContent = durationString;
              card.appendChild(durationElement);
              });
            });
          });
        }); 
      });
    });
        
      });
}
  window.addEventListener('scroll', function() {
    // Get the position of the top of the window
    const scrollPosition = window.scrollY;

    // Get all the card elements
    const cards = document.querySelectorAll('.cards');

    // Loop through each card and check if it is in view
    cards.forEach(function(card) {
      // Calculate the position of the card relative to the top of the document
      const cardPosition = card.offsetTop;

      // Calculate the height of the card
      const cardHeight = card.offsetHeight;

      // Check if the card is in view (partially or completely)
      if (scrollPosition >= cardPosition - cardHeight && scrollPosition <= cardPosition + cardHeight) {
        // Add the "focused" class to the card in view
        card.classList.add('focused');
      } else {
        // Remove the "focused" class from other cards
        card.classList.remove('focused');
      }
    });
  });
