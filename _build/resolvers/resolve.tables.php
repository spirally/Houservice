<?php

if ($object->xpdo) {
	/** @var modX $modx */
	$modx =& $object->xpdo;

	switch ($options[xPDOTransport::PACKAGE_ACTION]) {
		case xPDOTransport::ACTION_INSTALL:
			$modelPath = $modx->getOption('houservice_core_path', null, $modx->getOption('core_path') . 'components/houservice/') . 'model/';
			$modx->addPackage('houservice', $modelPath);

			$manager = $modx->getManager();
			$objects = array(
				'hsCalculation',
				'hsService',
				'hsReadout',
				'hsMeter',
				'hsMeterType',
			);
			foreach ($objects as $tmp) {
				$manager->createObjectContainer($tmp);
			}
			break;

		case xPDOTransport::ACTION_UPGRADE:
			break;

		case xPDOTransport::ACTION_UNINSTALL:
			break;
	}
}
return true;
