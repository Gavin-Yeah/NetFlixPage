This is the coding assignment to create a SPA mocking NetFlix my fav page.

1.  Please use the command "npm i" to install all dependencies necessary to run the application.
2.  Use "npm start" to run the application.

#### Updated on 07/10/2020
##### Feedback:

The list should be a single custom component that can be used multiple times.

The list.js created right now is wrong. It is actually the template for the title.

Please combine the list of templates into a single file and reuse it twice for recommended and my list

##### solotuion:
remove Item component and include the content of it into List component.

Use react nonnect function to connect List Component to react store by using click event.


### Requirements:

Remove should move the title to recommended

Put a netflix logo at the top left

Ensure that a http call is made to retrieve data and not use JSON file as an object with data

Render the data with a single template only and ensure that different functions are written for the same layout for add and remove


PLEASE DO IT IN REACT AND REDUX


Please create a git repository and push the code there and send across the link when complete.
 
 
The task is to create a mock Netflix like page with editable rows of titles using any framework you want (preferably React).
 
You are given the following JSON object which will serve as mock back­end data: 
 
{
 
'mylist' : [
 
{
 
'title': 'Futurama',
 
'id': 1,
 
'img': 'http://cdn1.nflximg.net/webp/7621/3787621.webp'
 
},
 
{
 
'title': 'The Interview',
 
'id': 2,
 
'img': 'http://cdn1.nflximg.net/webp/1381/11971381.webp'
 
},
 
{
 
'title': 'Gilmore Girls',
 
'id': 3,
 
'img': 'http://cdn1.nflximg.net/webp/7451/11317451.webp'
 
}
 
],
 
'recommendations' : [
 
{
 
'title': 'Family Guy',
 
'id': 4,
 
'img': 'http://cdn5.nflximg.net/webp/5815/2515815.webp'
 
},
 
{
 
'title': 'The Croods',
 
'id': 5,
 
'img': 'http://cdn3.nflximg.net/webp/2353/3862353.webp'
 
},
 
{
 
'title': 'Friends',
 
'id': 6,
 
'img': 'http://cdn0.nflximg.net/webp/3200/9163200.webp'

}
 
]
 
}
 
The top row will be the ‘My List’ row and will display the titles included in ‘mylist’ array. 

The second row will be the recommendation row which will display the titles included in ‘recommendations’ array.

Hovering over an image in the ‘My List’ row should create a “Remove” button displayed below the image.

Clicking on the button should remove the title from the “My List” row.
 
Hovering over an image in the recommendations row should create an “Add” button displayed
 
below the image. Clicking on the button should add the title to the “My List” row.
 
The list of titles in the “My List” row should be displayed at the bottom of the page.
