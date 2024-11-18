Feature: Show/Hide Event Details

  Scenario: An event element is collapsed by default
    Given the user is on the events page
    Then each event element should be collapsed by default

  Scenario: User can expand an event to see details
    Given the user is on the events page and an event element is collapsed
    When the user clicks on the event element
    Then the event element should expand to show details
    
  Scenario: User can collapse an event to hide details
    Given the user has expanded an event to view its details
    When the user clicks on the expanded event element
    Then the event element should collapse to hide the details
