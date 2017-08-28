function App() {
    
    // Check yo self (protect 'this' from accidental hijack)
    var self = this;
    
    // Header and currently selected screen
    self.header = ko.observable('Inventory App');
    self.current = ko.observable('home');

    // Show and hide buttons
    self.showButton = ko.observable(true); // Visable by default

    // Array of all the screens
    self.screens = ko.observableArray([
        { pageId: 'transfer',           title: 'Transfer',          imgSrc: '/img/transfer.svg' },
        { pageId: 'start-work',         title: 'Start Work',        imgSrc: '/img/start-work.svg' },
        { pageId: 'inventory-levels',   title: 'Inventory Levels',  imgSrc: '/img/inventory-levels.svg' },
        { pageId: 'damaged-goods',      title: 'Damaged Goods',     imgSrc: '/img/damaged-goods.svg' },
        { pageId: 'will-call',          title: 'Will Call',         imgSrc: '/img/will-call.svg' },
    ]);

    // Helper function to set the ID of the selected button to the current variable
    self.getSelectedId = function(data, event){
    	var selectedID = event.target.id;
        var screens = self.screens();
        
        // Set current
        self.current(selectedID);  
    	
        // Pull in current page array idex
        for (var i = screens.length - 1; i >= 0; i--) {
            
            if(screens[i].pageId == self.current()){
               self.header(screens[i].title); // Set header to title of current
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