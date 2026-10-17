<?php
/**
 * Plugin Name: Iraq Dinar Symbol
 * Description: يعرض رمز الدينار العراقي الجديد بدل "IQD" / "د.ع" في أسعار ووكومرس.
 * Version: 1.0.0
 * License: CC0-1.0
 */
if ( ! defined( 'ABSPATH' ) ) exit;

// تحميل الخط من موقع الرمز (غيّر الرابط إذا رفعت الخط على موقعك)
add_action( 'wp_enqueue_scripts', function () {
	wp_enqueue_style( 'iraq-dinar', 'https://lo-oxll.github.io/Iraq-currency-symbol/css/iraq-dinar.css', array(), '1.0.0' );
} );

// استبدال رمز العملة IQD
add_filter( 'woocommerce_currency_symbol', function ( $symbol, $currency ) {
	return 'IQD' === $currency ? '<span class="iqd">&#xE900;</span>' : $symbol;
}, 10, 2 );
