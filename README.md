# Feed Reader Testing
A Jasmine testing suite for a web-based application that reads RSS feeds.

### Prerequisites
The app can be run in any browser which supports ES6. Internet connection is required.

### Installing
No installation is needed. All you need to do is open the index.html file in your browser.

### Instructions
#### Basic app functionality
Click on the hamburger icon to open the menu. You can choose a feed from the menu to load new entries. Once you found an entry that interests you, you can click on the link to go to its webpage.
#### Testing Suite
At the bottom of the page, you can see Jasmine tests and their results. Code for the tests is available in **./jasmine/spec/feedreader.js**.
Tests performed by the suite:
1. Tests if the feeds are defined, and do they contain a name and a url.
2. Tests if the menu is hidden by default and changes visibility once the menu icon is clicked.
3. Tests if there is at least one entry available after the initial loading of the app.
4. Tests if the content changes after choosing a new feed.

### Acknowledgments
* The starter code for this project was provided by Udacity.
* Testing done with [Jasmine](http://jasmine.github.io/)
* Templating from [Handlebars](https://handlebarsjs.com/)
* Application uses Google Feed Reader API.

### Dependencies
* [Jasmine](http://jasmine.github.io/)
* [Handlebars](https://handlebarsjs.com/)
* Google Feed Reader API
* Google Roboto font

### Contributing
This is a project for Udacity course and it will likely not be developed further.

### License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/Trufs/jasmine-testing/blob/master/LICENSE) file for details.

