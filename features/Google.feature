Feature: Google


  Scenario: Simple search (uid:08c248b6-821d-4c2d-99a5-7c3142686ceb)
    Given The user navigates to Google.com main page
    When The user enters "Emerald Works" in the search input
    And The user clicks the search button
    Then The user can see the search results
