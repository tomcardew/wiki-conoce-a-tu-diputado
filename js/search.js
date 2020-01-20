$(document).ready(function(){
    let parameters = window.location.search
    const urlParams = new URLSearchParams(parameters)
    if (urlParams.has('q')) {
        const q = urlParams.get('q')
        $("#title").text("Resultados encontrados para '" + q + "'")
        searchFor(q)
    } else {
        window.open("index.html", "_self")
    }
})

function searchFor(q){
    $.ajax({
        url: "php/search.php",
        data: "fn=search&q=" +  q,
        type: "post",
        success: function (response) {
            printResponse(response)
        },
        dataType: 'json',
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}

function printResponse(response) {
    const size = response.length
    $("#nresults").text(size + " resultados")
    var body = $("#body")
    for (var i in response) {
        var element = response[i]
        var tr = $("<tr></tr>")
        var distrito = $("<td>"+element[1]+"</td>")
        var municipio = $("<td>"+element[2]+"</td>")
        var colonia = $("<td>"+element[3]+"</td>")
        var seccion = $("<td><a href='result.html?seccion="+element[4]+"'>"+element[4]+"</a></td>")
        tr.append(distrito)
        tr.append(municipio)
        tr.append(colonia)
        tr.append(seccion)
        body.append(tr)
    }
}