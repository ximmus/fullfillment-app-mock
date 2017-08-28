function App() {
    
    // Check yo self
    var self = this;
    
    // Home button and header constant elements, currently selected screen
    self.home = ko.observable('Home');
    self.header = ko.observable('Inventory App');
    self.current = ko.observable('home');

    // Show and hide buttons
    self.showButton = ko.observable(true); // Visable by default

    // These will be created with a for each loop
    self.buttonOne = ko.observable('Button One');
    self.buttonTwo = ko.observable('Button Two');

    self.screens = ko.observableArray([
        { imgSrc: '/img/transfer.svg',         title: 'Transfer',         pageId: 'transfer' },
        { imgSrc: '/img/start-work.svg',       title: 'Start Work',       pageId: 'start-work'},
        { imgSrc: '/img/inventory-levels.svg', title: 'Inventory Levels', pageId: 'inventory-levels'},
        { imgSrc: '/img/damaged-goods.svg',    title: 'Damaged Goods',    pageId: 'damaged-goods'},
        { imgSrc: '/img/will-call.svg',        title: 'Will Call',        pageId: 'will-call'}
    ]);

    // Helper function to get ID of the selected button
    self.getSelectedId = function(data, event){
    	var selectedID = event.target.id;
        var screens = self.screens();
        
        // Set current
        self.current(selectedID);  
    	
        // Pull in current page array idex
        for (var i = screens.length - 1; i >= 0; i--) {
            
            if(screens[i].pageId == self.current()){
               self.header(screens[i].title); 
            }
        }        
    }

    // Action when button is clicked
    self.buttonClicked = function(data, event){
    	// Hide all buttons
        self.showButton(false);

        // Display current selection
    	self.getSelectedId(data, event);
    }

    // Reset App UI to start
    self.showAllButtons = function(){
    	// show hidden buttons
    	self.showButton(true);
    	// Hide all screens
    	self.current("home");
    	// Set Header back to default
    	self.header("Inventory App");
    }

}

ko.applyBindings(new App());