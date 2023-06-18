
const playlist = [
  'mbackground.mp3',
  'mbackground2.mp3',
];

const audioPlayer = document.getElementById('audio-player');
let currentSongIndex = 0;

audioPlayer.addEventListener('ended', () => {
  // When the current song ends, move to the next song in the playlist
  currentSongIndex = (currentSongIndex + 1) % playlist.length;
  audioPlayer.src = playlist[currentSongIndex];
  audioPlayer.play();
});

// Start playing the first song in the playlist
audioPlayer.src = playlist[currentSongIndex];
audioPlayer.play();



(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let birthday = "Jul 29, 2023 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
  
            headline.innerText = "Today is my";
            countdown.style.display = "none";
            content.style.display = "block";
  
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());
    