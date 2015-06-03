<?php
// For debug
ini_set('display_errors', 1);
ini_set('error_reporting', -1);
// Load MODX config
if (file_exists(dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php')) {
  /** @noinspection PhpIncludeInspection */
  require_once dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php';
}
else {
  /** @noinspection PhpIncludeInspection */
  require_once dirname(dirname(dirname(dirname(dirname(__FILE__))))) . '/config.core.php';
}
/** @noinspection PhpIncludeInspection */
require_once MODX_CORE_PATH . 'config/' . MODX_CONFIG_KEY . '.inc.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CONNECTORS_PATH . 'index.php';
/** @var Houservice $Houservice */
$Houservice = $modx->getService('houservice', 'Houservice', $modx->getOption('houservice_core_path', null, $modx->getOption('core_path') . 'components/houservice/') . 'model/houservice/');
$modx->lexicon->load('houservice:default');

// handle request
$corePath = $modx->getOption('houservice_core_path', null, $modx->getOption('core_path') . 'components/houservice/');
$path = $modx->getOption('processorsPath', $Houservice->config, $corePath . 'processors/');
$modx->request->handleRequest(array(
	'processors_path' => $path,
	'location' => '',
));