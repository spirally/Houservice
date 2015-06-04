<?php

/**
 * Create an Item
 */
class hsMeterCreateProcessor extends modObjectCreateProcessor {
	public $objectType = 'hsMeter';
	public $classKey = 'hsMeter';
	public $languageTopics = array('houservice');
	//public $permission = 'create';


	/**
	 * @return bool
	 */
	public function beforeSet() {
		$name = trim($this->getProperty('name'));
		if (empty($name)) {
			$this->modx->error->addField('name', $this->modx->lexicon('houservice_meter_err_name'));
		}
		elseif ($this->modx->getCount($this->classKey, array('name' => $name))) {
			$this->modx->error->addField('name', $this->modx->lexicon('houservice_meter_err_ae'));
		}

		return parent::beforeSet();
	}

}

return 'hsMeterCreateProcessor';