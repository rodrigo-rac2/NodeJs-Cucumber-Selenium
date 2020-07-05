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
    assertSearchContains: function (string) {
        return this
            .waitForElementVisible('@searchDiv', 3000)
            .assert.containsText('@searchDiv', string)
    }
}

module.exports = {
    commands: [actions, checks],
    elements: {
        searchInput: 'input[name="q"]',
        searchButton: '.Tg7LZd',
        searchDiv: '#search'
    }
}