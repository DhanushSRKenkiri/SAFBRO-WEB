// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     // User is signed in

//     const uid1 = user.uid;
//     console.log("User UID:", uid1);

//     // Your code for handling file input and upload goes here
//     imageInput.addEventListener("change", () => {
//       const selectedImage = imageInput.files[0];
//       if (selectedImage) {
//         const reader = new FileReader();
//         reader.addEventListener("load", () => {
//           const img = new Image();
//           img.src = reader.result;
//           img.onload = () => {
//             imageContainer.innerHTML = "";
//             imageContainer.appendChild(img);
//             const label = document.createElement("label");
//             label.textContent = selectedImage.name;
//             imageContainer.appendChild(label);
//           };
//         });

//         reader.readAsDataURL(selectedImage);
//       } else {
//         imageContainer.innerHTML = '<label>No image selected</label>';
//       }
//     });

//     audioInput.addEventListener("change", () => {
//       const selectedAudio = audioInput.files[0];
//       if (selectedAudio) {
//         const audio = document.createElement("audio");
//         audio.controls = true;
//         audio.src = URL.createObjectURL(selectedAudio);
//         audio.addEventListener("loadedmetadata", () => {
//           audioContainer.innerHTML = "";
//           audioContainer.appendChild(audio);
//           const label = document.createElement("label");
//           label.textContent = selectedAudio.name;
//           audioContainer.appendChild(label);
//         });
//       } else {
//         console.log("ther is an error with the audio")
//         audioContainer.innerHTML = '<label>No audio file selected</label>';
//       }
//     });

//     function generateRandomCharacter() {
//       const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*1234567890-=[];?><L:"}{+_)(*&^%$#@!~`||';
//       const randomIndex = Math.floor(Math.random() * characters.length);
//       return characters.charAt(randomIndex);
//     }

//     submitButton.addEventListener("click", (event) => {
//       event.preventDefault();

//       const selectedImage = imageInput.files[0];
//       const selectedAudio = audioInput.files[0];

//       const randomCharacter = generateRandomCharacter();
//       console.log(randomCharacter);

//       if (selectedImage && selectedAudio) {
//         const imageId = `${uid1}_${randomCharacter}.jpg`;
//         const audioId = `${uid1}_${randomCharacter}.mp3`;
//         const titleId = `${uid1}_${randomCharacter}`;
//         const imageRef = storage.ref(uid1 + "/image/" + imageId);
//         const audioRef = storage.ref(uid1 + "/audio/" + audioId);

//         console.log(imageId);

//         const titleData = {
//           title: title.value,
//           imageUrl: "",
//           audioUrl: ""
//         };
//         const titleData2 = {
//           title: titleId
//         };

//         const titlePromise = firebase.database().ref("UserUploads/" + titleId).set(titleData);
//         const title1 = firebase.database().ref("UserUploads2/" + title.value).set(titleData2);

//         const imageTask = imageRef.put(selectedImage);
//         const audioTask = audioRef.put(selectedAudio);

//         progressContainer.style.display = "block";

//         titlePromise.then(() => {
//           console.log("Title upload successful.");
//         }).catch((error) => {
//           console.error(error);
//         });

//         title1.then(() => {
//           console.log("Title2 upload successful.");
//         }).catch((error) => {
//           console.error(error);
//         });

//         imageTask.on("state_changed", (snapshot) => {
//           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           progressBarFill.style.width = `${progress}%`;
//           percentageSpan.textContent = `${progress.toFixed(2)}%`;
//         }, (error) => {
//           console.error(error);
//         }, () => {
//           console.log("Image upload successful.");
//         });

//         audioTask.on("state_changed", (snapshot) => {
//           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           progressBarFill.style.width = `${progress}%`;
//           percentageSpan.textContent = `${progress.toFixed(2)}%`;
//         }, (error) => {
//           console.error(error);
//         }, () => {
//           console.log("Audio upload successful.");
//           progressBarFill.style.width = '0%';
//           percentageSpan.textContent = '0%';
//           imageInput.value = '';
//           audioInput.value = '';
//           imageContainer.innerHTML = '<label>No image selected</label>';
//           audioContainer.innerHTML = '<label>No audio file selected</label>';

//           const successMessage = document.querySelector("#message");
//           successMessage.textContent = "Image and audio file uploaded successfully!";
//         });
//       }
//     });
//   } else {
//     console.log("SignIn Failed");
//   }
// });


function generateUUID() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  const hex = Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
  return hex.substr(0, 8) + '-' + hex.substr(8, 4) + '-4' + hex.substr(12, 3) + '-' + ((hex.charCodeAt(16) & 0x3F) | 0x80).toString(16) + hex.substr(17, 3) + '-' + hex.substr(20, 12);
}



const firebaseConfig = {
};
const app = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

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

const imageInput = document.querySelector("#image-input");
const audioInput = document.querySelector("#audio-input");
const submitButton = document.querySelector("#submit-button");
const progressBarFill = document.querySelector("#progress-bar-fill");
const percentageSpan = document.querySelector("#percentage");
const imageContainer = document.querySelector("#image-container");
const audioContainer = document.querySelector("#audio-container");
const progressContainer = document.querySelector(".cssProgress");
const title = document.querySelector("#title-input");
const message = document.querySelector("#message");
const myImage = document.querySelector("#img");



myImage.addEventListener("click", () => {
  // redirect to the desired page
  window.location.href = "home.html";
});

