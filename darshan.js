console.log("Welcome to spotify");
//initialize variables
let songIndex=0;
let audioElement = new Audio('11.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar =document.getElementById('myprogressBar');
let mastersongName=document.getElementById('mastersongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName : "Pehli Mohabbat",filePath:"E:\Spotify\11.mp3", coverPage: "11.png"},
    {songName : "Do Din",filePath:"E:\Spotify\12.mp3", coverPage: "12.png"},
    {songName : "Sari Ki Sari",filePath:"E:\Spotify\13.mp3", coverPage: "13.png"},
    {songName : "Shab Tum Ho",filePath:"E:\Spotify\14.mp3", coverPage: "14.png"},
    {songName : "Ek Tarfa",filePath:"E:\Spotify\15.mp3", coverPage: "15.png"},
    {songName : "Tera Zikr",filePath:"E:\Spotify\16.mp3", coverPage: "16.png"},
    {songName : "Jannat Ve",filePath:"E:\Spotify\17.mp3", coverPage: "17.png"},
    {songName : "Bhula Diya",filePath:"E:\Spotify\18.mp3", coverPage: "18.png"},
    {songName : "Chogada",filePath:"E:\Spotify\19.mp3", coverPage: "19.png"},
    {songName : "Kamariya ",filePath:"E:\Spotify\20.mp3", coverPage: "20.png"},
]
songItems.forEach((element,i)=>{
     element.getElementsByTagName("img")[0].src=songs[i].coverPage;
     element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressBar.value = progress;
})

myprogressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = myprogressBar.value*audioElement.duration/100;
})
const makeallplays = ()=>{
   
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
       
    })
}

    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
         element.addEventListener('click',(e)=>{
         makeallplays();
         songIndex = parseInt(e.target.id);
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         mastersongName.innerText = songs[songIndex].songName;
          audioElement.src = `E:\Spotify/${songIndex+11}.mp3`;
          audioElement.currentTime = 0;
          audioElement.play();
          masterPlay.classList.remove('fa-play-circle');
          masterPlay.classList.add('fa-pause-circle');
         })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `E:\Spotify/${songIndex+11}.mp3`;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
 
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `E:\Spotify/${songIndex+11}.mp3`;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
 
