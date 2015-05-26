Houservice.window.CreateItem = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'houservice-item-window-create';
	}
	Ext.applyIf(config, {
		title: _('houservice_item_create'),
		width: 550,
		autoHeight: true,
		url: Houservice.config.connector_url,
		action: 'mgr/item/create',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Houservice.window.CreateItem.superclass.constructor.call(this, config);
};
Ext.extend(Houservice.window.CreateItem, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'textfield',
			fieldLabel: _('houservice_item_name'),
			name: 'name',
			id: config.id + '-name',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'textarea',
			fieldLabel: _('houservice_item_description'),
			name: 'description',
			id: config.id + '-description',
			height: 150,
			anchor: '99%'
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('houservice_item_active'),
			name: 'active',
			id: config.id + '-active',
			checked: true,
		}];
	}

});
Ext.reg('houservice-item-window-create', Houservice.window.CreateItem);


Houservice.window.UpdateItem = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'houservice-item-window-update';
	}
	Ext.applyIf(config, {
		title: _('houservice_item_update'),
		width: 550,
		autoHeight: true,
		url: Houservice.config.connector_url,
		action: 'mgr/item/update',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Houservice.window.UpdateItem.superclass.constructor.call(this, config);
};
Ext.extend(Houservice.window.UpdateItem, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'hidden',
			name: 'id',
			id: config.id + '-id',
		}, {
			xtype: 'textfield',
			fieldLabel: _('houservice_item_name'),
			name: 'name',
			id: config.id + '-name',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'textarea',
			fieldLabel: _('houservice_item_description'),
			name: 'description',
			id: config.id + '-description',
			anchor: '99%',
			height: 150,
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('houservice_item_active'),
			name: 'active',
			id: config.id + '-active',
		}];
	}

});
Ext.reg('houservice-item-window-update', Houservice.window.UpdateItem);