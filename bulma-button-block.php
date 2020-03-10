<?php

function bulma_button_block_enqueue() {
	$asset_file = require_once ('build/index.asset.php');

	wp_enqueue_script(
		'bulma-button-block',
		get_template_directory_uri() . '/blocks/bulma-button-block/build/index.js',
		$asset_file['dependencies'],
		$asset_file['version']
	);

	wp_register_style(
        'bulma-button-block-editor',
		get_template_directory_uri() . '/blocks/bulma-button-block/editor.css',
        array( 'wp-edit-blocks' ),
        filemtime( dirname(__FILE__) . '/editor.css')
	);
	
	wp_register_style(
        'bulma-button-block',
		get_template_directory_uri() . '/blocks/bulma-button-block/style.css',
        array( ),
        filemtime( dirname(__FILE__) . '/style.css')
	);
	
	register_block_type( 'bulma/button', array(
        'style' => 'bulma-button-block',
        'editor_style' => 'bulma-button-block-editor',
        'editor_script' => 'bulma-button-block',
    ) );
}
add_action( 'init', 'bulma_button_block_enqueue' );