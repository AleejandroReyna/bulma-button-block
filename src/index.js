import { registerBlockType } from '@wordpress/blocks';
 
registerBlockType( 'bulma/button', {
    title: 'Bulma Button',
    icon: 'smiley',
    category: 'layout',
    edit: ({className}) => <div className={ className }>Hola, We!</div>,
    save: () => <div>Hola, we 2!</div>,
} );