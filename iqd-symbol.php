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
  wp_add_inline_style('iqd-symbol','@font-face{font-family:"IQD Symbol";font-display:swap;unicode-range:U+E900;src:url(data:font/woff2;base64,d09GMgABAAAAAAKQAAoAAAAABOQAAAJGAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmAAPAqDTIM+ATYCJAMMCwgABCAFghEHLBscBACeBTkZb2pGIMIlzm31d9jbWsnntdV+ksmcWebELHtunZlV6qUqlO6tddByvJ5ld8Z17Tgd/zxOjm9jaTUUUQjAW7cvKAnGUZhCBqHESaJlYUBla8rd63Hzfzb9G+4GOy66QMez4WyC5+3b86VRGqbZjOqmD5JG3PNTJCDJvLUdPWM2WyvJ6BM9Ilg0JFs4hWDJCCApACvur7S1WH30BXf0bncH7gCAAhhAYAhAUPgDVAqCcn+1hu7B+NhRBDDmmgpQAB+Y6dkKACAAltNLAkyKmVLEiR3bTQbNCYWwG/e2dJ2PEuCjBThoNA2i2ruFvb/wXpdnI1lJV+MHsx3qhDqabYHvzsgXWy/wtKlc8JkYKdOn/LR8riq+2Uvp8N0zXTMPslD5Dd/pOjPbcuVbPmUUkm/xu37bu2B3qa2Ti39QPrG09HTn4f/Xj/w1Jfbm+S2N6h7MbNWr+akFaekZUuq8hdB4aVa5JoS3TsqM9LSC1PzkukiW9T/vPn/5euP+/Y2j/unG5vWN5sbp/qON+/vPb75++Xz3U6+wSAAACIBA3blvnUWi3pCxvwB/fv8rHRIJ9IgXYKiR0Znq6RcBImcQYpmFf4gMS1SZCJF5I22hoDLUyhntwJYJY3YyZcADbsaKP4ZkIwCh4kgmhDaZMjcFMeNpGTPC3SNCw91DLvpRyRzyCjJ/AR0/CZbEpkX8KBAK3EUI1X99CHf5LmZUBTItA1FTkkWgyDewxRSiuwzZOb9CiUk9YjuI8UTJtnlBWcdAMwA=) format("woff2")} .woocommerce-Price-currencySymbol{font-family:"IQD Symbol"}.wc-block-formatted-money-amount{font-family:"IQD Symbol",system-ui,sans-serif}');
},20);
