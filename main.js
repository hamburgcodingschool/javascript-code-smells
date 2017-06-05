$(document).ready(function() {
    $.getScript("smell-search.js");
    $("#introduction").load("introduction.txt");
});

$("#search-button").click(function() {
    var query = $("#search-input").val();
    search(query, function(results) {
        $("#smells").empty();
        $("<div/>", {
            html: makeList(results)
        }).appendTo("#smells");
    });
});

function makeList(smells) {
    var list = [];
    for (var i = 0; i < smells.length; i++) {
        var smell = smells[i];
        list.push("<a id='smell-" + i + "' href='code-smells.html?smell=" + smell.id + "' class='list-group-item'>"
                + smell.name + "</a>");
    }
    return list.join("");
}