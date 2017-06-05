$(document).ready(function() {
    $("#introduction").load("introduction.txt");
});

$("#search-button").click(function() {
    var search_text = $("#search-input").val();
    search(search_text, function(items) {
        var list = makeList(items);
        $("#smells").empty();
        $("<div/>", {
            html: list
        }).appendTo("#smells");
    });
});

function search(search_text, callback) {
    $.getJSON("code-smells.json", function(data) {
        var items = [];
        $.each(data, function(i, value) {
            getMatchingItems(search_text, value, items);
        });
        callback(items);
    });
}

function getMatchingItems(search_text, value, items) {
    var name = value.name;
    var indexOf = name.toLowerCase().search(search_text.toLowerCase());
    if (name.toLowerCase().search(search_text.toLowerCase()) >= 0) {
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