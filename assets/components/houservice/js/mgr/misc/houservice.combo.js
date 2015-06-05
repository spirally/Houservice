Houservice.combo.User = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        name: 'user'
        //,fieldLabel: _('ms2_product_' + config.name || 'createdby')
        ,hiddenName: config.name || 'createdby'
        ,displayField: 'username'
        ,valueField: 'id'
        ,anchor: '99%'
        ,fields: ['username','id','fullname']
        ,pageSize: 20
        ,url: MODx.config.connector_url
        ,typeAhead: true
        ,editable: true
        ,action: 'getList'
        ,allowBlank: true
        ,baseParams: {
            //action: 'getlist'
            action: 'security/user/getlist'
            ,combo: 1
            ,id: config.value
            //,limit: 0
        }
        ,tpl: new Ext.XTemplate(''
            +'<tpl for="."><div class="x-combo-list-item minishop2-user-list-item">'
            +'<span><small>({id})</small> <b>{username}</b> ({fullname})</span>'
            +'</div></tpl>',{
            compiled: true
        })
        //,itemSelector: 'div.minishop2-user-list-item'
    });
    Houservice.combo.User.superclass.constructor.call(this,config);
};
Ext.extend(Houservice.combo.User,MODx.combo.ComboBox);
Ext.reg('houservice-combo-user',Houservice.combo.User);

Houservice.combo.MeterType = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        name: config.name || 'meter_type_id'
        ,hiddenName: config.name || 'meter_type_id'
        ,displayField: 'name'
        ,valueField: 'id'
        ,fields: ['id','name']
        ,pageSize: 10
        ,hideMode: 'offsets'
        ,url: Houservice.config.connectorUrl
        ,baseParams: {
            action: 'mgr/meter_type/getlist'
            ,combo: 1
            ,id: config.value
            //,limit: 0
        }
    });
    Houservice.combo.MeterType.superclass.constructor.call(this,config);
};
Ext.extend(Houservice.combo.MeterType,MODx.combo.ComboBox);
Ext.reg('houservice-combo-meter_type',Houservice.combo.MeterType);