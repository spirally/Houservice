Houservice.window.CreateMeter = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'houservice-meter-window-create';
	}
	Ext.applyIf(config, {
		title: _('houservice_meter_create'),
		width: 550,
		autoHeight: true,
		url: Houservice.config.connector_url,
		action: 'mgr/meter/create',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Houservice.window.CreateMeter.superclass.constructor.call(this, config);
};
Ext.extend(Houservice.window.CreateMeter, MODx.Window, {

	getFields: function (config) {
		return [
            {
                xtype: 'houservice-combo-user',
                fieldLabel: _('houservice_meter_user_id'),
                name: 'user_id',
                id: config.id + '-user_id',
                allowBlank: false,
                anchor: '99%'
            }
            ,{
                layout:'column'
                ,border: false
                ,anchor: '100%'
                ,items: [
                    {
                        columnWidth: .5
                        ,layout: 'form'
                        ,defaults: { msgTarget: 'under' }
                        ,border:false
                        ,items: [
                            {
                                xtype: 'textfield',
                                fieldLabel: _('houservice_meter_name'),
                                name: 'name',
                                id: config.id + '-name',
                                anchor: '99%'
                            }
                            ,{
                                xtype: 'textfield',
                                fieldLabel: _('houservice_meter_idn'),
                                name: 'idn',
                                id: config.id + '-idn',
                                anchor: '99%'
                            }
                        ]
                    }
                    ,{
                        columnWidth: .5
                        ,layout: 'form'
                        ,defaults: { msgTarget: 'under' }
                        ,border:false
                        ,items: [
                            {
                                xtype: 'houservice-combo-meter_type',
                                fieldLabel: _('houservice_meter_meter_type_id'),
                                name: 'meter_type_id',
                                id: config.id + '-meter_type_id',
                                allowBlank: false,
                                anchor: '99%'
                            }
                            ,{
                                xtype: 'textfield',
                                fieldLabel: _('houservice_meter_sn'),
                                name: 'sn',
                                id: config.id + '-sn',
                                anchor: '99%'
                            }
                        ]
                    }
                ]
            }
            ,{
                xtype: 'xcheckbox',
                boxLabel: _('houservice_meter_active'),
                name: 'active',
                id: config.id + '-active',
                checked: true
		    }
        ];
	}

});
Ext.reg('houservice-meter-window-create', Houservice.window.CreateMeter);


Houservice.window.UpdateMeter = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'houservice-meter-window-update';
	}
	Ext.applyIf(config, {
		title: _('houservice_meter_update'),
		width: 550,
		autoHeight: true,
		url: Houservice.config.connector_url,
		action: 'mgr/meter/update',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Houservice.window.UpdateMeter.superclass.constructor.call(this, config);
};
Ext.extend(Houservice.window.UpdateMeter, MODx.Window, {

	getFields: function (config) {
		return [
            {
                xtype: 'houservice-combo-user',
                fieldLabel: _('houservice_meter_user_id'),
                name: 'user_id',
                id: config.id + '-user_id',
                allowBlank: false,
                anchor: '99%'
            }
            ,{
                layout:'column'
                ,border: false
                ,anchor: '100%'
                ,items: [
                    {
                        columnWidth: .5
                        ,layout: 'form'
                        ,defaults: { msgTarget: 'under' }
                        ,border:false
                        ,items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: _('houservice_meter_name'),
                            name: 'name',
                            id: config.id + '-name',
                            anchor: '99%'
                        }
                        ,{
                            xtype: 'textfield',
                            fieldLabel: _('houservice_meter_idn'),
                            name: 'idn',
                            id: config.id + '-idn',
                            anchor: '99%'
                        }
                    ]
                    }
                    ,{
                        columnWidth: .5
                        ,layout: 'form'
                        ,defaults: { msgTarget: 'under' }
                        ,border:false
                        ,items: [
                            {
                                xtype: 'houservice-combo-meter_type',
                                fieldLabel: _('houservice_meter_meter_type_id'),
                                name: 'meter_type_id',
                                id: config.id + '-meter_type_id',
                                allowBlank: false,
                                anchor: '99%'
                            }
                            ,{
                                xtype: 'textfield',
                                fieldLabel: _('houservice_meter_sn'),
                                name: 'sn',
                                id: config.id + '-sn',
                                anchor: '99%'
                            }
                        ]
                    }
                ]
            }
            ,{
                xtype: 'xcheckbox',
                boxLabel: _('houservice_meter_active'),
                name: 'active',
                id: config.id + '-active',
                checked: true
            }
        ];
	}

});
Ext.reg('houservice-meter-window-update', Houservice.window.UpdateMeter);