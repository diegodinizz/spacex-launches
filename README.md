## SpaceX Launches

https://diegodinizz.github.io/spacex-launches/

The SpaceX Launches is an application built with React, Redux, Styled Components, Moment.js and hosted on GitHub Pages. The application must retrieve historic and future SpaceX launches and present them in a list view.

![Screenshot 2020-12-07 at 00 12 14](https://user-images.githubusercontent.com/47988806/101297779-9e407500-3822-11eb-86f9-be61fc285325.png)

## Installation

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

#### Installation:

`npm install`

#### Start Server:

`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### Production:

`npm run deploy`

It correctly bundles React in production mode and optimizes the build to be deployed on Gh Pages.

## Framework used

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), [Redux](https://github.com/reduxjs/react-redux), [Styled Components](https://github.com/styled-components/styled-components) and [Moment.js](https://github.com/moment/moment/). 

## API Reference

GET - [SpaceX REST API](https://api.spacexdata.com/v3/launches). Open Source REST API for rocket, core, capsule, pad, and launch data.

## Hosted

The project is hosted on [Gh Pages](https://pages.github.com) at https://diegodinizz.github.io/spacex-launches/

## Reflection

This was a week-long project built as a short technical exercise. Project goal included is to create a React application that will consume data from the SpaceX public API.  

Originally I wanted to build an application that allowed users to see the SpaceX launches historic and future in a list view. I started this process by using the `create-react-app` boilerplate, then adding `Redux` to manage the state flow in the App, `styled-components` to write actual CSS code to style the components, and lastly `Moment.js` to manipulating, and formatting dates.

One of the main challenges I ran into was to pull the information from the API. This leads me to spend a few hours planning a better way to display the information coming from the API. Due to project time constraints, I had to decide a simplified design to demonstrate a better visualisation of the pieces of information that I had available.

At the end of the day, the technologies implemented in this project are React, Redux, Styled Components, Moment.js, and Gh Pages to deploy it. I choose to use as fewer frameworks as possible to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration with more time, I would like to implement a more detail visualisation of the launches, type safety method and possibly unit tests.
