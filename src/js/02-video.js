import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

function saveTimePlayer() {
  const iframe = document.querySelector('#vimeo-player');
  const player = new Vimeo(iframe);
  const STORAGE_KEY = 'videoplayer-current-time';

  player.on(
    'timeupdate',
    throttle(function ({ seconds }) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seconds));
    }, 1000)
  );

  player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_KEY)) || 0);
}

saveTimePlayer();
