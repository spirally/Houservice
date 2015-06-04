<?php

/**
 * The home manager controller for Houservice.
 *
 */
class HouserviceHomeManagerController extends HouserviceMainController {
	/* @var Houservice $Houservice */
	public $Houservice;


	/**
	 * @param array $scriptProperties
	 */
	public function process(array $scriptProperties = array()) {
	}


	/**
	 * @return null|string
	 */
	public function getPageTitle() {
		return $this->modx->lexicon('houservice');
	}


	/**
	 * @return void
	 */
	public function loadCustomCssJs() {
		$this->addCss($this->Houservice->config['cssUrl'] . 'mgr/main.css');
		$this->addCss($this->Houservice->config['cssUrl'] . 'mgr/bootstrap.buttons.css');
		$this->addJavascript($this->Houservice->config['jsUrl'] . 'mgr/misc/utils.js');
		$this->addJavascript($this->Houservice->config['jsUrl'] . 'mgr/widgets/items.grid.js');
		$this->addJavascript($this->Houservice->config['jsUrl'] . 'mgr/widgets/items.windows.js');
		$this->addJavascript($this->Houservice->config['jsUrl'] . 'mgr/widgets/readout.grid.js');
		$this->addJavascript($this->Houservice->config['jsUrl'] . 'mgr/widgets/readout.windows.js');
		$this->addJavascript($this->Houservice->config['jsUrl'] . 'mgr/widgets/home.panel.js');
		$this->addJavascript($this->Houservice->config['jsUrl'] . 'mgr/sections/home.js');
		$this->addHtml('<script type="text/javascript">
		Ext.onReady(function() {
			MODx.load({ xtype: "houservice-page-home"});
		});
		</script>');
	}


	/**
	 * @return string
	 */
	public function getTemplateFile() {
		return $this->Houservice->config['templatesPath'] . 'home.tpl';
	}
}