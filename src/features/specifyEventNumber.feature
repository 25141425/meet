Feature: Event List Display

  Scenario: When user hasn’t specified a number, 32 events are shown by default
    Given the user has not specified a number of events to display
    Then 32 events should be displayed by default

  Scenario: User can change the number of events displayed
    Given the user is on the events page
    When the user specifies a number of events to display
    Then the list of events should update to show the specified number of events
