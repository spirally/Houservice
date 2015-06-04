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
			items: [
                {
                    title: _('houservice_readout'),
                    layout: 'anchor',
                    items: [{
                        html: _('houservice_readout_msg'),
                        cls: 'panel-desc',
                    }, {
                        xtype: 'houservice-grid-readout',
                        cls: 'main-wrapper',
                        //preventRender: true,
                    }]
                }
                ,{
                    title: _('houservice_calculation'),
                    layout: 'anchor',
                    items: [{
                        html: _('houservice_calculation_msg'),
                        cls: 'panel-desc',
                    }, {
                        xtype: 'houservice-grid-calculation',
                        cls: 'main-wrapper',
                        //preventRender: true,
                    }]
                }
                ,{
                    title: _('houservice_meter'),
                    layout: 'anchor',
                    items: [{
                        html: _('houservice_meter_msg'),
                        cls: 'panel-desc',
                    }, {
                        xtype: 'houservice-grid-meter',
                        cls: 'main-wrapper',
                        //preventRender: true,
                    }]
                }
                ,{
                    title: _('houservice_meter_type'),
                    layout: 'anchor',
                    items: [{
                        html: _('houservice_meter_type_msg'),
                        cls: 'panel-desc',
                    }, {
                        xtype: 'houservice-grid-meter_type',
                        cls: 'main-wrapper',
                        //preventRender: true,
                    }]
                }
            ]
		}]
	});
	Houservice.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(Houservice.panel.Home, MODx.Panel);
Ext.reg('houservice-panel-home', Houservice.panel.Home);
