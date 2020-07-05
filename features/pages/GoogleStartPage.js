var actions = {
    setSearchInput: function (value) {
        return this
            .waitForElementVisible('@searchInput', 3000)
            .setValue('@searchInput', value)
    },
    clickSearchButton: function () {
        return this
            .waitForElementVisible('@searchButton', 3000)
            .click('@searchButton')
    }
}

var checks = {

}

module.exports = {
    url: "http://www.google.com",
    commands: [actions, checks],
    elements: {
        searchInput: 'input[name="q"]',
        searchButton: 'input[name="btnK"]'
    }
}