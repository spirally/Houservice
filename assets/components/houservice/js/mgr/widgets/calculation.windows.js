Houservice.window.CreateCalculation = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'houservice-calculation-window-create';
	}
	Ext.applyIf(config, {
		title: _('houservice_calculation_create'),
		width: 550,
		autoHeight: true,
		url: Houservice.config.connector_url,
		action: 'mgr/calculation/create',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Houservice.window.CreateCalculation.superclass.constructor.call(this, config);
};
Ext.extend(Houservice.window.CreateCalculation, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'textfield',
			fieldLabel: _('houservice_calculation_name'),
			name: 'name',
			id: config.id + '-name',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'textarea',
			fieldLabel: _('houservice_calculation_description'),
			name: 'description',
			id: config.id + '-description',
			height: 150,
			anchor: '99%'
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('houservice_calculation_active'),
			name: 'active',
			id: config.id + '-active',
			checked: true,
		}];
	}

});
Ext.reg('houservice-calculation-window-create', Houservice.window.CreateCalculation);


Houservice.window.UpdateCalculation = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'houservice-calculation-window-update';
	}
	Ext.applyIf(config, {
		title: _('houservice_calculation_update'),
		width: 550,
		autoHeight: true,
		url: Houservice.config.connector_url,
		action: 'mgr/calculation/update',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Houservice.window.UpdateCalculation.superclass.constructor.call(this, config);
};
Ext.extend(Houservice.window.UpdateCalculation, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'hidden',
			name: 'id',
			id: config.id + '-id',
		}, {
			xtype: 'textfield',
			fieldLabel: _('houservice_calculation_name'),
			name: 'name',
			id: config.id + '-name',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'textarea',
			fieldLabel: _('houservice_calculation_description'),
			name: 'description',
			id: config.id + '-description',
			anchor: '99%',
			height: 150,
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('houservice_calculation_active'),
			name: 'active',
			id: config.id + '-active',
		}];
	}

});
Ext.reg('houservice-calculation-window-update', Houservice.window.UpdateCalculation);