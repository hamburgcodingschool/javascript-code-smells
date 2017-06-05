$(document).ready(function() {
    $("#introduction").load("introduction.txt");
});

$("#search-button").click(function() {
    var query = $("#search-input").val();
    search(query, function(items) {
        var list = makeList(items);
        $("#smells").empty();
        $("<div/>", {
            html: list
        }).appendTo("#smells");
    });
});

function search(query, callback) {
    $.getJSON("code-smells.json", function(data) {
        var items = [];
        $.each(data, function(i, value) {
            getMatchingItems(query, value, items);
        });
        callback(items);
    });
}

function getMatchingItems(query, value, items) {
    var name = value.name;
    if (name.toLowerCase().search(query.toLowerCase()) >= 0) {
        items.push(value);
    }
}

function makeList(items) {
    var list = [];
    for (var i = 0; i < items.length; i++) {
        var value = items[i];
        list.push("<a id='smell-" + i + "' href='code-smells.html?smell=" + value.id + "' class='list-group-item'>"
                + value.name + "</a>");
    }
    return list.join("");
}