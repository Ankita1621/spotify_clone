console.log("Welcome to spotify");
//initialize variables
let songIndex=0;
let audioElement = new Audio('31.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar =document.getElementById('myprogressBar');
let mastersongName=document.getElementById('mastersongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName : "Hamdard",filePath:"E:\Spotify\31.mp3", coverPage: "31.png"},
    {songName : " Soch na Sake",filePath:"E:\Spotify\32.mp3", coverPage: "32.png"},
    {songName : "Apna Bna Le",filePath:"E:\Spotify\33.mp3", coverPage: "33.png"},
    {songName : " Itni Si Baat",filePath:"E:\Spotify\34.mp3", coverPage: "34.png"},
    {songName : " Aabaad Barbaad",filePath:"E:\Spotify\35.mp3", coverPage: "35.png"},
    {songName : "Sukoon Mila",filePath:"E:\Spotify\36.mp3", coverPage: "36.png"},
    {songName : "Mere Yara",filePath:"E:\Spotify\37.mp3", coverPage: "37.png"},
    {songName : "Pyaar Hota Kayi Baar Hai",filePath:"E:\Spotify\38.mp3", coverPage: "38.png"},
    {songName : "Zaalima",filePath:"E:\Spotify\39.mp3", coverPage: "39.png"},
    {songName : "Pal",filePath:"E:\Spotify\40.mp3", coverPage: "40.png"},
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

myprogressBar.addEventListener('change', ()=>{
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
          audioElement.src = `E:\Spotify/${songIndex+31}.mp3`;
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
    audioElement.src = `E:\Spotify/${songIndex+31}.mp3`;
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
    audioElement.src = `E:\Spotify/${songIndex+31}.mp3`;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
 
