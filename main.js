// try x = 
// text field 
// id attrobute name atttribute 

// id="x"
// use getSelectiondoc.ID(id="x")

const socials = ['ig-link', 'li-link', 'tiktok-link', 'gmail-link', 'fb-link'];
// mysql database 

// var userName = prompt("Please enter your name:");
// if(userName != null){
//     document.getElementById("userName").innerHTML = "welcome" + userName;
    
// }

// let userName = document.querySelector("#userName");
// userName.innerHTML= "MMMMMMM";

// function userNameViewer(){
//     let userInput = document.querySelector("#userInput");
//     let message = document.querySelector("#message");

//     message.innerHTML = "user name:"+ userInput.value ;
//     // alert("test");
// }

function saveData() {
    const userData = {
        socials: {},
    };
    const name = document.getElementById("name").value;
    userData.name = name;
    // get data from form and save it to localStorage
    const about = document.getElementById("message").value;
    userData.about = about;
    socials.forEach(s => {
        userData.socials[s] = document.getElementById(s).value;
    });
    localStorage.setItem('userData', JSON.stringify(userData));
}

function displayText() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const name = userData.name || '';
    // extract data from localStorage and assign it to home page field
    const firstName = name.split(' ')[0];
    const lastName = name.split(' ').slice(1).join(' ');
    document.getElementById("userName").innerHTML = firstName;
    document.getElementById("userFamilyName").innerHTML = lastName;
    document.getElementById("about").innerHTML = userData.about || '';
    socials.forEach(s => {
        document.getElementById(s).href = userData.socials[s];
    });
}




//------------------------------------------------

// function readUrlRecord(record) {
//     console.assert(record.recordType === "url");
//     const textDecoder = new TextDecoder();
//     console.log(`URL: ${textDecoder.decode(record.data)}`);
//   }
//   const urlRecord = {
//     recordType: "url",
//     data:"https://w3c.github.io/web-nfc/"
//   };
  
//   const ndef = new NDEFReader();
//   await ndef.write({ records: [urlRecord] });










// function readURL(input){
//     document.getElementById("bannerImg").style.display = "block";

//     if(input.files&&input.files[0]){
//         var reader = new FileReader();


//         reader.onload= function(e){
//             document.getElementById('bannerImg').src = e.target.result;
//         }
//         reader.readAsDataURL(input.files[0]);
//     }
// }









// // -------------------------------------
// const inputEl = document.getElementById('file-input-element');
// // Gets input element

// inputEl.addEventListener('change' , () => {
// // Listens for new input file

//     const file = inputEl.files[0]; 
//     // Gets file from input element

//     const fr = new FileReader();
//     // Creates new FileReader object

//     fr.readAsDataURL(file);
//     // Set FileReader to output data as URL string

//     fr.addEventListener('load', () => {
//         // Waits for file reading to be complete

//         const url = fr.result
//         // Save result
        
//         const img = new Image();
//         img.src = url;
//         document.body.appendChild(img);
//         // Make URL src of image and append to DOM

//     })

// })

// inputEl.addEventListener('change' , () => {
//     const file = inputEl.files[0]; 
//     const fr = new FileReader();
//     fr.readAsDataURL(file);

//     fr.addEventListener('load', () => {
//         const url = fr.result
//         localStorage.setItem('image', url);
//         // Saves image to localStorage
//     })
// });

// const url = localStorage.getItem('image');
// // Get data URL from localStorage

// const img = new Image();
// img.src = url;
// document.body.appendChild(img);
// // Set URL as src of image and append




const fileEl = document.getElementById('file-el');
const btn = document.getElementById('btn');

btn.addEventListener('click', () =>{
    window.location.href = "/index.html";
})

fileEl.addEventListener('change', () => {

const fr = new FileReader();
fr.readAsDataURL(fileEl.files[0]);
fr.addEventListener('load', () => {

    const url = fr.result;
    localStorage.setItem('my-image', url);

})

})

localStorage.getItem('my-image');
const img = new Image();
img.src = url;
document.body.appendChild(img); 