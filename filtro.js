$(document).ready(function () {
    $("#inputFiltro").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#dados tr").filter(function () {
            $(this).toggle($(this).text()
                .toLowerCase().indexOf(value) > -1)
        });
    });
});

