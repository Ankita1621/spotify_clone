console.log("Welcome to spotify");
//initialize variables
let songIndex=0;
let audioElement = new Audio('41.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar =document.getElementById('myprogressBar');
let mastersongName=document.getElementById('mastersongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName : "2002",filePath:"E:\Spotify\41.mp3", coverPage: "41.png"},
    {songName : "Friends",filePath:"E:\Spotify\42.mp3", coverPage: "42.png"},
    {songName : "Our Song",filePath:"E:\Spotify\43.mp3", coverPage: "43.png"},
    {songName : "Alarm",filePath:"E:\Spotify\44.mp3", coverPage: "44.png"},
    {songName : "Ciao Adios",filePath:"E:\Spotify\45.mp3", coverPage: "45.png"},
    {songName : "Who I Am",filePath:"E:\Spotify\46.mp3", coverPage: "46.png"},
    {songName : "Rockabye",filePath:"E:\Spotify\47.mp3", coverPage: "47.png"},
    {songName : "Beautiful",filePath:"E:\Spotify\48.mp3", coverPage: "48.png"},
    {songName : "Birthday",filePath:"E:\Spotify\49.mp3", coverPage: "49.png"},
    {songName : "Problems",filePath:"E:\Spotify\50.mp3", coverPage: "50.png"},
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
          audioElement.src = `E:\Spotify/${songIndex+41}.mp3`;
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
    audioElement.src = `E:\Spotify/${songIndex+41}.mp3`;
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
    audioElement.src = `E:\Spotify/${songIndex+41}.mp3`;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
 
