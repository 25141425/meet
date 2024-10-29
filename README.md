# Meet App

## Objective

Build a serverless, progressive web application (PWA) with React, following a test-driven development (TDD) approach. This app uses the Google Calendar API to fetch and display upcoming events in various cities, allowing users to stay informed about local happenings with or without internet access.

### Technical Requirements

    React & TDD: The app is built with React using TDD to ensure high code quality.
    Serverless Functions: Using AWS Lambda for serverless authorization with the Google Calendar API.
    Responsive & Cross-Platform: Designed for desktop and mobile, with support for modern browsers and IE11.
    PWA Features: Offline support, installable on mobile/desktop, and passes Lighthouse's PWA checklist.
    GitHub Hosting & Deployment: Deployed on GitHub Pages with continuous delivery integration.

### Project Highlights

This project combines TDD, serverless architecture, PWAs, and data visualization to deliver a scalable, high-performance web app that enhances the user experience through responsive design, offline capability, and meaningful data insights.

## User Stories

### Feature 2: Show/Hide Event Details
As a user, I should be able to show or hide event details so that I can view more or less information as needed.

### Feature 3: Specify Number of Events
As a user, I should be able to specify the number of events displayed so that I can control how many events I see at once.

### Feature 4: Use the App When Offline
As a user, I should be able to use the app when offline so that I can access event information without an internet connection.

### Feature 5: Add an App Shortcut to the Home Screen
As a user, I should be able to add an app shortcut to my home screen so that I can access the app quickly.

### Feature 6: Display Charts Visualizing Event Details
As a user, I should be able to view charts that visualize event details so that I can better understand event trends and data.

## GHERKIN:

## Feature 2: Show/Hide Event Details

### Scenario 1: An event element is collapsed by default.
Given the user is on the events page
Then each event element should be collapsed by default.

### Scenario 2: User can expand an event to see details
Given the user is on the events page and an event element is collapsed;
When the user clicks on the event element;
Then the event element should expand to show details.

### Scenario 3:User can collapse an event to hide details.
Given the user has expanded an event to view its details; When the user clicks on the expanded event element; Then the event element should collapse to hide the details.

## Feature 3: Specify Number of Events

### Scenario 1: When user hasn’t specified a number, 32 events are shown by default.
Given the user has not specified a number of events to display; Then 32 events should be displayed by default.

### Scenario 2: User can change the number of events displayed
Given the user is on the events page;
When the user specifies a number of events to display;
Then the list of events should update to show the specified number of events.

## Feature 4: Use the App When Offline

### Scenario 1: Show cached data when there’s no internet connection.
Given the user has accessed the app while online in the past;
When there is no internet connection;
Then the app should display cached data from the last session.

### Scenario 2: Show error when user changes search settings (city, number of events).
Given there is no internet connection;
When the user changes search settings (e.g., city, number of events);
Then an error message should be displayed indicating that the app is offline.

## Feature 5: Add an App Shortcut to the Home Screen

### Scenario 1: User can install the meet app as a shortcut on their device home screen.
Given the user is on the app;
When the user is prompted to install the app as a shortcut;
Then the user should be able to add a shortcut to the app on their device home screen.

## Feature 6: Display Charts Visualizing Event Details
### Scenario 1: Show a chart with the number of upcoming events in each city.
Given the user is viewing the event overview page;
Then a chart should be displayed showing the number of upcoming events in each city.
