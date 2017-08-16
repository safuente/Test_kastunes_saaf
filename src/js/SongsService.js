const $ = require("jquery");

export default class SongsService {
    constructor(url){
        this.url = url


    }

    //Obtener un listado de canciones
    list(successCallback, errorCallback){
        $.ajax({
            url: this.url,
            success: successCallback,
            error: errorCallback

           

        });
    }
    // Crear una canción
    create(song, successCallback, errorCallback) {
        $.ajax({
            url: this.url,
            method:"post",
            data: song,
            success: successCallback,
            error: errorCallback
        })
    }

    // Crear o actualizar canción
    save (song, successCallback, errorCallback)  {
        if (song.id){
            this.update(song, successCallback, errorCallback)
        } else{
            this.create(song, successCallback, errorCallback)
        }
       
    }

    // Obtener el detalle de una canción
    getDetail(songId, successCallback, errorCallback) {
        $.ajax({
            url:`${this.url}/${songId}`,
            success: successCallback,
            error: errorCallback
        })

    }

    // Actualizar una canción
    update(songId, successCallback, errorCallback) {
        $.ajax({
            url: `${this.url}${song.id}`,
            method:"put",
            data: song,
            success: successCallback,
            error: errorCallback
        })
    }


    // Borrar una canción
    delete(songId, successCallback, errorCallback) {
        $.ajax({
            url:`${this.url}${songId}`,
            method: 'delete',
            success: successCallback,
            error: errorCallback
        })
    }
}