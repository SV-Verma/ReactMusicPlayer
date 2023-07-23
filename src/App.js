import { useState, useEffect } from "react";
import Player from "./Player";
import './App.css'
function App() {
  const [songs] = useState([
    {
      title: "Titaliya",
      artist: "Hardy Sandhu",
      img_src: "https://res.cloudinary.com/dn6uh1lxj/image/upload/v1690134942/assist/Ganeshji_gld5pr.jpg",
      src: "./music/Titliaan Warga.mp3",
    },
    {
      title: "Nach Meri Rani",
      artist: "Yo Yo Honey Singh",
      img_src: "https://res.cloudinary.com/dn6uh1lxj/image/upload/v1690134945/assist/RadhaKishna_ckn7zn.jpg",
      src: "./music/Naach Meri Rani.mp3",
    },
    {
      title: "Care Ni Karda",
      artist: "Yo Yo Honey Singh",
      img_src: "https://res.cloudinary.com/dn6uh1lxj/image/upload/v1690134947/assist/Saraswati_syvnaf.jpg",
      src: "./music/Care Ni Karda.mp3",
    },
    {
      title: "Burj Khalifa",
      artist: "Shashi",
      img_src: "https://res.cloudinary.com/dn6uh1lxj/image/upload/v1690134972/assist/Shivji_hrloje.jpg",
      src: "./music/BurjKhalifa.mp3",
    },
    {
      title: "Tango Del Fuego",
      artist: "Parov Stelar",
      img_src: "https://res.cloudinary.com/dn6uh1lxj/image/upload/v1690134972/assist/Shivji_hrloje.jpg",
      src: "./music/ParovStelarGeorgiaGibbs-TangoDelFuego.mp3",
    },
    {
      title: "Take You Dancing",
      artist: "Jason Derulo",
      img_src: "https://res.cloudinary.com/dn6uh1lxj/image/upload/v1690134947/assist/Saraswati_syvnaf.jpg",
      src: "./assets/Songs/Gayatri Mantra.mp3",
    },
    {
      title: "Daisy",
      artist: "Ashnikko",
      img_src: "https://res.cloudinary.com/dn6uh1lxj/image/upload/v1690134945/assist/RadhaKishna_ckn7zn.jpg",
      src: "./music/Ashnikko-Daisy.mp3",
    },
    {
      title: "Dolly Song",
      artist: "Partz Grimbad",
      img_src: "https://res.cloudinary.com/dn6uh1lxj/image/upload/v1690134972/assist/Shivji_hrloje.jpg",
      src: "./music/PatzGrimbard-DollySong.mp3",
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