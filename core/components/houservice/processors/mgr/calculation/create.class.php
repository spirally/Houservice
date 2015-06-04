<?php

/**
 * Create an Item
 */
class hsCalculationCreateProcessor extends modObjectCreateProcessor {
	public $objectType = 'hsCalculation';
	public $classKey = 'hsCalculation';
	public $languageTopics = array('houservice');
	//public $permission = 'create';


	/**
	 * @return bool
	 */
	public function beforeSet() {
		$name = trim($this->getProperty('name'));
		if (empty($name)) {
			$this->modx->error->addField('name', $this->modx->lexicon('houservice_calculation_err_name'));
		}
		elseif ($this->modx->getCount($this->classKey, array('name' => $name))) {
			$this->modx->error->addField('name', $this->modx->lexicon('houservice_calculation_err_ae'));
		}

		return parent::beforeSet();
	}

}

return 'hsCalculationCreateProcessor';