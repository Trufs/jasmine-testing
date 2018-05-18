/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {

    // A suite testing RSS feeds definitions.
    describe('RSS Feeds', function(){

        /* Check if allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function(){
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Check if each feed in the allFeeds object has a URL defined
         * and that the URL is not empty.
         */
        it('have a URL defined', function(){
                allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                });
        });

        /* Check if each feed in the allFeeds object has a name defined
         * and that the name is not empty.
         */
        it('have a name defined', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
            });
        });
    });


    // A suite testing menu visibility.
    describe('The menu', function(){

        // Check if the menu element is hidden by default.
        it('is hidden by default', function(){
            expect($('body').attr('class')).toBe('menu-hidden');
        });

         // Check if the menu changes visibility when the menu icon is clicked.
        it('changes visibility when the icon is clicked', function(){
            const event = {
                    type: 'click',
                };
            $('.menu-icon-link').trigger(event); //trigger an event happening when user clicks the menu icon
            expect($('body').attr('class')).toBe('');
            $('.menu-icon-link').trigger(event);
            expect($('body').attr('class')).toBe('menu-hidden');
        });
    });


    //A suite testing initial feed loading.
    describe('Initial Entries', function(done){
        const feed = $('.feed');
        beforeEach(function(done){
                loadFeed(0, done);
        });

        /* Check if when the loadFeed function is called and completes its work, there is at least
         * one .entry element within the .feed container.
         */
        it('there is at least one entry within the feed container', function(){
            expect(feed.children().toArray().length).not.toBe(0);
        });
    });

    //A suite testing loading a different feed.
    describe('New Feed Selection', function(done){
        let previousContent;
        const id = 1;

        beforeEach(function(done){
            previousContent = $('.feed').html();
            loadFeed(id, done);
        });

        //Check if the content changes when a new feed is loaded.
        it('when a new feed is loaded, the content changes', function(){
            const event = {
                    type: 'click',
                };
            $('.feed-list').trigger(event); //trigger an event happening when user clicks a link in the menu
            expect($('.feed').html()).not.toEqual(previousContent);
        });
    });
}());