document.addEventListener("DOMContentLoaded", function() {
// Hide progress bar initially
progressContainer.style.display = "none";

firebase.auth().onAuthStateChanged(function(user) {
    const uid1 = user.uid;
    console.log("User UID:", uid1);


// Your code for handling file input and upload goes here
imageInput.addEventListener("change", () => {
  const selectedImage = imageInput.files[0];
  if (selectedImage) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        imageContainer.innerHTML = "";
        imageContainer.appendChild(img);
        const label = document.createElement("label");
        label.textContent = selectedImage.name;
        imageContainer.appendChild(label);
      };
    });

    reader.readAsDataURL(selectedImage);
  } else {
    imageContainer.innerHTML = '<label>No image selected</label>';
  }
});

audioInput.addEventListener("change", () => {
  const selectedAudio = audioInput.files[0];
  if (selectedAudio) {
    const audio = document.createElement("audio");
    audio.controls = true;
    audio.src = URL.createObjectURL(selectedAudio);
    audio.addEventListener("loadedmetadata", () => {
      audioContainer.innerHTML = "";
      audioContainer.appendChild(audio);
      const label = document.createElement("label");
      label.textContent = selectedAudio.name;
      audioContainer.appendChild(label);
    });
  } else {
    console.log("ther is an error with the audio")
    audioContainer.innerHTML = '<label>No audio file selected</label>';
  }
});

function generateRandomCharacter() {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*1234567890-=[];?><L:"}{+_)(*&^%$#@!~`||';
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters.charAt(randomIndex);
}


submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const selectedImage = imageInput.files[0];
  const selectedAudio = audioInput.files[0];

  const randomCharacter = generateRandomCharacter();
  console.log(randomCharacter); // Output: A random character from the defined string

  if (selectedImage && selectedAudio) {
    const imageId = `${uid1}_${randomCharacter}.jpg`;
    const audioId = `${uid1}_${randomCharacter}.mp3`;
    const titleId = `${uid1}_${randomCharacter}`;
    const imageRef = storage.ref(uid1 + "/image/" + imageId);
    const audioRef = storage.ref(uid1 + "/audio/" + audioId);
    // const imageRef2 = storage.ref().child("images/" + imageId); // Updated path for images
    // const audioRef2 = storage.ref().child("audios/" + audioId); // Updated path for audios


    console.log(imageId);

    const titleData = {
      title: title.value,
      imageUrl: "",
      audioUrl: ""
    };
    const titleData2 = {
      title: titleId
    };

    const titlePromise = firebase.database().ref("UserUploads/" + titleId).set(titleData);
    const title1 = firebase.database().ref("UserUploads2/" + title.value).set(titleData2);

    // const imageTask2 = imageRef2.put(selectedImage);
    // const audioTask2 = audioRef2.put(selectedAudio);

    const imageTask = imageRef.put(selectedImage);
    const audioTask = audioRef.put(selectedAudio);

    // Show progress bar when upload starts
    progressContainer.style.display = "block";

    titlePromise.then(() => {
      console.log("Title upload successful.");
    }).catch((error) => {
      console.error(error);
    });

    title1.then(() => {
      console.log("Title2 upload successful.");
    }).catch((error) => {
      console.error(error);
    });

    // imageTask2.on("state_changed", (snapshot) => {
    //   const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //   progressBarFill.style.width = `${progress}%`;
    //   percentageSpan.textContent = `${progress.toFixed(2)}%`;
    // }, (error) => {
    //   console.error(error);
    // }, () => {
    //   console.log("Image upload successful.");
    // });


    imageTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      progressBarFill.style.width = `${progress}%`;
      percentageSpan.textContent = `${progress.toFixed(2)}%`;
    }, (error) => {
      console.error(error);
    }, () => {
      console.log("Image upload successful.");
    });

    audioTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      progressBarFill.style.width = `${progress}%`;
      percentageSpan.textContent = `${progress.toFixed(2)}%`;
    }, (error) => {
      console.error(error);
    }, () => {
      console.log("Audio upload successful.");
      progressBarFill.style.width = '0%'; // reset progress bar
      percentageSpan.textContent = '0%';
      imageInput.value = ''; // reset file input
      audioInput.value = '';
      imageContainer.innerHTML = '<label>No image selected</label>'; // reset image container
      audioContainer.innerHTML = '<label>No audio file selected</label>'; 

      const successMessage = document.querySelector("#message");
      successMessage.textContent = "Image and audio file uploaded successfully!";
    });
    // audioTask2.on("state_changed", (snapshot) => {
    //   const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //   progressBarFill.style.width = `${progress}%`;
    //   percentageSpan.textContent = `${progress.toFixed(2)}%`;
    // }, (error) => {
    //   console.error(error);
    // }, () => {
    //   console.log("Audio upload successful.");
    //   progressBarFill.style.width = '0%'; // reset progress bar
    //   percentageSpan.textContent = '0%';
    //   imageInput.value = ''; // reset file input
    //   audioInput.value = '';
    //   imageContainer.innerHTML = '<label>No image selected</label>'; // reset image container
    //   audioContainer.innerHTML = '<label>No audio file selected</label>'; // reset audio container
      
      // const successMessage = document.querySelector("#message");
      // successMessage.textContent = "Image and audio file uploaded successfully!";
    // });
  }
});
});
});
