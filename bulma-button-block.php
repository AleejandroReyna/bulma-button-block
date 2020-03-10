<?php

function bulma_button_block_enqueue() {
	$asset_file = require_once ('build/index.asset.php');

	wp_enqueue_script(
		'bulma_button_block',
		get_template_directory_uri() . '/blocks/bulma-button-block/build/index.js',
		$asset_file['dependencies'],
		$asset_file['version']
	);
}
add_action( 'enqueue_block_editor_assets', 'bulma_button_block_enqueue' );