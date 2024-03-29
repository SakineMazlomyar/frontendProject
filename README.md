----
###  What is this app for?
##### A simple application for incrementing a number and showing the result on another page.
##### Live url: http://139.59.142.175:3000/
----

###  Which stack has been used for this project?

#### React, Typescript, Redux, Scss, Jest and Git
#### Hosting on  digitalocean http://139.59.142.175:3000/
------

### The structure of the project 
#### From the root in the src  folder you can find:
##### 1. components,    ==> Every component has its style, interface, test separately 
##### 2. sharedStyles,  ==> Here is where all global variables for the scss files
##### 3. stateManagment ==> The core of the application which holds the data for the entire application

------

### Which improvments has been done on this project that has not been in the requirements?
##### 1. Using scss instead of css
##### 2. Adding jest test
##### 3. Hosting on digital ocean
------

### How to run the dev envirument? 
##### 1. make sure you have latest node and npm package installed
##### 2. clone the project
##### 3. Open a terminal and from the root of folder run this command `npm install` (for installing all dependencies)
##### 4. `npm start`
##### 5. The page should be open at: `http://localhost:3000` *OBG*(Please make sure port `3000` is free when you run this project)

------
### Jest: 
##### Description of the tests: 
##### Data-testid is used in order to select the component and making sure it exists. The name of the file is componentName.test.extension. 
##### Making the same props, store and onclicks as we do in a real dom. 
*Which parts is getting tested:*
#### 1. The component exist, 
#### 2. Right props has been sent, 
#### 3. The url is correct 
#### 4. The right action from reducer is sent/called to that specefic component
#### 5. The onclick should work as expected and of cource prevent default

#### How to run jest test? 
##### *OBG* (Make sure the application is running before you start testing. Otherwise you can jump to point 4 and start testing)  
##### 1. go to root folder
##### 2. `npm install`
##### 3. `npm start`
##### 4. open another terminal and run `npm test` scroll up and you should see the result like this
##### ![./public/test-react-app.png](./public/pictures/test-react-app.png)

##### *Jest documentation please visit this website* https://jestjs.io/docs/tutorial-react
------
### How to run build
##### 1. make sure you run this project once before you want to run build
##### 2. `npm run build` 
