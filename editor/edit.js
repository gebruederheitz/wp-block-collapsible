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
        {
            'is-open': isSelected || focusWithin || initiallyOpen,
        },
    ]);

    return (
        <>
            <CollapseControls {...props} />
            <div className={classes}>
                <div className="ghwp-collapsible__toggle">
                    <button
                        style={{ margin: 0 }}
                        className="ghwp-collapsible__button"
                    >
                        <span className="ghwp-collapsible__title">
                            <RichText
                                value={heading}
                                onChange={(heading) => {
                                    setAttributes({ heading });
                                }}
                                placeholder={__('Collapsible title', 'ghwp')}
                            />
                            {hasSubtitle && (
                                <RichText
                                    className="ghwp-collapsible__subtitle"
                                    value={subtitle}
                                    onChange={(subtitle) => {
                                        setAttributes({ subtitle });
                                    }}
                                    placeholder={__('Subtitle', 'ghwp')}
                                />
                            )}
                        </span>
                        <hr className="ghwp-collapsible__separator" />
                        <span className="ghwp-collapsible__indicator" />
                    </button>
                </div>
                <div className="ghwp-collapsible__panel">
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
