<?php
$xpdo_meta_map['hsReadout']= array (
  'package' => 'houservice',
  'version' => '1.1',
  'table' => 'houservice_readout',
  'extends' => 'xPDOSimpleObject',
  'fields' => 
  array (
    'meter_id' => 0,
    'period' => NULL,
    'value' => 0,
  ),
  'fieldMeta' => 
  array (
    'meter_id' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'attributes' => 'unsigned',
      'null' => true,
      'default' => 0,
    ),
    'period' => 
    array (
      'dbtype' => 'date',
      'phptype' => 'date',
      'null' => true,
    ),
    'value' => 
    array (
      'dbtype' => 'decimal',
      'precision' => '12,3',
      'phptype' => 'float',
      'null' => true,
      'default' => 0,
    ),
  ),
  'indexes' => 
  array (
    'key' => 
    array (
      'alias' => 'key',
      'primary' => false,
      'unique' => true,
      'type' => 'BTREE',
      'columns' => 
      array (
        'meter_id' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
        'period' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
  ),
  'aggregates' => 
  array (
    'Meter' => 
    array (
      'class' => 'hsMeter',
      'local' => 'meter_id',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
  ),
);
