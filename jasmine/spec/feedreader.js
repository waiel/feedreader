/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('All feed URLs are defined', function () {
            for (let feed of allFeeds) {
                //url is defined
                expect(feed.url).toBeDefined();
                // url is not empty
                expect(feed.url.length).not.toBe(0);
            }
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('All feed names are defined', function () {
            for (let feed of allFeeds) {
                //name is defined
                expect(feed.name).toBeDefined();
                // name is not empty
                expect(feed.name.length).not.toBe(0);
            }

        });
    });


    /* A new test suite named "The menu" */
    describe('The menu', function () {


        /* A test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function () {
            //body tag hve menu-hidden class 
            expect(document.body.classList).toContain('menu-hidden');
        });

        /* A test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('Opens when clicked', function () {
            // Perform menu click 
            $('.menu-icon-link').click()
            //body tag should not have the menu-hidden class 
            expect(document.body.classList.contains('menu-hidden')).toBeFalsy();

            //prefom click again
            $('.menu-icon-link').click();
            //body tag hve menu-hidden class 
            expect(document.body.classList.contains('menu-hidden')).toBeTruthy();

        })
    })

    /* A new test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

        // do asyncronas call before testing the feeds
        beforeEach(function (cb) {
            loadFeed(0, function () {
                //call call back
                cb();
            });
        });

        it('Has at least single entry within the feed container ', function () {
            //query all entries with the feed containers 
            let entries = document.querySelectorAll('.feed .entry');
            //check the count of entries to be grater than 0
            expect(entries.length).toBeGreaterThan(0);
        })

    });

    /* A new test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

        let feed1, feed2 = null;

        // do asyncronas call before testing the feeds
        beforeEach(function (cb) {
            //load first feed 
            loadFeed(0, function () {
                feed1 = document.querySelector('.feed').innerHTML;
                //load second feed
                loadFeed(1, function () {
                    feed2 = document.querySelector('.feed').innerHTML;
                    //call call back
                    cb();
                })
            });
        });

        it('Content do changes', function () {
            //feed contnet should not be equals 
            expect(feed1).not.toEqual(feed2)
        });
    })

}());