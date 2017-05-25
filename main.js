$(document).ready(function() {
    $("#introduction").load("introduction.txt");
});

console.log("Large Class".search("Class"));

$("#search-button").click(function() {
    var search_text = $("#search-input").val();

    var data = $.getJSON("code-smells.json", function(data) {
        var items = [];
      $.each(data, function(i, value) {
        var name = value.name;
        console.log("name: " + name);
        console.log("input: " + search_text);
        var indexOf = name.toLowerCase().search(search_text.toLowerCase());
        console.log(indexOf);
        if (name.toLowerCase().search(search_text.toLowerCase()) >= 0) {
            items.push( "<a id='smell-" + i + "' href='code-smells.html?smell=" + value.id + "' class='list-group-item'>" + name + "</li>" );
            console.log("match: " + name);
        }
      });
      console.log(items);
      $("#smells").empty();
      $( "<div/>", {
          "class": "my-new-list",
          html: items.join( "" )
        }).appendTo( "#smells" );
    });
});

$(document).ready(function() {
    var smell = getUrlVars()["smell"];
    var page = "content/" + smell + ".txt";
    console.log("Page: " + page);
    $.getJSON("code-smells.json", function(data) {
        $.each(data, function(i, value) {
            if (value.id == smell) {
                console.log("Name: " + value.name);
                $("#title").text(value.name);
            }
        });
    });
    $("#content").load(page);
});

// Read the page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}