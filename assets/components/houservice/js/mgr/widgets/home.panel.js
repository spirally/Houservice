Houservice.panel.Home = function (config) {
	config = config || {};
	Ext.apply(config, {
		baseCls: 'modx-formpanel',
		layout: 'anchor',
		/*
		 stateful: true,
		 stateId: 'houservice-panel-home',
		 stateEvents: ['tabchange'],
		 getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
		 */
		hideMode: 'offsets',
		items: [{
			html: '<h2>' + _('houservice') + '</h2>',
			cls: '',
			style: {margin: '15px 0'}
		}, {
			xtype: 'modx-tabs',
			defaults: {border: false, autoHeight: true},
			border: true,
			hideMode: 'offsets',
			items: [{
				title: _('houservice_items'),
				layout: 'anchor',
				items: [{
					html: _('houservice_intro_msg'),
					cls: 'panel-desc',
				}, {
					xtype: 'houservice-grid-items',
					cls: 'main-wrapper',
				}]
			}]
		}]
	});
	Houservice.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(Houservice.panel.Home, MODx.Panel);
Ext.reg('houservice-panel-home', Houservice.panel.Home);
