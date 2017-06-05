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
            var value = data[i];
            var name = value.name;
            var indexOf = name.toLowerCase().search(search_text.toLowerCase());
            if (name.toLowerCase().search(search_text.toLowerCase()) >= 0) {
                items.push(value);
            }
        });
        callback(items);
    });
}

function makeList(items) {
    var list = [];
    for (var i = 0; i < items.length; i++) {
        var value = items[i];
        list.push("<a id='smell-" + i + "' href='code-smells.html?smell=" + value.id + "' class='list-group-item'>"
                + value.name + "</li>");
    }
    return list.join("");
}

$(document).ready(function() {
    var smell = getUrlVars()["smell"];
    var page = "content/" + smell + ".txt";
    $.getJSON("code-smells.json", function(data) {
        $.each(data, function(i, value) {
            if (value.id == smell) {
                $("#title").text(value.name);
            }
        });
    });
    $("#content").load(page);
});

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}