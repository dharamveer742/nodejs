in this project i have used json web tokens for user authentication and also written the code for user log out functionality
json wen token : jwt consists of access token and refresh token 
  -> access token is issued when a user logged in 
  -> refresh token is issued when a user refeshes thier account and that time a new access token is issued 

I used httpOnly cookie to store access token bcz httpOnly cookie are not accessible by js so they are more secure 


npm packages used :- cookie-parser,jsonwebtoken,dotenv
