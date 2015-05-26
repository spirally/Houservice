var Houservice = function (config) {
	config = config || {};
	Houservice.superclass.constructor.call(this, config);
};
Ext.extend(Houservice, Ext.Component, {
	page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('houservice', Houservice);

Houservice = new Houservice();