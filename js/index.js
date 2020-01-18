$(document).ready(function(){
    setTimeout(()=>{
        $(".loading").fadeOut()
    }, 5000)
    $("#buscar").click(function() {
        let q = $("#input").val()
        window.open("search.html?q=" + q, "_self")
    })
})