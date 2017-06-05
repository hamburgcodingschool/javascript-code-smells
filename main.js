$(document).ready(function() {
    $.getScript("smell-search.js");
    $("#introduction").load("introduction.txt");
});

$("#search-button").click(function() {
    var query = $("#search-input").val();
    searchSmells();
});

$("#search-input").keyup(function(event) {
    if (event.keyCode == 13) {
        searchSmells()
    }
});

function searchSmells() {
    var query = $("#search-input").val();
    search(query, function(results) {
        $("#smells").empty();
        $("<div/>", {
            html: makeList(results)
        }).appendTo("#smells");
    });
}

function makeList(smells) {
    var list = "";
    for (var i = 0; i < smells.length; i++) {
        list += "<a id='smell-" + i + "' href='code-smells.html?smell=" + smells[i].id + "' class='list-group-item'>"
                + smells[i].name + "</a>";
    }
    return list;
}