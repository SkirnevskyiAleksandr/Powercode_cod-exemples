function download() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "http://127.0.0.1:5500/fetch.flac")
    xhr.addEventListener('progress', (({ loaded }) => { // 'Loaded'is destructured from 'event-object' (show how much we currently download at this moment)
        console.log(loaded)
        console.log(xhr.getAllResponseHeaders())
        const max = (+xhr.getResponseHeader('content-length') / 1000000).toFixed(0) // 'content-length' it`s a property of 'getResponseHeader' witch contains our download file length;
        const current = (loaded / 1000000).toFixed(0); //rounding value
        data.innerText = ` current:${current}/total:${max}`// take #date

    }))
    xhr.send();
}

document.getElementById('run').addEventListener('click', download)