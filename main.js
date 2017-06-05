$(document).ready(function() {
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

function search(query, callback) {
    $.getJSON("code-smells.json", function(data) {
        var results = [];
        findMatchingSmells(query, data, results);
        callback(results);
    });
}

function findMatchingSmells(query, data, results) {
    $.each(data, function(i, smell) {
        if (matches(smell, query)) {
            results.push(smell);
        }
    });
}

function matches(smell, query) {
    return smell.name.toLowerCase().search(query.toLowerCase()) >= 0;
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