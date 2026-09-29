$(document).ready(function() {

    $('#cronoTaito .temas').each(function() {

        var $tema = $(this);

        var link = $tema.attr('data-link');
        var name = $tema.attr('data-name');
        var date = $tema.attr('data-date');
        var status = $tema.attr('data-status');
        var participants = $tema.attr('data-participants');

        $tema.html(
            '<a href="' + link + '" title="Ver tema">' +
                '<i class="game-icon game-icon-pin"></i>' +
            '</a>' +

            '<span class="titulotema">' +
                '<strong>' + name + '</strong>' +
                date + ' • ' + status +
            '</span>' +

            '<span class="participantetema">' +
                'Tema con: ' + participants +
            '</span>'
        );

    });

});