<?php

/**
 * Create an Item
 */
class hsReadoutCreateProcessor extends modObjectCreateProcessor {
	public $objectType = 'hsReadout';
	public $classKey = 'hsReadout';
	public $languageTopics = array('houservice');
	//public $permission = 'create';


	/**
	 * @return bool
	 */
	public function beforeSet() {
		$name = trim($this->getProperty('name'));
		if (empty($name)) {
			$this->modx->error->addField('name', $this->modx->lexicon('houservice_readout_err_name'));
		}
		elseif ($this->modx->getCount($this->classKey, array('name' => $name))) {
			$this->modx->error->addField('name', $this->modx->lexicon('houservice_readout_err_ae'));
		}

		return parent::beforeSet();
	}

}

return 'hsReadoutCreateProcessor';