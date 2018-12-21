# Bookbnb README

Bookbnb is an Airbnb clone, which is an online marketplace that sllows its uses to offer lodging to others. Users can search for homes and request to book the listing for those specific dates. Each listing has a detailed page that displays everything the user needs to know to choose their perfect getaway.

Check out Bookbnb here: bookbnb.herokuapp.com

# Technologies

Technologies used in this project include:
- React with Redux - Frontend API used to implement the main user interface and connect data transfer from the backend to the frontend
- Ruby on Rails - Backend API and connection to the database
- PostgreSQL - database
- React-dates - used to implement calendars for booking and showing availability
- Google Maps API with Places:Autocomplete


# Achievements

#### Listing Show Page


The listing show page includes unique information to each listing and its host. This page includes React-dates(calendar) which allows the user to choose specific dates to make a booking. I connected the application state to the calendar which took the user's inputted dates and rerenders to show the blocked dates when the booking is successful. I also implemented a frontend validation that grays out and disables the dates in which the listing already has bookings for. This stops other users from creating overlapping bookings. The page also includes a Google map that is centered around the listing's neighborhood. Lastly, a lot of styling was implemented to assist the user in choosing the right home, such as images and choosing guests(dropdown).

#### Connection of Google Maps and Autocomplete

On the listings page, a user is able to search for listings in a specific city and the results will be displayed on the map. The user could also search a city on the home page which would redirect them to the listings page with the entered city's results. To do this, I used Google's geocoding feature to parse the user's input into latitude and longitude coordinates. These coordinates were pushed to the browser history in which the Google map renders.

#### Sign up and Log In Modal Implementation:
Implementation of the sign up and log in form was challenging. The form included a link to open the other form. It was made in a way that clicking on the link will not redirect you to a new page but open up the other modal in the same view. To do this, I made a `ui` slice of state in the Redux application state and connected the modal to it by dispatching actions. When a user clicks on the sign up or log in button, the action is sent off which alters the component to be displayed. Additionally, I connected specific features of the view such as the `X` and darkened background to the application state which closed the modal form should the user click outside the form or on the `X`.

