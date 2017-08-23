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

	var pageHeader = {
    	header: 'Bob'
	};

	self.returnId = function(page){
		self.pages(page);
		console.log(page.page);
	}

};

var vm = new AppViewModel();
ko.applyBindings(vm);