Houservice.window.CreateMeterType = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'houservice-meter_type-window-create';
	}
	Ext.applyIf(config, {
		title: _('houservice_meter_type_create'),
		width: 550,
		autoHeight: true,
		url: Houservice.config.connector_url,
		action: 'mgr/meter_type/create',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Houservice.window.CreateMeterType.superclass.constructor.call(this, config);
};
Ext.extend(Houservice.window.CreateMeterType, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'textfield',
			fieldLabel: _('houservice_meter_type_name'),
			name: 'name',
			id: config.id + '-name',
			anchor: '99%',
			allowBlank: false
		}, {
			xtype: 'textfield',
			fieldLabel: _('houservice_meter_type_unit'),
			name: 'unit',
			id: config.id + '-unit',
			anchor: '99%'
		}];
	}

});
Ext.reg('houservice-meter_type-window-create', Houservice.window.CreateMeterType);


Houservice.window.UpdateMeterType = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'houservice-meter_type-window-update';
	}
	Ext.applyIf(config, {
		title: _('houservice_meter_type_update'),
		width: 550,
		autoHeight: true,
		url: Houservice.config.connector_url,
		action: 'mgr/meter_type/update',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Houservice.window.UpdateMeterType.superclass.constructor.call(this, config);
};
Ext.extend(Houservice.window.UpdateMeterType, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'hidden',
			name: 'id',
			id: config.id + '-id'
		}, {
			xtype: 'textfield',
			fieldLabel: _('houservice_meter_type_name'),
			name: 'name',
			id: config.id + '-name',
			anchor: '99%',
			allowBlank: false
		}, {
			xtype: 'textfield',
			fieldLabel: _('houservice_meter_type_unit'),
			name: 'unit',
			id: config.id + '-unit',
			anchor: '99%'
		}];
	}

});
Ext.reg('houservice-meter_type-window-update', Houservice.window.UpdateMeterType);