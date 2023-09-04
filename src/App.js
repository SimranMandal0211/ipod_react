import React from "react";
import songs from "./assets/js/songs";
import images from "./assets/js/images";


class App extends React.Component{
  constructor(){
    super();
    const song1 = new Audio(songs.music1);
    const song2 = new Audio(songs.music2);
    const song3 = new Audio(songs.music3);
    this.state = {
      // State Managing the menu
      menu: {
        // menu options along with their sub-menu options
        options: [
          {
            music: ["all-songs", "artists", "albums"],
          },
          {
            games: [],
          },
          {
            coverflow: [],
          },
          {
            settings: [
              "change-wallpaper",
              "change-orientation",
              "change-theme",
            ],
          },
        ],

        // Making the menu visible
        menuVisible: "no",
        musicVisible: "no",
        settingsVisible: "no",

        // menu options index for traversal in options and sub options
        optionsIndex: 0,
        musicIndex: 0,
        settingsIndex: 0,

        // used for main page rendering like songs, artists, albums
        pageRender: "no",
      },

      // state managing the screen display
      screen: {
        // list of wallpapers, pages in backgrounds to render
        wallpaper: [
          // wallpapers
          images.wallpaper1,
          images.wallpaper2,
          images.wallpaper3,
          images.wallpaper4,
          images.wallpaper5,
          // coverflow
          images.coverflow,
          // games
          images.games,
          // all songs
          images.allsongs,
          // artists
          images.artists,
          // albums
          images.albums,
        ],

        // wallpaper index for traversal in wallpaper Array to access wallpaper
        wallpapaerIndex: 0,
        // wallpaper index for traversal in wallpaper Array for every screeb
        screenIndex: 0,
      },

      // state managing the mouse click CSS effect
      mouse: {
        innerCircle: "",
      },

      // state managing the songs
      songsList: {
        songs: [song1, song2, song3],
        thumbnails: [images.song1Img, images.song2Img, images.song3Img],
        songIndex: 0,
        name: ["Stay", "Senorita", "Yummy"],
        isPlaying: false,
      },

      // state managing the theme
      theme: {
        themeList: ["Classic", "Dark"],
        themeIndex: 0,
      },
    };

    // Reference to access the component
    this.controllerRef = React.createRef();
    this.progressRef = React.createRef();
  }

  // Functionality to choose the menu to display and handle the Menu Clicks
  

  // render the app component
  render(){
    const { menu, screen, mouse, songList, theme } = this.state;

    return (
      <div className="App">
        <h1>Ipod</h1>
      </div>
    )
  }

}
// function App() {
//   return (
//    <h1>ipod react app</h1>
//   );
// }

export default App;
