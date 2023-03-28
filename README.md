# Harry Potter Character Information App

This is a React application that displays information on Harry Potter characters, including their name, house, and description. The application fetches data from a JSON backend and renders it in a user-friendly interface.

## Installation

To run this application on your local machine, you must first install the necessary packages. You can do this by running the following command in your terminal:

`npm install`

## Usage

To start the application, run the following command in your terminal:

`npm start`

This will launch the application in your browser, and you can begin exploring the Harry Potter character information. However, before the data can be displayed, you must also start the JSON server hosting the character data. To do this, open another terminal window and run the following command:

`json-server --watch db.json -p 3001`

## Features

The Harry Potter Character Information App offers the following features:

- Displays a list of all the Harry Potter characters, including their name, house, and description.
- Provides a search bar for users to search for specific characters by name.
- Allows users to add a new character to the list, including their name, house, and description.


## Technologies Used

This application was built using React and a JSON backend. The following libraries and tools were also used:

- [React Router](https://reactrouter.com/) for routing and navigation
- [JSON Server](https://github.com/typicode/json-server) for serving the character data

