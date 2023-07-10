console.log("Welcome to spotify");
//initialize variables
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar =document.getElementById('myprogressBar');
let mastersongName=document.getElementById('mastersongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName : "Pehla Pyar",filePath:"E:\Spotify\1.mp3", coverPage: "1.png"},
    {songName : "Zara Sa",filePath:"E:\Spotify\2.mp3", coverPage: "2.png"},
    {songName : "Tu Hi Haqeeqat",filePath:"E:\Spotify\3.mp3", coverPage: "3.png"},
    {songName : "Maiyya Mainu",filePath:"E:\Spotify\4.mp3", coverPage: "4.png"},
    {songName : "Nain Ta Heere",filePath:"E:\Spotify\5.mp3", coverPage: "5.png"},
    {songName : "Faasle",filePath:"E:\Spotify\6.mp3", coverPage: "6.png"},
    {songName : "Apna Mujhe Tu Laga",filePath:"E:\Spotify\7.mp3", coverPage: "7.png"},
    {songName : "Tum Mile",filePath:"E:\Spotify\8.mp3", coverPage: "8.png"},
    {songName : "Hale Dil",filePath:"E:\Spotify\9.mp3", coverPage: "9.png"},
    {songName : "Tujhe Kitna Chahne Lage ",filePath:"E:\Spotify\10.mp3", coverPage: "10.png"},
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
    audioElement.currentTime = myprogressBar.value* audioElement.duration/100;
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
          audioElement.src = `E:\Spotify/${songIndex+1}.mp3`;
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
    audioElement.src = `E:\Spotify/${songIndex+1}.mp3`;
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
    audioElement.src = `E:\Spotify/${songIndex+1}.mp3`;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
 
