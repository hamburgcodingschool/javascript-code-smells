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