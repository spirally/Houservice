Houservice.page.Home = function (config) {
	config = config || {};
	Ext.applyIf(config, {
		components: [{
			xtype: 'houservice-panel-home', renderTo: 'houservice-panel-home-div'
		}]
	});
	Houservice.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(Houservice.page.Home, MODx.Component);
Ext.reg('houservice-page-home', Houservice.page.Home);