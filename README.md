# NuvalenceAddressBook

Hello, I'm Hubert. Thank you for checking out my app! 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

<!-- ## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). -->

## Approach

When considering the use case for this app, I assumed that most users would be using the app to navigate through their stored contacts, rather than expecting a constantly refreshing list of contacts. With this assumption the app was built to smooth out this experience in the following ways.

  
### Reduced Number of Requests

A major consideration when using the app is reducing wait times. The goal is to minimize the time the user spends waiting for contacts to load, and maximize the time a user can spend navigating through contacts.

To ensure this, the contacts list will only send a request upon initial load and upon user's input (refresh button). Window history states allow the contacts list to be stored and retrieved, so a user can quickly navigate through them.

Currently the app is making a request of 50 contacts. The list will display ten contacts at a time and allow the user to flip through pages to see the rest.
  

### Mobile Ready

Seeing the that 70% of the users were on mobile, the app was made to ensure responsiveness, primarily using Bootstrap. A number of other considerations came into play: 

* On the Details Page, the back button is moved closer to the thumb position to provide easier access.
* In the List Page, 
	* The page buttons are moved to the bottom. This provides easier thumb access, and far reduces the possibility of mis-clicking the refresh button.
	* The phone number is hidden for screen compatibility. 


## Future Improvements

### Searching, Filtering, Sorting

The biggest ommission from this first of the app is the absence of filtering, sorting, and search features. I normally consider these a staple in applications like this, but ran into a number of questions. 
- Are we assuming that the initial request is retrieving all of the user's contacts from the database?
- If not, how are we to handle the process of retrieving more contacts from the DB? 

Because of these uncertainties, the decision was made to keep this version closer to what was specified in the instructions. Searching, filtering, and sorting were omitted for this time. 

**Estimated time to Complete: 1 day**

### UI Streamlining

To further the experience for mobile users, I would have implemented an accordion style interface to the list. This would have reduced the number of 'clicks' needed to navigate through the contact list and may have been a more enjoyable experience. 

**Estimated time to Complete: 0.5 day**



### Accessibility Improvements

Starting to grow in the accessibility area. But I have garnered multiple insights including: 
- Ensuring important pieces of information are tab focusable
- Descriptive HTML, including aria-labels, alt tags, and titles.
- Enable keypresses to work with pagination


Estimated time to Complete: 0.5 day

### Testing
Although some work has been done, I would have liked to include more extensive unit tests. 

**Estimated Time to Complete: 1 day**







