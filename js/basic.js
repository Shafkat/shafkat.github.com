/*
 * SimpleModal Basic Modal Dialog
 * http://www.ericmmartin.com/projects/simplemodal/
 * http://code.google.com/p/simplemodal/
 *
 * Copyright (c) 2010 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Revision: $Id: basic.js 254 2010-07-23 05:14:44Z emartin24 $
 */

jQuery(function ($) {
	// Load dialog on page load
	//$('#basic-modal-content').modal();

	// Load dialog on click
	$('#orderProduct1').click(function (e) {
		$('#basic-modal-content-prod1').modal();
		
		return false;
	});
	
	$('#product1').click(function (e) {
		$('#basic-modal-content-prod1').modal();

		return false;
	});
	
	$('#orderProduct2').click(function (e) {
		$('#basic-modal-content-prod2').modal();
		return false;
	});
	
	$('#product2').click(function (e) {
		$('#basic-modal-content-prod2').modal();

		return false;
	});
});