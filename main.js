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
            items.push( "<a id='smell-" + i + "' href='#' class='list-group-item'>" + name + "</li>" );
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