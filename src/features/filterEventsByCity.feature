Feature: Filter events by city

    Scenario: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.
        Given user hasn’t searched for any city
        When the user opens the app
        Then the user should see a default number of upcoming events

    Scenario: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.
        Given the main page is open
        When user starts typing in the city textbox
        Then the user should see a list of cities (suggestions) that match what they’ve typed

    Scenario: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.
        Given the user was typing “Berlin” in the city textbox
        And the list of suggested cities is showing
        When the user selects a city (e.g., “Berlin, Germany”) from the list
        Then their city should be changed to that city (i.e., “Berlin, Germany”)
        And the list of suggestions should disappear.
        And the user should receive a list of upcoming events in that city