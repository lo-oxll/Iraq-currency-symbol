<?php
/**
 * Plugin Name: IQD Symbol
 * Description: Shows the Iraqi dinar symbol instead of "د.ع" in WooCommerce prices. CC0 symbol, MIT code.
 * Version: 1.0.0
 */
defined('ABSPATH')||exit;

add_filter('woocommerce_currency_symbol',function($s,$c){
  return ($c==='IQD'&&!is_admin()&&empty($GLOBALS['iqd_in_email']))?"\u{E900}":$s;
},10,2);
add_action('woocommerce_email_header',function(){$GLOBALS['iqd_in_email']=true;});
add_action('woocommerce_email_footer',function(){$GLOBALS['iqd_in_email']=false;});

add_action('wp_enqueue_scripts',function(){
  if(!function_exists('get_woocommerce_currency')||get_woocommerce_currency()!=='IQD')return;
  wp_register_style('iqd-symbol',false);
  wp_enqueue_style('iqd-symbol');
  wp_add_inline_style('iqd-symbol','@font-face{font-family:"IQD Symbol";font-display:swap;unicode-range:U+E900;src:url(data:font/woff;base64,d09GRgABAAAAAAPkAAoAAAAABPAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABZAAAADMAAABgSD8/4mNtYXAAAAGkAAAAMQAAADzR8RedZ2x5ZgAAAeAAAAEzAAAB1mTslf5oZWFkAAAA9AAAADYAAAA2MO1RKGhoZWEAAAEsAAAAHgAAACQHZgNYaG10eAAAAZgAAAAMAAAADAcKAG5sb2NhAAAB2AAAAAgAAAAIAA0A+G1heHAAAAFMAAAAGAAAACAACADMbmFtZQAAAxQAAAC4AAABEcQbyFFwb3N0AAADzAAAABUAAAAsA3FyZgABAAAAAQAAmV+YKl8PPPUAAwPoAAAAAOb4KKcAAAAA5v7kyAAyAAADrgLZAAAAAwACAAAAAAAAeJxjYGRgYG75bwEkXzEYMRgxr2MAiqAAZgBh1wPGAAB4nGNgZGBgYGY4xcDCAAJMDGgAABTIANV4nGNgZuJgnMDAysDCQBgwCiBx7IEASCm8ZGBu+W/BACQZTsDkmG4x3QLJMTAAANflB6MAAfQAMgEsAAAD6gA8eJxjYGBgYmBgYAZiESDJCKZZGDSANBuQZgTKKrxk+P8fyAfT/x+KM4FVAQEAlwgIcwAAAAAAAA0ADQDreJw1kE1KBDEQhSs/3el0EtMRRFBEhmGYzTDCZCuI4C3shRfxBG68gFfwBLNRcCGeYFYuXbmadQ++Srdv0aQrVd97KRK0IRLvckuKKKdZ2ohnuR3uiDRdE6lXuaMHeqMP+uT7fLmO62W+WZnTq9U8J5HTfJFPZvvbYyhBXdfFGI+gEIL33jnXOtta20DG1HVdQU3DX/wYw3WLBrQ5hwGM8TQgQDGRybJLsXBjANcH7wBuIWuZbJhs6gpsXWmthFAaBzhUKMPDsAdcIJg4AOASYnGJqbs4/Pa9fPo5vMidEEJKqQDQukTEPAMsE1ogStAxq/PnZ96NrywPRSCOhGaOxK/lSJBSgALdFzrwE39yYI+yibKMsg/20lU7nrg0XXNnPZH/2QwHffiWj8Py6/4P+kkmyAB4nGWOzQqCQBRGjxb0AwZB0HZq1UaxZWvdtCujBxjFZGBUMBSkJ+itu6GtmuEy58z95geY88BhGFupgR2WYgO7zNiN7LHmwARnuhALOI3ssKEY2WXFa2SPPe8oCtUxCJWvLm1qTabiutSmOl9jdevLtLZJXrRWN7/cvTJd3jy1JZIZojjKU9/Vl7rQkmIxZGIxNSVarOLMVVxxo5e9VDqWhFw+1gppmr/77nLK0Emm4SkJ+wGn3SfgeJxjYGLAD5hBmJGJObMwBQADVQFNAAAA) format("woff")} .woocommerce-Price-currencySymbol{font-family:"IQD Symbol"}.wc-block-formatted-money-amount{font-family:"IQD Symbol",system-ui,sans-serif}');
},20);
