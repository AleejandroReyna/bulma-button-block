import { registerBlockType } from '@wordpress/blocks'
import { RichText,InspectorControls } from '@wordpress/block-editor'
 
registerBlockType( 'bulma/button', {
    title: 'Bulma Button',
    icon: 'smiley',
    category: 'layout',
    attributes: {
        button_type: {
            type: 'string',
            source: 'text',
            default: 'a'
        },
        label: {
            type: 'string',
            source: 'text'
        }
    },
    edit: ({className, attributes, setAttributes}) => {
        const onChangeContent = ( content ) => {
            setAttributes( { label: content } );
        };
        return (
            <div className={ className }>
                <RichText 
                    tagName="span" 
                    onChange={ onChangeContent } 
                    value={attributes.label} 
                    placeholder={'Label here...'}
                    formattingControls={ [ 'bold', 'italic' ] } 
                />
            </div>
        )
    },
    save: ({className, attributes}) => <div><RichText.Content tagName="span" value={attributes.label} /></div>
} );