let radios = [
    {
        name: "Fip",
        stream: "https://stream.radiofrance.fr/fip/fip.m3u8",
        infos: "https://www.radiofrance.fr/api/v2.1/stations/fip/live/webradios/fip"
    },
    {
        name: "Groove",
        stream: "https://stream.radiofrance.fr/fipgroove/fipgroove.m3u8",
        infos: "https://www.radiofrance.fr/api/v2.1/stations/fip/live/webradios/fip_groove"
    },
    {
        name: "Metal",
        stream: "https://stream.radiofrance.fr/fipmetal/fipmetal.m3u8",
        infos: "https://www.radiofrance.fr/api/v2.1/stations/fip/live/webradios/fip_metal"
    },
    {
        name: "Reggae",
        stream: "https://stream.radiofrance.fr/fipreggae/fipreggae.m3u8",
        infos: "https://www.radiofrance.fr/api/v2.1/stations/fip/live/webradios/fip_reggae"
    },
    {
        name: "Rock",
        stream: "https://stream.radiofrance.fr/fiprock/fiprock.m3u8", 
        infos: "https://www.radiofrance.fr/api/v2.1/stations/fip/live/webradios/fip_rock"
    }
]

radios.forEach(radio => {
    console.log(radio.infos)
    fetch(`${radio.infos}`, {
        mode: "no-cors"
    })
        .then(response => response.text())
        .then(data => {
            console.log(data)
            document.getElementById("radios").innerHTML += `
            <div class="col s4">
                <div class="card">
                    <div class="card-image">
                        <img src="images/sample-1.jpg">
                        <span class="card-title">Card Title</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light"><i class="material-icons">add</i></a>
                    </div>
                    <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
            </div>
            `
        })
})

// let player;

// player = new Player("live");