<?php

/**
 * Disable an Item
 */
class HouserviceItemDisableProcessor extends modObjectProcessor {
	public $objectType = 'HouserviceItem';
	public $classKey = 'HouserviceItem';
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
			return $this->failure($this->modx->lexicon('houservice_item_err_ns'));
		}

		foreach ($ids as $id) {
			/** @var HouserviceItem $object */
			if (!$object = $this->modx->getObject($this->classKey, $id)) {
				return $this->failure($this->modx->lexicon('houservice_item_err_nf'));
			}

			$object->set('active', false);
			$object->save();
		}

		return $this->success();
	}

}

return 'HouserviceItemDisableProcessor';
