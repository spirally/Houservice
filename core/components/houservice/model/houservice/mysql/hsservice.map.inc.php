<?php
$xpdo_meta_map['hsService']= array (
  'package' => 'houservice',
  'version' => '1.1',
  'table' => 'houservice_service',
  'extends' => 'xPDOSimpleObject',
  'fields' => 
  array (
    'calculation_id' => 0,
    'name' => '',
    'provider' => '',
    'days_count' => 0,
    'days_period' => 0,
    'rate' => 0,
    'rate_norm' => 0,
    'cost' => 0,
    'sum_rate' => 0,
    'sum_subsidy' => 0,
    'sum_recalc' => 0,
    'sum_pay' => 0,
    'sum_odn' => 0,
    'rate_odn' => 0,
  ),
  'fieldMeta' => 
  array (
    'calculation_id' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'attributes' => 'unsigned',
      'null' => false,
      'default' => 0,
    ),
    'name' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '255',
      'phptype' => 'string',
      'null' => true,
      'default' => '',
    ),
    'provider' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '255',
      'phptype' => 'string',
      'null' => true,
      'default' => '',
    ),
    'days_count' => 
    array (
      'dbtype' => 'int',
      'precision' => '4',
      'attributes' => 'unsigned',
      'phptype' => 'integer',
      'null' => true,
      'default' => 0,
    ),
    'days_period' => 
    array (
      'dbtype' => 'int',
      'precision' => '4',
      'attributes' => 'unsigned',
      'phptype' => 'integer',
      'null' => true,
      'default' => 0,
    ),
    'rate' => 
    array (
      'dbtype' => 'decimal',
      'precision' => '12,3',
      'phptype' => 'float',
      'null' => true,
      'default' => 0,
    ),
    'rate_norm' => 
    array (
      'dbtype' => 'decimal',
      'precision' => '12,3',
      'phptype' => 'float',
      'null' => true,
      'default' => 0,
    ),
    'cost' => 
    array (
      'dbtype' => 'decimal',
      'precision' => '12,2',
      'phptype' => 'float',
      'null' => true,
      'default' => 0,
    ),
    'sum_rate' => 
    array (
      'dbtype' => 'decimal',
      'precision' => '12,2',
      'phptype' => 'float',
      'null' => true,
      'default' => 0,
    ),
    'sum_subsidy' => 
    array (
      'dbtype' => 'decimal',
      'precision' => '12,2',
      'phptype' => 'float',
      'null' => true,
      'default' => 0,
    ),
    'sum_recalc' => 
    array (
      'dbtype' => 'decimal',
      'precision' => '12,2',
      'phptype' => 'float',
      'null' => true,
      'default' => 0,
    ),
    'sum_pay' => 
    array (
      'dbtype' => 'decimal',
      'precision' => '12,2',
      'phptype' => 'float',
      'null' => true,
      'default' => 0,
    ),
    'sum_odn' => 
    array (
      'dbtype' => 'decimal',
      'precision' => '12,2',
      'phptype' => 'float',
      'null' => true,
      'default' => 0,
    ),
    'rate_odn' => 
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
    'calculation_id' => 
    array (
      'alias' => 'calculation_id',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'calculation_id' => 
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
    'Calculation' => 
    array (
      'class' => 'hsCalculation',
      'local' => 'calculation_id',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
  ),
);
