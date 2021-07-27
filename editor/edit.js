import classnames from 'classnames';
import { blockEditor, i18n } from 'wp';

import { controls as CollapseControls } from './controls';
import { WithFocusWithin } from '@gebruederheitz/wp-editor-components';

const { InnerBlocks, RichText } = blockEditor;
const { __ } = i18n;

const ALLOWED_CHILDREN = [
    'core/button',
    'core/columns',
    'core/heading',
    'core/image',
    'core/list',
    'core/paragraph',
    'core/shortcode',
    'core/spacer',
    'core/text-columns',
    'ghwp/button-group',
];

const Edit = (props) => {
    const {
        attributes: { hasSubtitle, heading, initiallyOpen, subtitle },
        className,
        focusWithin,
        isSelected,
        setAttributes,
    } = props;

    const classes = classnames([
        className,
        'ghwp-collapsible',
        'ghwp-accordion__item',
        {
            'is-open': isSelected || focusWithin || initiallyOpen,
        },
    ]);

    return (
        <>
            <CollapseControls {...props} />
            <div className={classes}>
                <div className="ghwp-collapsible-toggle ghwp-accordion__item-title">
                    <button
                        style={{ margin: 0 }}
                        className="ghwp-accordion__item-title-text"
                    >
                        <RichText
                            value={heading}
                            onChange={(heading) => {
                                setAttributes({ heading });
                            }}
                            placeholder={__('Collapsible title', 'ghwp')}
                        />
                        {hasSubtitle && (
                            <RichText
                                className="ghwp-collapsible-subtitle"
                                value={subtitle}
                                onChange={(subtitle) => {
                                    setAttributes({ subtitle });
                                }}
                                placeholder={__('Subtitle', 'ghwp')}
                            />
                        )}
                        <hr className="ghwp-accordion__item-title-line" />
                        <div className="ghwp-collapsible-toggle">
                            <button className="ghwp-collapsible-toggle-button">
                                <span className="ghwp-accordion__item-title-arrow" />
                            </button>
                        </div>
                    </button>
                </div>
                <div className="ghwp-collapsible-panel ghwp-accordion__item-content">
                    <InnerBlocks
                        allowedBlocks={ALLOWED_CHILDREN}
                        template={[['core/paragraph']]}
                        templateLock={false}
                    />
                </div>
            </div>
        </>
    );
};

export const edit = WithFocusWithin(Edit);
