# Running the App

App Name: random dog <br>
Author: Yiyuan Wei

## prerequisite

In order to run the project on local machine, make sure Node.js is installed locally.

## build the app

1. open your terminal
2. change directory to <i><project_directory></i> with <i>cd <project_directory></i>
3. run
           
        npm build

## run the app

Same as build app, except running differnt command

        npm start

## run test

Same as build app, except running

        npm test

###### Note: to run test with options:
1. open <i>package.json</i> under the root directory
2. scroll down to <i>scripts</i>
section
3. find the line for <i>"test"</i>
4. add the options the end of the <i>"react-scripts test"</i>
           
## Extra Info:
The style is not well designed for this project at this stage. <br>
The loading process is a bit longer, but should be able to finish in 2 or 3 seconds. <br>
There are some warnings left in the testing, mostly about the mocked response and mount function from enzyme package, can be ignored.
