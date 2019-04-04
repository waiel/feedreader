# Feed Reader Testing
by *Waiel Eid*


## How to run

All you need to do is run the `index.html` in your default browser. 
The tests defined in the `Jasmine/spec/feedreader.js` file will execute automatically and show the result of the test at the bottom of the page. 


## Useful resources & Tools used

* [Microsft visual studio code](https://code.visualstudio.com/)
* [VS Code Jasmine snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JasmineSnippets)
* [Jasmine Test Explorer](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-jasmine-test-adapter) 
* [Jasmine documentation](https://jasmine.github.io/api/3.3/matchers.html)

## Tests created

- [x] A test that loops through each feed in the `allFeeds` object and ensures it has a URL defined _and_ that the URL is not empty
- [x] A test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty
- [x] A new test suite named `"The menu"`
    - [x] A test that ensures the menu element is hidden by default
    - [x] A test that ensures the menu changes visibility when the menu icon is clicked.
- [x] A test suite named `"Initial Entries"`
    - [x] A test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container
- [x] A test suite named `"New Feed Selection"`
    - [x] A test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes