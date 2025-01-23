$(function(){
    //document ready
    alert("document ready");

    $('#searchform').submit(function(){
        var searchterms = $('#searchterms').val();
        getResultsFromOMDB(searchterms);
        return false;
    });
});


function getResultsFromOMDB (searchterms){
    var url = "http://www.omdbapi.com/?apikey=4ae9daaf&s=" + searchterms;
    $.getJSON(url, function(jsondata){
        printJSON(jsondata);
    });
}

function printJSON(jsondata) {
    var normal = JSON.stringify(jsondata);
    $('#resultsbox').append("<p>" + normal + "</p");
}