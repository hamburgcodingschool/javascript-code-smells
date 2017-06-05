$(document).ready(function() {
    $("#introduction").load("introduction.txt");
});

$("#search-button").click(function() {
    var query = $("#search-input").val();
    search(query, function(results) {
        var list = makeList(results);
        $("#smells").empty();
        $("<div/>", {
            html: list
        }).appendTo("#smells");
    });
});

function search(query, callback) {
    $.getJSON("code-smells.json", function(data) {
        var results = [];
        $.each(data, function(i, value) {
            getMatchingSmells(query, value, results);
        });
        callback(results);
    });
}

function getMatchingSmells(query, smell, results) {
    if (smell.name.toLowerCase().search(query.toLowerCase()) >= 0) {
        results.push(smell);
    }
}

function makeList(smells) {
    var list = [];
    for (var i = 0; i < smells.length; i++) {
        var smell = smells[i];
        list.push("<a id='smell-" + i + "' href='code-smells.html?smell=" + smell.id + "' class='list-group-item'>"
                + smell.name + "</a>");
    }
    return list.join("");
}