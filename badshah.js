console.log("Welcome to spotify");
//initialize variables
let songIndex=0;
let audioElement = new Audio('21.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar =document.getElementById('myprogressBar');
let mastersongName=document.getElementById('mastersongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName : "Mercy",filePath:"E:\Spotify\21.mp3", coverPage: "21.png"},
    {songName : " Bad Boy x Bad Girl",filePath:"E:\Spotify\22.mp3", coverPage: "22.png"},
    {songName : "She Move It Like",filePath:"E:\Spotify\23.mp3", coverPage: "23.png"},
    {songName : " Jugnu",filePath:"E:\Spotify\24.mp3", coverPage: "24.png"},
    {songName : "Genda Phool",filePath:"E:\Spotify\25.mp3", coverPage: "25.png"},
    {songName : "Pani Pani",filePath:"E:\Spotify\26.mp3", coverPage: "26.png"},
    {songName : "Buzz",filePath:"E:\Spotify\27.mp3", coverPage: "27.png"},
    {songName : "paagal",filePath:"E:\Spotify\28.mp3", coverPage: "28.png"},
    {songName : "Lets Nacho",filePath:"E:\Spotify\29.mp3", coverPage: "29.png"},
    {songName : "Kar Gayi Chull",filePath:"E:\Spotify\30.mp3", coverPage: "30.png"},
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
          audioElement.src = `E:\Spotify/${songIndex+21}.mp3`;
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
    audioElement.src = `E:\Spotify/${songIndex+21}.mp3`;
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
    audioElement.src = `E:\Spotify/${songIndex+21}.mp3`;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
 
