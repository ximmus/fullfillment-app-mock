function AppViewModel() {

	this.pages = [
		{ imgSrc: '/img/transfer.svg', page: 'Transfer'},
		{ imgSrc: '/img/start-work.svg', page: 'Start Work'},
		{ imgSrc: '/img/inventory-levels.svg', page: 'Inventory Levels'},
		{ imgSrc: '/img/damaged-goods.svg', page: 'Damaged Goods'},
		{ imgSrc: '/img/will-call.svg', page: 'Will Call'}
	];

};

var vm = new AppViewModel();
ko.applyBindings(vm);