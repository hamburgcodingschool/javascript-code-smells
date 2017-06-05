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