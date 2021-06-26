Feature: Specify number of events
    Scenario: When user hasn’t specified a number, ten is the default number
        Given the main page is open
        When user hasn’t entered a number in textbox Number of Events
        Then user sees the default value ten

    Scenario: User can change the number of events they want to see
        Given the main page is open
        When user enters number five in textbox Number of Events
        Then user sees a list of five events