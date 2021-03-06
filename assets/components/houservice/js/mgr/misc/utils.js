Houservice.utils.renderBoolean = function (value, props, row) {

	return value
		? String.format('<span class="green">{0}</span>', _('yes'))
		: String.format('<span class="red">{0}</span>', _('no'));
}

Houservice.utils.getMenu = function (actions, grid, selected) {
	var menu = [];
	var cls, icon, title, action = '';

	for (var i in actions) {
		if (!actions.hasOwnProperty(i)) {
			continue;
		}

		var a = actions[i];
		if (!a['menu']) {
			if (a == '-') {
				menu.push('-');
			}
			continue;
		}
		else if (menu.length > 0 && /^remove/i.test(a['action'])) {
			menu.push('-');
		}

		if (selected.length > 1) {
			if (!a['multiple']) {
				continue;
			}
			else if (typeof(a['multiple']) == 'string') {
				a['title'] = a['multiple'];
			}
		}

		cls = a['cls'] ? a['cls'] : '';
		icon = a['icon'] ? a['icon'] : '';
		title = a['title'] ? a['title'] : a['title'];
		action = a['action'] ? grid[a['action']] : '';

		menu.push({
			handler: action,
			text: String.format(
				'<span class="{0}"><i class="x-menu-item-icon {1}"></i>{2}</span>',
				cls, icon, title
			)
		});
	}

	return menu;
};

Houservice.utils.renderUserLink = function(val,cell,row) {
    if (!val) {return '';}
    var action = MODx.action ? MODx.action['security/user/update'] : 'security/user/update';
    var url = 'index.php?a='+action+'&id='+row.data['user_id'];

    return '<a href="' + url + '" target="_blank">' + val + '</a>'
};

Houservice.utils.renderMeterType = function(val,cell,row) {
    if (!val) {return '';}
    else if (!row.data['meter_type_id']) {return val;}

    var action = MODx.action ? MODx.action['resource/update'] : 'resource/update';
    var url = 'index.php?a='+action+'&id='+row.data['product_id'];

    return '<a href="' + url + '" target="_blank" class="ms2-link">' + val + '</a>'
};

Houservice.utils.renderActions = function (value, props, row) {
	var res = [];
	var cls, icon, title, action, item = '';
	for (var i in row.data.actions) {
		if (!row.data.actions.hasOwnProperty(i)) {
			continue;
		}
		var a = row.data.actions[i];
		if (!a['button']) {
			continue;
		}

		cls = a['cls'] ? a['cls'] : '';
		icon = a['icon'] ? a['icon'] : '';
		action = a['action'] ? a['action'] : '';
		title = a['title'] ? a['title'] : '';

		item = String.format(
			'<li class="{0}"><button class="btn btn-default {1}" action="{2}" title="{3}"></button></li>',
			cls, icon, action, title
		);

		res.push(item);
	}

	return String.format(
		'<ul class="houservice-row-actions">{0}</ul>',
		res.join('')
	);
};