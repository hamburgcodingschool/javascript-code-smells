QUnit.test("hello test", function(assert) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test("Search for 'class'", function(assert) {
    var done = assert.async();
    search("class", function(items) {
        console.log(items);
        assert.equal(items[0].name, "Large Class", "1");
        assert.equal(items[1].name, "Lazy Class", "2");
        assert.equal(items[2].name, "Alternative Classes with Different Interfaces", "3");
        assert.equal(items[3].name, "Incomplete Library Class", "4");
        assert.equal(items[4].name, "Data Class", "5");
        done();
    });
});