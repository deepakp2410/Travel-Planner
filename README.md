# Travel Itinerary Planner

## Introduction
This project is a web-based Travel Itinerary Planner that helps users plan and organize their trips. It allows users to input their destination, date, and planned activities. The itinerary is displayed on the screen, and locations are marked on an interactive map powered by Leaflet and OpenStreetMap.

## Features
1. Add to Itinerary: Users can enter a destination, activity, and date, and it will be added to their itinerary.
2. Interactive Map: The destination is geocoded and a marker is placed on a map, along with the activity and date.
3. Itinerary List: A list of planned destinations and activities is displayed.
4. Responsive Design: The interface is designed to be accessible on both desktop and mobile devices.

## Files Included
1. index.html: The main HTML file that structures the page and links external stylesheets and JavaScript files.
2. styles.css: Contains the styles for the layout, form, itinerary list, and map.
3. script.js: The JavaScript file that handles adding activities to the itinerary, interacting with the map, and geocoding the destination.

## How to Use
1. Open the `index.html` file in a web browser.
2. Enter a destination, date, and activity in the provided form.
3. Click "Add to Itinerary" to save the destination and activity in the list and add a marker to the map.
4. The map will show the locations you added to the itinerary, and clicking on the markers will display the corresponding activities and dates.

## Map Integration
The application uses the Leaflet JavaScript library to display an interactive map with the following features:
- OpenStreetMap Tile Layer: The map uses OpenStreetMap tiles to display the world map.
- Geocoding: When a user adds a destination, the app fetches latitude and longitude coordinates for the location using OpenStreetMap's Nominatim service and adds a marker to the map.

## Styling and Layout
- The app has a gradient background for a pleasant look.
- The form and itinerary list are displayed in a clean and user-friendly layout with responsive design considerations.
- The map is displayed in a flexible, large container to provide a clear view of the locations added to the itinerary.

## How It Works
1. Form Submission: Users input a destination, date, and activity. When they click "Add to Itinerary," this data is used to create a new itinerary item.
2. Geocoding: The app sends the destination to the OpenStreetMap Nominatim API, which returns the latitude and longitude of the location.
3. Map Markers: A marker is placed on the map at the corresponding latitude and longitude. The marker displays the destination, activity, and date when clicked.
4. Itinerary List: The inputted data is also added as a list item in the itinerary.

## Customization
- To add more functionality, you can integrate a database to save the itinerary or allow users to download it.
- You can add more styling, such as theme options or more advanced map interactions (like zoom presets or cluster markers).
- If desired, the destination list can be enhanced to include real-time weather information or other travel-related details.

## API Used
- Nominatim (OpenStreetMap): For converting the destination text into geographic coordinates (geocoding).

## Requirements
- An internet connection is required for loading the map tiles and fetching geocoding data.

## Conclusion
The Travel Itinerary Planner is a simple and effective tool for creating travel plans, organizing destinations, and visualizing them on a map. It can be further enhanced to suit specific user needs for trip planning.

## Demonstration
Check out the demo video on https://www.linkedin.com/posts/deepak-patil-23772b252_travelplanner-webdevelopment-frontenddevelopment-activity-7235206670098800642-sRYd?utm_source=share&utm_medium=member_desktop to see the Travel Itinerary Planner in action!