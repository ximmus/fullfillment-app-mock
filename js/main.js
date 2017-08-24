function AppViewModel() {

	// Protect 'this' from being hijacked
	var self = this;

	self.pages = ko.observableArray([
		{ imgSrc: '/img/transfer.svg',         page: 'Transfer',         pageId: 'transfer'},
		{ imgSrc: '/img/start-work.svg',       page: 'Start Work',       pageId: 'start-work'},
		{ imgSrc: '/img/inventory-levels.svg', page: 'Inventory Levels', pageId: 'inventory-levels'},
		{ imgSrc: '/img/damaged-goods.svg',    page: 'Damaged Goods',    pageId: 'damaged-goods'},
		{ imgSrc: '/img/will-call.svg',        page: 'Will Call',        pageId: 'will-call'}
	]);

	self.chosenPageId = ko.observable();
	self.chosenPageData = ko.observable();

	 // self.goToPage = function(page) { 
	 // 	// Grabs the object of the clicked
	 // 	self.chosenPageId(page);
	 	
	 // 	console.log(page); 
	 // };
	var newHeader = "Inventory App";
	self.header = newHeader;
	
	self.updateHeader = function(page) { 
	 	// Grabs the object of the clicked
	 	self.chosenPageId(page);
	 	
	 	// Assign the page title to header
		//self.header = "New Header";
		
		
		console.log(page); 
	};


	// self.returnId = function(page, header){
		
	// 	self.pages(page);

	// 	//self.header = page.page;

	// 	console.log(header);
	// }

};

var vm = new AppViewModel();
ko.applyBindings(vm);