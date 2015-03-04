# Fabmo Example App

## About
This project is the authoritative example app for the Fabmo platform.  It provides example code for performing the tasks that are most typical for an app running in the Fabmo dashboard environment, as well as some guidance on app visual style and some limited documentation.

## Getting Started
This app is designed to run inside the Fabmo dashboard, but can be used in any browser simply by cloning the repository and opening the `index.html` file.  The dashboard javascript library switches gracefully between running inside the dashboard and running standalone in a browser, making it easy to do app development without actually having to be connected to a tool.  When running directly in the browser, calls to the Fabmo dashboard will simulate the behavior of the tool, either by providing fake data in callbacks, or indicating to the developer via javascript alerts that a dashboard function has been called.

## Documentation
Currently the only available documentation is this README, along with the documentation provided in the code of the app itself.  A more comprehensive "developer's guide" is coming soon.
