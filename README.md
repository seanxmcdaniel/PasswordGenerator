# Password Generator

In this challenge, I developed a webpage that will generate a random password based on criteria given by the user. The user can choose whether or not they want their password to have upper and lowercase letters, numbers, and special characters. The generator also allows the user to choose how long they want their password to be, between 8 and 128 characters.

Upon turning this assignment in, there are still a few problems with my webpage. Although I was able to generate a random password at any length chosen by the user by using "crypto.getRandomValues", which creates a more safe and secure password, I haven't quite figured out how to get the password to change based on the other criteria yet. By the time I have finished developing my password generator, it will be give a password that matches the user's selected criteria.

## Conditionals

![Screenshot (21)](https://user-images.githubusercontent.com/102200863/165012408-657673ce-6368-4644-b014-5efed72853e5.png)

I gave the user the ability to choose the criteria for their password using window.confirm(), which will each give a boolean value of "true" (the user wants to use this specific criteria for their password) or "false" (the user does not want to use this criteria in their password). The console will log the result of each window.confirm(). 

## The Generator, Choosing Password Length

![Screenshot (22)](https://user-images.githubusercontent.com/102200863/165012442-4de8488e-48aa-4739-b890-951ba943315c.png)

Instead of using Math.random, I decided to use crypto.getRandomValues. This creates a more secure password to protect the client's sensitive data. Instead of using a fixed length for the function, I included a window.prompt() that asks the user how long they want the password to be. They can type any number between 8 and 128, and the function will execute based on the number the user inputs. 

## Writing the Password to the Page

![Screenshot (23)](https://user-images.githubusercontent.com/102200863/165012816-bac49ddf-593e-4b65-969f-fe81ef229796.png)

Once the user has generated their password, the password will then be written to the page in the dotted box. However, I have not yet managed to get the output of the generatePassword() function to display on the page. Instead, the entire function runs again and then displays a completely different password than the one logged in the console the first time the function executed. This is something I will work on, and once the webpage is fully developed, the unique password made up of the users criteria will display on the page. 

#### Link to deployed application:
https://seanxmcdaniel.github.io/Password-Generator/
