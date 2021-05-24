# CF_meet-app

## FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

### As a user I want to toogle details of an event, so I can have a better overview or get more information about events respectively.

**Scenario 1: An event element is collapsed by default**
GIVEN user hasn’t searched for any city  
WHEN user opens the app  
THEN user should see upcoming events each with a button with the text “show details”  

**Scenario 2: User can expand an event to see its details**
GIVEN user sees as list of upcoming events  
WHEN user clicks button with text “show details”  
THEN user sees details for that particular event  

**Scenario 3: User can collapse an event to hide its details**
GIVEN user has expanded the details of an event  
WHEN user clicks button with text “hide details”  
THEN user sees doesn’t see details for the particular event  


## FEATURE 3: SPECIFY NUMBER OF EVENTS

### As a user I’d like to specify the events to be displayed to I’m not overwhelmed with events that aren’t relevant.

**Scenario 1: When user hasn’t specified a number, 32 is the default number**
GIVEN the main page is open  
WHEN user hasn’t entered a number in textbook “Number of Events”  
THEN user sees the default value 32  


**Scenario 2: User can change the number of events they want to see**
GIVEN the main page is open  
WHEN user enters number “5” in textbook “Number of Events”  
THEN user sees a list of “5” events  

## FEATURE 4: USE THE APP WHEN OFFLINE

### As a user I want to view my last search offline, so I can check upcoming events where there is low or no internet connection.

**Scenario 1: Show cached data when there’s no internet connection**
GIVEN user has search for events in “Berlin” last  
AND app has no internet connection  
WHEN user opens app  
THEN user sees a list of upcoming events for “Berlin”  


**Scenario 2: Show error when user changes the settings (city, time range)**
GIVEN user has search for events in “Berlin” last  
AND app has no internet connection  
WHEN user opens app  
AND user searches for events in “Hamburg”  
THEN user sees an error message “No internet connection.”  

## FEATURE 5: DATA VISUALIZATION

### As a user I want to see data visualization about events in a given city so I have a better overview over what’s up.

**Scenario 1: Show a chart with the number of upcoming events in each city**
GIVEN the main page is open  
WHEN user searches for events in “Berlin”  
USER sees chart with upcoming events in “Berlin”  



