$(document).ready(function(){
    let parameters = window.location.search
    const urlParams = new URLSearchParams(parameters)
    if (urlParams.has('seccion')) {
        const q = urlParams.get('seccion')
    } else {
        window.open("index.html", "_self")
    }
})