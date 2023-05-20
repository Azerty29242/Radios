// Fip: https://stream.radiofrance.fr/fip/fip.m3u8; https://www.radiofrance.fr/api/v2.1/stations/fip/live/webradios/fip
// Groove: https://stream.radiofrance.fr/fipgroove/fipgroove.m3u8; https://www.radiofrance.fr/api/v2.1/stations/fip/live/webradios/fip_groove
// Metal: https://stream.radiofrance.fr/fipmetal/fipmetal.m3u8; https://www.radiofrance.fr/api/v2.1/stations/fip/live/webradios/fip_metal
// Reggae: https://stream.radiofrance.fr/fipreggae/fipreggae.m3u8; https://www.radiofrance.fr/api/v2.1/stations/fip/live/webradios/fip_reggae
// Rock: https://stream.radiofrance.fr/fiprock/fiprock.m3u8; https://www.radiofrance.fr/api/v2.1/stations/fip/live/webradios/fip_rock

class Player {
    /**
     * 
     * @param {string} id The identifier of the audio
     */
    constructor(id) {
        let audio = document.getElementById(id)

        if (audio.canPlayType("application/vnd.apple.mpegurl")) {
            audio.src = ""
        } else if (Hls.isSupported()) {
            var hls = new Hls();
            hls.loadSource("https://live.m6radio.quortex.io/webpHJPXnXrN7B6J7Q8mcqmxP/grouprtl/national/long/index.m3u8");
            hls.attachMedia(audio);
        } else {
            alert("Votre navigateur ne supporte pas la lecture de cette radio")
        }

        audio.play();
    }
}