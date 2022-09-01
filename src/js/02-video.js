import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

function saveTimePlayer() {
  const iframe = document.querySelector('#vimeo-player');
  const player = new Vimeo(iframe);
  const STORAGE_KEY = 'videoplayer-current-time';

  player.on(
    'timeupdate',
    throttle(function (parm) {
      console.log(parm.seconds);

      localStorage.setItem(STORAGE_KEY, JSON.stringify(parm.seconds));
    }, 1000)
  );

  player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_KEY)) || 0);
}

saveTimePlayer();
