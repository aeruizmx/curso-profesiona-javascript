import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'
const video = document.querySelector("video")

const player = new MediaPlayer({ el: video, 
  plugins: [
    new AutoPlay(), new AutoPause()
  ]});

const button = document.querySelector("button[name='play']")
const button2 = document.querySelector("button[name='mute']")
button.onclick = () => player.togglePlay();
button2.onclick = () => player.toggleMute();