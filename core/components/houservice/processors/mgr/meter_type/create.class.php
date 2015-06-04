<?php

/**
 * Create an Item
 */
class hsMeterTypeCreateProcessor extends modObjectCreateProcessor {
	public $objectType = 'hsMeterType';
	public $classKey = 'hsMeterType';
	public $languageTopics = array('houservice');
	//public $permission = 'create';


	/**
	 * @return bool
	 */
	public function beforeSet() {
		$name = trim($this->getProperty('name'));
		if (empty($name)) {
			$this->modx->error->addField('name', $this->modx->lexicon('houservice_meter_type_err_name'));
		}
		elseif ($this->modx->getCount($this->classKey, array('name' => $name))) {
			$this->modx->error->addField('name', $this->modx->lexicon('houservice_meter_type_err_ae'));
		}

		return parent::beforeSet();
	}

}

return 'hsMeterTypeCreateProcessor';