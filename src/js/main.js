window.$ = window.jQuery = require("jquery");

import SongsService from "./SongsService";
import UIManager from "./UIManager";
import SongsListManager from "./SongsListManager";
import SongFormManager from "./SongFormManager";
import PubSub from "pubsub-js";

const songService = new SongsService("/songs/");
const songListUIManager = new UIManager(".songs-list");

const songsListManager = new SongsListManager(songService, songListUIManager);
songsListManager.init();

const songFormManager = new SongFormManager(".song-form", songService);
songFormManager.init();

PubSub.subscribe("new-song", function(song){
    console.log("se ha creado una nueva canción", song);
})
