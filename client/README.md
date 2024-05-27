# Client App

The client app for the Naamcheen platform.

## Steps to run

Install mongo version using brew
brew services start mongodb-community@6.0
Verify by running mongosh on terminal

You can restore mongo data dump taken by previous project owners using command:
mongorestore --db <your_database_name/naamcheen> </path_to_output_directory/your_database_name//Users/iamdisha/Downloads/Naamcheen/mongodump>

Go to client folder 
Run npm install to build
Run npm start and go to http://localhost:3000

Go to server folder 
Run npm install to build
Run npm start and go to http://127.0.0.1:8080

## To-Do

-   [x] Switch language
-   [x] Login/Logout
-   [x] Farmer: Add new crop
-   [x] Farmer: View listings
-   [x] Farmer: View orders
-   [x] Buyer: View orders
-   [x] Farmer: Ask question and answer
-   [x] Farmer: Add distance betweeen farmer and buyer
-   [x] Buyer: Feed of crops
-   [x] Buyer: Filters on feed of cropss
-   [x] Farmer: Add question
-   [x] Signup page
-   [ ] Maybe add profile page for farmer and buyer

## Points ignored for now

-   No blocking of routes for unauthenticated and unauthorised users
-   No appropriate display when no orders/listings/questions/answers
-   Store data about signed-in user in local storage
-   No placing order
