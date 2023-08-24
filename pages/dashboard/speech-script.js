let asoBtn = document.getElementById("btn-red-choices");
let elepanteBtn = document.getElementById("btn-orange-choices");
let ibonBtn = document.getElementById("btn-yellow-choices");
let okraBtn = document.getElementById("btn-green-choices");
let ubasBtn = document.getElementById("btn-blue-choices");
let batoBtn = document.getElementById("btn-purple-choices");
let listenBtn = document.getElementById("listenBtn");
let wordDisplay = document.getElementById("word-display");
let currentWord = "aso";



const recordBtn = document.getElementById("listenBtn");
  result = document.querySelector(".results"),
  downloadBtn = document.querySelector(".download"),
  inputLanguage = document.querySelector("#language"),
  clearBtn = document.querySelector(".clear");

let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition,
  recognition,
  recording = false;

// function populateLanguages() {
//   languages.forEach((lang) => {
//     const option = document.createElement("option");
//     option.value = lang.code;
//     option.innerHTML = lang.name;
//     inputLanguage.appendChild(option);
//   });
// }





// recordBtn.addEventListener("click", () => {
  
//     result.innerHTML = "";
//     recording = true;

//     recognition = new SpeechRecognition();
//     recognition.lang = inputLanguage.value;
//     recognition.interimResults = true;
//     recordBtn.classList.add("recording");
//     recordBtn.querySelector("p").innerHTML = "Nakikinig...";

//     try {
    
//     recognition.start();
//     recognition.onresult = (event) => {
//       onCheckResult(event);
//     };
//     recognition.onspeechend = () => {
//       speechToText();
//     };
//     recognition.onerror = (event) => {
//       stopRecording();
//       if (event.error === "no-speech") {
//         alert("No speech was detected. Stopping...");
//       } else if (event.error === "audio-capture") {
//         alert(
//           "No microphone was found. Ensure that a microphone is installed."
//         );
//       } else if (event.error === "not-allowed") {
//         alert("Permission to use microphone is blocked.");
//       } else if (event.error === "aborted") {
//         alert("Listening Stopped.");
//       } else {
//         alert("Error occurred in recognition: " + event.error);
//       }
//     };
    
//   } catch (error) {
//     recording = false;

//     console.log(error);
//   }
    
// });



function stopRecording() {
  recognition.stop();
  recordBtn.querySelector("p").innerHTML = "Makinig";
  recordBtn.classList.remove("recording");
  recording = false;
}


const wordList = ["aso", "elepante", "ibon", "okra", "ubas", "bato"];
const buttonList = [asoBtn, elepanteBtn, ibonBtn, okraBtn, ubasBtn, batoBtn];
const wordDisplayList = ["a-so", "e-le-pan-te", "i-bon", "ok-ra", "u-bas", "ba-to"];
let count = 0;


recordBtn.addEventListener("click", startRecognition);


function startRecognition() {
  // recordBtn.innerHTML = "Nakinig...";

  result.innerText = ``;

  recognition = new SpeechRecognition();
  recognition.lang = "tl";


  recognition.interimResults = true;
  recordBtn.classList.add("recording"); 
  recordBtn.querySelector("p").innerHTML = "Nakikinig...";

  
  recognition.onresult = (event) => {
    
    console.log(event);

    const speechResult = event.results[0][0].transcript.toLowerCase();


    if (speechResult.includes(currentWord)) {
      result.innerHTML = "";
      let newPrompt = confirm("Tama! Ipatuloy?");
      setTimeout(() => {
        if (newPrompt == true) {
          startRecognition();
        } else {
          recordBtn.querySelector("p").innerHTML = "Makinig";
          return;
        }
      }, 100)
      if (count === 6) return;
      count++;
      result.innerHTML = currentWord;
      currentWord = wordList[count];
      buttonList[count].disabled = false;
      wordDisplay.innerText = wordDisplayList[count];
      
      if (newPrompt == false) return;
      // stopRecording();
    }

    if (event.results[0].isFinal) {
        result.innerHTML += " " + speechResult;
        // result.querySelector("p").remove();
    } 


  };
  
  recognition.start();
}