This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##Heroku Deployment 
This project has been deployed via Heroku at the following address:

http://forward-growth.herokuapp.com/

Deployment corresponds to the [deployment branch](https://github.com/Kachow-9C/ForwardGrowth/tree/Deployment)

## On Machine Deployment

Since this project will hold both the client application and the server application there will be node modules in two different places. First run `npm install` from the root. After this you will run `npm run-script install-all` from the root. From now on run this command anytime you want to install all modules again. This is a script we have defined in package.json .

This app can be deployed directly to heroku since there is a script defined in package.json which will automatically handle building and deploying the app. For more information on deploying to heroku reference the extra resources at the bottom of this file. 

**The configuration file must be placed in two places in order for the application to operate properly:** 

- ##### **Place the first copy in /client/src**

- ##### **Place the second copy in /server/config**

## File structure
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `constants` -  This folder holds defined route constants and role constants used throughout the application    
    - #### `views` - These represent a unique page on the website i.e. Home or About. These are still normal react components.
    - #### `Config.js` - This file is not stored on the repo and must be manually placed before deployment. Contains API keys for firebase authentication.
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
#### `server` - Holds the server application
- #### `config` - This holds the mongoDB uri and must be added manually, it is not in the github repo.
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `tests` - This holds all of our server tests that we have defined
- #### `server.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!


## Available Scripts

In the project directory, you can run:

### `npm run-script dev`

Runs both the client app and the server app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run-script client`

Runs just the client app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.


### `npm run-script server`

Runs just the server in development mode.<br>


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

If deploying to heroku this does not need to be run since it is handled by the heroku-postbuild script<br>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Borrowed Code & APIs
###Google Firebase 
Google's Firebase API is used for authentication in this application. The following tutorial was followed to implement Firebase functionality:
https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial

Code from this tutorial was borrowed in the implementation of Firebase authentication. The file structure of the application is also based of this tutorial.

Modifications were made to secure different pages as outlined in the tutorial and to better handle error cases.
###Email JS
Email JS was utilized in the contact form located on the home page. The API must be connected to a user account created on the company's website:
https://www.emailjs.com/

###React Responsive Carousel 
"react-responsive-carousel" was added from npm install and is used for the cycling of pictures on the home page of the application. 

##Features & Screenshots

- #### Responsive Carousel of App Screenshots
![Home Page](readme_screenshots/front_page.jpg?raw=true)

- #### Contact Form via Email JS
![Home Page](readme_screenshots/homepage_contact_form.jpg?raw=true)

- #### Contact Page with Links to Client's Social Media
![Contact](readme_screenshots/Meet_the_team.jpg?raw=true)

- #### Newsletter with Updates on Gaming App
   
    ![Newsletter](readme_screenshots/newsletter.jpg?raw=true) 
    
     When logged in, Admins also have the ability to delete posts past newsletter posts.
     
    ![Newsletter Admin](readme_screenshots/newsletter_admin.jpg?raw=true)   
    
- #### Admin Console 
    The admin console grants administrators the ability to post to the newsletter, change their password and sign up new administrators.
    ![Admin Console](readme_screenshots/Admin1.jpg?raw=true)   
    ![Admin Console](readme_screenshots/Admin2.jpg?raw=true)   

    
- #### New User Sign Up
    Administrators have the ability to sign up new administrators via the Admin Console.
    ![Register](readme_screenshots/register.jpg?raw=true)   


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn how to setup a local MongoDB instance for testing, check out how to [Connect to MongoDB](https://docs.mongodb.com/guides/server/drivers/).

To learn how to deploy a full-stack web app to heroku, check out [this great guide](https://daveceddia.com/deploy-react-express-app-heroku/).

To learn React, check out the [React documentation](https://reactjs.org/).

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
