import { registerBlockType, registerBlockStyle } from '@wordpress/blocks'
import { RichText, InspectorControls, BlockControls } from '@wordpress/block-editor'
import {SelectControl, TextControl, ToggleControl} from '@wordpress/components'
import {Fragment} from 'react'

registerBlockType( 'bulma/button', {
    title: 'Bulma Button',
    icon: 'smiley',
    category: 'layout',
    description: 'Simple bulma button for buttons and links.',
    attributes: {
        buttonType: {
            type: 'string',
            default: 'a'
        },
        buttonStyle: {
            type: 'string',
            default: 'none'
        },
        label: {
            type: 'string',
            source: 'text'
        },
        link: {
            type: 'string',
            default: '#'
        },
        openNewTab: {
            type: 'boolean',
            default: true
        }
    },
    edit: ({className, attributes, setAttributes}) => {
        const onChangeContent = ( content ) => {
            setAttributes( { label: content } );
        };

        const onChangeStyle = content => setAttributes({buttonStyle: content})
        const onChangeType = type => setAttributes({buttonType: type})
        const onChangeLink = link => setAttributes({link})

        return (
            <div>
                {
                    <InspectorControls>
                        <SelectControl
                            label='Style: '
                            value={attributes.buttonStyle}
                            options={[
                                        {label: 'Default', value: 'none'},
                                        {label: 'White', value: 'is-white'},
                                        {label: 'Light', value: 'is-light'},
                                        {label: 'Dark', value: 'is-dark'},
                                        {label: 'Black', value: 'is-black'},
                                        {label: 'Text', value: 'is-text'},
                                        {label: 'primary', value: 'is-primary'},
                                        {label: 'Link', value: 'is-link'},
                                        {label: 'Info', value: 'is-info'},
                                        {label: 'Success', value: 'is-success'},
                                        {label: 'Warning', value: 'is-warning'},
                                        {label: 'Danger', value: 'is-danger'}
                                    ]}
                            onChange={onChangeStyle}
                        />

                        <SelectControl
                            label='Type: '
                            value={attributes.buttonType}
                            options={[
                                        {label: 'Link', value: 'a'},
                                        {label: 'Button', value: 'button'}
                                    ]}
                            onChange={onChangeType}
                        />
                        {attributes.buttonType == 'a' &&
                            <Fragment>
                                <TextControl label='Link: ' value={attributes.link} onChange={onChangeLink} />

                                <ToggleControl
                                    label="Open in another tab"
                                    help={ attributes.openNewTab ? 'Yes, open in another tab.' : 'No, redirect to link.' }
                                    checked={ attributes.openNewTab }
                                    onChange={ () => setAttributes({openNewTab: !attributes.openNewTab}) }
                                />
                            </Fragment>
                        }
                    </InspectorControls>
                }

                <button className={`button ${className} ${attributes.buttonStyle}`}>
                    <RichText 
                        tagName="span" 
                        onChange={ onChangeContent } 
                        value={attributes.label} 
                        placeholder={'Label here...'}
                        formattingControls={ [ 'bold', 'italic' ] } 
                    />
                </button>
            </div>
        )
    },
    save: ({className, attributes}) => {

        const renderItem = () => {
            if(attributes.buttonType == 'button') {
                return (
                    <button className={`button ${attributes.buttonStyle}`}>
                        <RichText.Content tagName="span" value={attributes.label} />
                    </button>
                )
            }

            return (
                <a target={attributes.openNewTab ? '_blank' : '_self'} rel="noreferrer noopener" className={`button ${attributes.buttonStyle}`} href={attributes.link}>
                    <RichText.Content tagName="span" value={attributes.label} />
                </a>
            )
        }

        return (
            <Fragment>
                {renderItem()}
            </Fragment>
        )
    }
} );