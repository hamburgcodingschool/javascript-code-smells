QUnit.test("Search for 'class'", function(assert) {
    var done = assert.async();
    search("class", function(items) {
        assert.ok(items.length == 5);
        assert.equal(items[0].name, "Large Class", "The name of the first result should be 'Large Class'");
        assert.equal(items[1].name, "Lazy Class", "The name of the second result should be 'Lazy Class'");
        assert.equal(items[2].name, "Alternative Classes with Different Interfaces",
                "The name of the third result should be 'Alternative Classes with Different Interfaces'");
        assert.equal(items[3].name, "Incomplete Library Class",
                "The name of the fourth result should be 'Incomplete Library Class'");
        assert.equal(items[4].name, "Data Class", "The name of the fifth result should be 'Data Class'");
        done();
    });
});

QUnit.test("Create an <a> tag with makeList()", function(assert) {
    var items = [];
    items.push({
        id: "duplicated-code",
        name: "Duplicated Code"
    });
    var list = makeList(items);
    assert.equal(list, "<a id='smell-0' href='code-smells.html?smell=duplicated-code' class='list-group-item'>Duplicated Code</a>");
});