## Overview
Orange is social media platform that allows users to share what they are thinking via short blurps of text displayed on a message-board! The Orange backend handles and stores login and registration requests, user info, authentication, authorization and post data. View the frontend repo here : https://github.com/Team-Orange4/orange-frontend

## Original Wireframe

![](images/layout-screenshot.png)

## Instillation Steps
1. Fork and clone this repo
2. Cd into the project directory
3. Install project dependencies by running npm i 
4. Create a new feature branch and start working!

## Technologies
- NodeJs
- Express
- Bcrypt
- JWT
- Mongoose 


## Challenges 
## Deployment Link
## MongoDB
### Why Mongodb
We chose to use MongoDB, a schema-less NoSQL database, as our database because of how extremely flexible and forgiving it is. With less than a week to imagine, layout, and construct this full stack project, we knew there would be a lot of modifications along the way. Structural changes can be very tricky to handle with SQL base databases but with Mongo anything goes.  With the use of Mongoose and some models/schemas, we are quickly able to add a layer of data validation and structure onto or project without sacrificing an ease of use or flexibility. 
### Users Collection Screenshot
![](images/users-collection-screenshot.png)

### Post Collection Screenshot
![](images/post-collection-screenshot.png)

## Why we wanted Authentication and Authoriation
**Disclaimer: *This project is still in development and we would not allow it to be deployed in market until all reasonable security and accessibility issues were resolved.  Security and accessibility are non negotiable essentials to any project. We as developer have a responsibility to make our applications as accessible as possible.  When as a company or developer we choose to store user data, we are now obligated to protect it. We are also obligated to disclose what information is stored pertaining to users and how we use that data to our users. *
## Bcrypt Vs Homemade Password Hasher



## Some Wanted/Needed Additions 
- User profile page
- User setting page
- Post hashtags
- Likes data component
- JWT expiration and refresh tokens
- Email and username checker to confirm they are not already used in our database
- Email verification to confirm user's email
- Email scoring to flag suspicious accounts that are created
- Inappropriate language scanner 
- And much more!

## How to Contribute 
All contributions are appreciated!
1. Push your most recent development branch up to Github
2. Create a pull request against the branch of interest or our Dev branch.
3. Be descriptive in you pull message!
4. Await merge or revision request!

