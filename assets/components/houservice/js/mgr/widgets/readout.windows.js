Houservice.window.CreateReadout = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'houservice-readout-window-create';
	}
	Ext.applyIf(config, {
		title: _('houservice_readout_create'),
		width: 550,
		autoHeight: true,
		url: Houservice.config.connector_url,
		action: 'mgr/readout/create',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Houservice.window.CreateReadout.superclass.constructor.call(this, config);
};
Ext.extend(Houservice.window.CreateReadout, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'textfield',
			fieldLabel: _('houservice_readout_name'),
			name: 'name',
			id: config.id + '-name',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'textarea',
			fieldLabel: _('houservice_readout_description'),
			name: 'description',
			id: config.id + '-description',
			height: 150,
			anchor: '99%'
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('houservice_readout_active'),
			name: 'active',
			id: config.id + '-active',
			checked: true,
		}];
	}

});
Ext.reg('houservice-readout-window-create', Houservice.window.CreateReadout);


Houservice.window.UpdateReadout = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'houservice-readout-window-update';
	}
	Ext.applyIf(config, {
		title: _('houservice_readout_update'),
		width: 550,
		autoHeight: true,
		url: Houservice.config.connector_url,
		action: 'mgr/readout/update',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Houservice.window.UpdateReadout.superclass.constructor.call(this, config);
};
Ext.extend(Houservice.window.UpdateReadout, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'hidden',
			name: 'id',
			id: config.id + '-id',
		}, {
			xtype: 'textfield',
			fieldLabel: _('houservice_readout_name'),
			name: 'name',
			id: config.id + '-name',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'textarea',
			fieldLabel: _('houservice_readout_description'),
			name: 'description',
			id: config.id + '-description',
			anchor: '99%',
			height: 150,
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('houservice_readout_active'),
			name: 'active',
			id: config.id + '-active',
		}];
	}

});
Ext.reg('houservice-readout-window-update', Houservice.window.UpdateReadout);