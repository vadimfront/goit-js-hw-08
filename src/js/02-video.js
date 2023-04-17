import { throttle } from 'lodash';
import Player from '@vimeo/player';

const player = new Player('vimeo-player');

function setInLocal(time) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
}

function getFromLocal() {
  const timeObj = localStorage.getItem('videoplayer-current-time');
  if (timeObj === null) return 0;
  const { seconds } = JSON.parse(timeObj);
  return seconds;
}

function setSavedTime() {
  const time = getFromLocal();
  player.setCurrentTime(time);
}

player.on(
  'timeupdate',
  throttle(time => setInLocal(time), 1000)
);

document.addEventListener('DOMContentLoaded', setSavedTime);
