$(function () {
    $("#correo").on("click", function () {
        var text = $(this).text();
        alert("El correo fue enviado correctamente");
    })
})
$("#chicago1, #chicago2").dblclick(function () {
    $(this).css(
        {
            color: "red",
        }
    )
})
$("#recipe1, #recipe2, #recipe3, #recipe").on("click", function () {
    if ($("#recipe1, #recipe2, #recipe3, #recipe").is(":visible")) {
        $("#recipe1, #recipe2, #recipe3, #recipe").hide();
        $("#recipe1, #recipe2, #recipe3, #recipe").text("mostrar");
    } else {
        $("#recipe1, #recipe2, #recipe3, #recipe").show();
        $("#recipe1, #recipe2, #recipe3, #recipe").text("ocultar");
    }
})