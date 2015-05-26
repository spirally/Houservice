<?php

/**
 * Class HouserviceMainController
 */
abstract class HouserviceMainController extends modExtraManagerController {
	/** @var Houservice $Houservice */
	public $Houservice;


	/**
	 * @return void
	 */
	public function initialize() {
		$corePath = $this->modx->getOption('houservice_core_path', null, $this->modx->getOption('core_path') . 'components/houservice/');
		require_once $corePath . 'model/houservice/houservice.class.php';

		$this->Houservice = new Houservice($this->modx);
		$this->addCss($this->Houservice->config['cssUrl'] . 'mgr/main.css');
		$this->addJavascript($this->Houservice->config['jsUrl'] . 'mgr/houservice.js');
		$this->addHtml('
		<script type="text/javascript">
			Houservice.config = ' . $this->modx->toJSON($this->Houservice->config) . ';
			Houservice.config.connector_url = "' . $this->Houservice->config['connectorUrl'] . '";
		</script>
		');

		parent::initialize();
	}


	/**
	 * @return array
	 */
	public function getLanguageTopics() {
		return array('houservice:default');
	}


	/**
	 * @return bool
	 */
	public function checkPermissions() {
		return true;
	}
}


/**
 * Class IndexManagerController
 */
class IndexManagerController extends HouserviceMainController {

	/**
	 * @return string
	 */
	public static function getDefaultController() {
		return 'home';
	}
}