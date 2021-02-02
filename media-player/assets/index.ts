import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/Ads'
const video = document.querySelector("video")

const player = new MediaPlayer({ el: video, 
  plugins: [
    new AutoPlay(), new AutoPause(), new Ads()
  ]});

const button: HTMLElement = document.querySelector("button[name='play']")
const button2: HTMLElement = document.querySelector("button[name='mute']")
button.onclick = () => player.togglePlay();
button2.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  });
}