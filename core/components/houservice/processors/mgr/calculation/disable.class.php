<?php

/**
 * Disable an Item
 */
class hsCalculationDisableProcessor extends modObjectProcessor {
	public $objectType = 'hsCalculation';
	public $classKey = 'hsCalculation';
	public $languageTopics = array('houservice');
	//public $permission = 'save';


	/**
	 * @return array|string
	 */
	public function process() {
		if (!$this->checkPermissions()) {
			return $this->failure($this->modx->lexicon('access_denied'));
		}

		$ids = $this->modx->fromJSON($this->getProperty('ids'));
		if (empty($ids)) {
			return $this->failure($this->modx->lexicon('houservice_calculation_err_ns'));
		}

		foreach ($ids as $id) {
			/** @var hsCalculation $object */
			if (!$object = $this->modx->getObject($this->classKey, $id)) {
				return $this->failure($this->modx->lexicon('houservice_calculation_err_nf'));
			}

			$object->set('active', false);
			$object->save();
		}

		return $this->success();
	}

}

return 'hsCalculationDisableProcessor';
