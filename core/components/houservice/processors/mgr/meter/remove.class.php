<?php

/**
 * Remove an Items
 */
class hsMeterRemoveProcessor extends modObjectProcessor {
	public $objectType = 'hsMeter';
	public $classKey = 'hsMeter';
	public $languageTopics = array('houservice');
	//public $permission = 'remove';


	/**
	 * @return array|string
	 */
	public function process() {
		if (!$this->checkPermissions()) {
			return $this->failure($this->modx->lexicon('access_denied'));
		}

		$ids = $this->modx->fromJSON($this->getProperty('ids'));
		if (empty($ids)) {
			return $this->failure($this->modx->lexicon('houservice_meter_err_ns'));
		}

		foreach ($ids as $id) {
			/** @var hsMeter $object */
			if (!$object = $this->modx->getObject($this->classKey, $id)) {
				return $this->failure($this->modx->lexicon('houservice_meter_err_nf'));
			}

			$object->remove();
		}

		return $this->success();
	}

}

return 'hsMeterRemoveProcessor';