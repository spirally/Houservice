<?php

/**
 * Get an Meter
 */
class hsMeterGetProcessor extends modObjectGetProcessor {
	public $objectType = 'hsMeter';
	public $classKey = 'hsMeter';
	public $languageTopics = array('houservice:default');
	//public $permission = 'view';


	/**
	 * We doing special check of permission
	 * because of our objects is not an instances of modAccessibleObject
	 *
	 * @return mixed
	 */
	public function process() {
		if (!$this->checkPermissions()) {
			return $this->failure($this->modx->lexicon('access_denied'));
		}

		return parent::process();
	}

}

return 'hsMeterGetProcessor';