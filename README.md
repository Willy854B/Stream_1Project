# The Monkees Reservation App
## Overview
This website is the first of three projects I'm building as a portfolio to present to prospective employers. In this project, a range of technologies were used to create a basic website that showcases how all the knowledge I have gained from the first module is put together to render a final product.
## UX
### What is this app for?
This is a reservation app. it provides users the ability to book an event.
### What does it do?
This app will allow users to enter some personal information, a specific date, and the number of hours they want to hire the band for. After that, this tool checks if the band is available on the chosen date, gives information about the cost, and allows the user to book the event only if the band is available on the date entered by the user.
### How does it work
This app uses JavaScript code to get the values entered by the user in the HTML form. Based on these values, this tool checks if the date of the event entered by the user is already stored in an array of objects. If it is, it will ask the user to choose a different date. Once an available date is entered, this app will store all this information as a new object, and provides the cost associated with various types of booking.
### Basic website image layout
See the project mock-ups [on Google Presentation]
(https://docs.google.com/presentation/d/14HuBwa_8wB5r_ExGYD9xrCXzpejJqKkFJdOlliJJS3I/edit#slide=id.p)
## Features
### Existing Features
- **Jumbotron**

	A lightweight, flexible component for showcasing important content. I used it to display the dates that the band will be performing live.
- **Carousel**

	A slideshow component for cycling through elements. In this project, it was used to display the images of each of the band members.
- **Media**

	Implementation of different multimedia elements were incorporated so that users can find video and audio clips of the band.
	Social media links were embedded on each page by integrating icons to visually enhance the appearance of the site.
- **Mobile responsive design**

	This website was built to automatically adjust and adapt to any device the user is operating. It has the ability to optimize the screen size, whether it is a desktop, a laptop, a tablet, or a mobile phone.
- **Forms**

	Intuitive form design was used to create a booking form and a contact form for data collection. Form validation is one of the features present in both of these forms.

### Features Left to Implement
- User Based Features

	Registration

	Login

	Logout

- Database

	In this project, an array in the form of an object was used as a way to hold the data entered by the user, using a real database for this kind of task is what is normally used for most websites to function effectively.

## Tech Used
### Some of the tech used includes:
- HTML

	I used **Hypertext Markup Language** to structure and format the content of each page for this particular website.

- CSS

	I used **Cascading Style Sheets** to separate formatting and layout from content, and to give the website its unique look.

- [JavaScript](https://www.javascript.com)

	I used **JavaScript** to make the booking and contact pages of this website more dynamic and interactive, and to enable form validation.

- [Bootstrap](https://getbootstrap.com/) 

   	I used **Bootstrap** to give this project a simple, responsive layout where mobile first approach is implemented throughout the site.

## Testing

The following tests have been executed to make sure this project functions as expected :

	a. Different browsers such as Opera, internet explorer, Firefox, and Google were used to render this site on the computer. I modified the screen display to different sizes making sure that page layout, specially the menu bar, adapts to any device the user may be operating. 

	b. Links were tested by clicking on each one of them, and making sure each button is coded properly and takes us to the right place.

	c. Audio and video were checked by clicking/dragging some of the buttons and bars present on the media player.

	d. Contact/Booking forms were tested as follows:

	1. I supplied information that doesn't match the expected format or pattern that should be entered, which showed some error messages when I pressed the submit button. That confirms that the code is working properly.

	2. I supplied information that matches the expected format or pattern that should be entered, and no error messages were shown when I pressed the submit button. This proves the code is validating the forms as it should.

	3. Using Chrome's inspect tool, I traversed the DOM to obtain information about the array/object I created to hold the data entered in the forms. The browsers inspect tool allowed me to use the ```console.log()``` function to output the content that is being held in the array/object and see if the data was available. 

## Contributing
### Getting the code up and running
To run the code locally on your computer, you need to :

	1. clone this repository into the editor you normally use by typing ```git clone https://github.com/Willy854B/Stream_1Project``` command in your terminal. To cut ties with this Github repository, type ```git remote rm origin``` in the terminal.

	2. To check how the website actually works, I used Sublime Text, which is the editor of my choice. In there, open any of the html pages located in the Stream_1Project folder and right click anywhere on the page. Then, click on "Open in Browser". You'll be able to see the web page in the browser's window. Not all editors work the same way, so make sure you find a command in your editor that achieves the same result. 
	
## Credits
### Content
- All the information in the "About" page was taken from [Wikipedia](https://en.wikipedia.org/w/index.php?title=Special:Search&search=the+monkees&fulltext=1&profile=default&ns0=1)

### Media
- Photos and videos were provided by [Code Institute](https://codeinstitute.net) as part of the first project of the course.
- Social media link images were found and embedded into this project from [Fontaweson](https://codeinstitute.net).

### Acknowledgements
- In general, this portfolio site was put together by me using the information I've learned from the Fullstack Web Developer Program offered by Code Institute.   