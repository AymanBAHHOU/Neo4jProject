
depart = $('#depart').text();
destination = $('#destination').text();
co = "?depart=" + depart + "&destination=" + destination;
$(document).ready(function() {
    $.ajax({
        type : "GET",
        url : "localhost:8080/itineraries",
        success : function(result){
            ("#results-container").empty();
            console.log("result " + result.content);
            $.each(result.content, function(i, node){

            });
        },
        error : function(e){
            alert("ERROR: ", e);
            console.log("ERROR: ", e);
        }
    });
});

function nodeToHtml(i, node){
    '<div class="p-2">' +
        ''
}