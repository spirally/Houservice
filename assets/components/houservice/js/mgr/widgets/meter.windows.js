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
		return [{
			xtype: 'textfield',
			fieldLabel: _('houservice_meter_name'),
			name: 'name',
			id: config.id + '-name',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'textarea',
			fieldLabel: _('houservice_meter_description'),
			name: 'description',
			id: config.id + '-description',
			height: 150,
			anchor: '99%'
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('houservice_meter_active'),
			name: 'active',
			id: config.id + '-active',
			checked: true,
		}];
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
		return [{
			xtype: 'hidden',
			name: 'id',
			id: config.id + '-id',
		}, {
			xtype: 'textfield',
			fieldLabel: _('houservice_meter_name'),
			name: 'name',
			id: config.id + '-name',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'textarea',
			fieldLabel: _('houservice_meter_description'),
			name: 'description',
			id: config.id + '-description',
			anchor: '99%',
			height: 150,
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('houservice_meter_active'),
			name: 'active',
			id: config.id + '-active',
		}];
	}

});
Ext.reg('houservice-meter-window-update', Houservice.window.UpdateMeter);