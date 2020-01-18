$(document).ready(function(){
    let parameters = window.location.search
    const urlParams = new URLSearchParams(parameters)
    if (urlParams.has('q')) {
        const q = urlParams.get('q')
        $("#title").text("Resultados encontrados (" + q + ")")
    } else {
        window.open("index.html", "_self")
    }
})