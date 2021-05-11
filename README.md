# SpaceX Launch Lister

This is a React app that consume data from the SpaceX public API. The application retrieves historic and future SpaceX launches and presents them in a list view.

## Project Structure

The project is organized into directories that hold code with similar functionality, i.e. all network related code is in adaptors, misc helper functions are in utils, ect.

App.js in the src directory is the main component that imports the sub-components and lays out the App's structure. The remaining components are organized in the components directory.

## Packages Used

- create-react-app
- prettier: this keeps the project formatting consistent and (along with eslint) helps reduce bugs by catching typos
- styled-components: the project uses css-in-jsx to keep components as self contained as possible - it takes advantage of styled-component's createGlobalStyle for global css and the ThemeProvider to make it easier to change colors ect if required
- styled-reset: this package contains css to do a css reset, this helps keep styling consistent across different browsers.
- prop-types: to ensure type safety
- immutability-helper: this make it easier to deep clone objects so that state is not accidentally mutated
- msw: the mock service worker package intercepts and mocks network requests so that the api can be tested without make actual network requests

## State management

- given the project's small size, it uses React's build in state tools rather than using a state management package such as redux
- state that is used across the project is stored in the main App component and is passed down via props
- state specific to a particular component (and possibly its children) is defined on the specific component (i.e. the loading state in components/header/Button.js)
- the main state object is created with a useReducer hook, this allows for complex state changes to be defined in a separate file (reducers/launchesReducer), makes it easier to pass logic around the app (dispatch could be passed down via context to avoid prop drilling if the project grows), and is guaranteed to have a stable id - so it doesn't change on re-renders and can be called from useEffect without triggering the effect

## Network Calls

- logic for network calls is defined inside adaptors/launchesApi, these functions should be concerned solely with network requests and not with reformatting data
- the project uses the new spacex v4 api which does not include rocket information in the data returned from the launches endpoint, therefore two api calls are needed to load all the required data. to help with this, launchesApi has a helper function (getAllData) that calls requests to both endpoints in parallel and returns an object with all the data.
- the data is merged and sorted inside launchesReducer.js, this makes it easy for the Reload Data button to call getAllData and pass the returned object to dispatch

## Todo List

I didn't up having as much time to work on this project as I thought I would, therefore not everything was completed the way I would have liked. If I had more time, here are some of the things I would have improved:

### Testing

I was going to write a bunch of tests, but didn't have time. I did set up msw to intercept/mock api calls so that tests don't actually send out network requests, but that is as far as I got.

I like to write tests that simulate the way an actual user uses the app and avoid testing implementation details. For example, instead of testing launchesReducer directly, I would simulate clicking on the load data & sort/filter buttons and ensure that this displays the correct data in the app. By testing the functionality, all the methods in launchesReducer will also get called and tested. react-testing-library is great for this.

At the very least, I would have liked to:

- have an integration style test for Header.js that:

  - ensures the images & text loads as expected (including for the button)
  - use react-testing-libraries userEvent to click on the button
  - use jest.spyOn to ensure that clicking the button calls the getAllDataMethod and dispatch with the expected arguments
  - simulate a network error to ensure graceful error handling on button click

- test for App.js

  - ensure the app loads as expected
  - ensure that the getAllDataMethod and dispatch are called once and that this triggers the cards to load
  - simulate a network error to ensure graceful error handling if initial load fails

- tests for the sort button and filter by year selector to ensure they work as expected

### Error Handling

- there should be a component, probably a toast, that displays info about any catchable errors (such as network errors) to the user. currently, there is a state object on App where errors can be set, this triggers the browser alert method, but there should be a more robust method of error handling
- there should also be a react error boundary component for uncaught errors, otherwise React will unmount the whole component tree if there is an uncaught error :/

### Loading State

- there should be some sort of loader displayed on the homepage that serves as a placeholder if the launch info takes a while to load

### Misc

- should load a custom favicon
- Filter by Year and Sort Descending button flicker on page load
