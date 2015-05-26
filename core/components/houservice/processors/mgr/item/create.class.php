<?php

/**
 * Create an Item
 */
class HouserviceItemCreateProcessor extends modObjectCreateProcessor {
	public $objectType = 'HouserviceItem';
	public $classKey = 'HouserviceItem';
	public $languageTopics = array('houservice');
	//public $permission = 'create';


	/**
	 * @return bool
	 */
	public function beforeSet() {
		$name = trim($this->getProperty('name'));
		if (empty($name)) {
			$this->modx->error->addField('name', $this->modx->lexicon('houservice_item_err_name'));
		}
		elseif ($this->modx->getCount($this->classKey, array('name' => $name))) {
			$this->modx->error->addField('name', $this->modx->lexicon('houservice_item_err_ae'));
		}

		return parent::beforeSet();
	}

}

return 'HouserviceItemCreateProcessor';