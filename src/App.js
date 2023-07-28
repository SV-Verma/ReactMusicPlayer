import { useState, useEffect } from "react";
import Player from "./Player";
import './App.css'
function App() {
  const [songs] = useState([
    {
      title: "Shri Ganeshay Namah",
      img_src: "/assets/Imgs/Ganesh.jpg",
      src: "/assets/Songs/Shri Ganeshay Namah.mp3",
    },
    {
      title: "Gayatri Mantra",
      img_src: "/assets/Imgs/saraswatii.png",
      src: "/assets/Songs/Gayatri Mantra.mp3",
    },
    {
      title: "Mahadev Ke Deewane",
      img_src: "/assets/Imgs/Shivji.jpg",
      src: "/assets/Songs/Mahadev Ke Deewane .mp3",
    },
    {
      title: "Radhe Braj Jan Man Sukhkari",
      img_src: "/assets/Imgs/Krishn.jpg",
      src: "/assets/Songs/Radhe Braj Jan Man Sukhkari.mp3",
    },
    {
      title: "Shree-Hanuman-Chalisa",
      img_src: "/assets/Imgs/Hanuman.jpg",
      src: "/assets/Songs/Shree-Hanuman-Chalisa.mp3",
    },
    {
      title: "Ghar-Mein-Padharo-Gajanan-Ji",
      img_src: "/assets/Imgs/ganeshhji.jpg",
      src: "/assets/Songs/Ghar-Mein-Padharo-Gajanan-Ji.mp3",
    },
    {
      title: "Kaun-Kehte-Hain-Bhagwan-Aate-Nahi",
      img_src: "/assets/Imgs/Krishna.jpg",
      src: "/assets/Songs/Kaun-Kehte-Hain-Bhagwan-Aate-Nahi.mp3",
    },
    {
      title: "Mere-Baba",
      img_src: "/assets/Imgs/Shiv.jpg",
      src: "/assets/Songs/Mere-Baba.mp3",
    },
    {
      title: "Tum-Prem-Ho",
      img_src: "/assets/Imgs/RadheKrishna.jpg",
      src: "/assets/Songs/Tum-Prem-Ho.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;