const $ = require("jquery");

export default class SongsListManager {

    constructor(songsService, uiManager) {
        this.songsService = songsService;
        this.uiManager = uiManager;
    }

    init() {
        this.loadSongs();
    }

    loadSongs() {
        // Cargar la lista de canciones con AJAX
        this.songsService.list(songs=>{
            if (songs.length == 0) {
                // Mostramos el estado vacío
                this.uiManager.setEmpty();
            } else {
                // Componemos el HTML con todas las canciones
                this.renderSongs(songs)
              

                // Quitamos el mensaje de cargando y mostramos la lista de canciones
                this.uiManager.setIdeal();
            }

        }, error =>{
            // Mostrar el estado de error
        this.uiManager.setError();
            
                    // Hacemos log del error en la consola
                    console.error("Error al cargar las canciones", error);
        });
            }
        
        renderSongs(songs) {
            // Componemos el HTML con todas las canciones
            let html = "";
            for (let song of songs) {
                html += this.renderSong(song);
            }
            this.uiManager.setIdealHtml(html);
        }

        renderSong(song) {
            return `<article class="song">
            <img src="${song.cover_url}" alt="${song.artist} - ${song.title}" class="cover">
            <div class="artist">${song.artist}</div>
            <div class="title">${song.title}</div>
        </article>`;
        }
}