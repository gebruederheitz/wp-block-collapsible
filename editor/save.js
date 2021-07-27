import classnames from 'classnames';
import { blockEditor } from 'wp';

const { InnerBlocks, RichText } = blockEditor;

export const saveDynamic = () => <InnerBlocks.Content />;

export const saveStatic = (props) => {
    const {
        attributes: {
            inner,
            initiallyOpen,
            hasSubtitle,
            heading,
            prettyName,
            subtitle,
        },
        innerBlocks,
    } = props;

    return (
        <div
            className={classnames([
                'ghwp-collapsible ghwp-accordion__item',
                {
                    'is-open': initiallyOpen,
                },
            ])}
        >
            <div
                className="ghwp-collapsible-toggle ghwp-accordion__item-title"
                data-ghwp-pretty-name={prettyName}
            >
                <span className="ghwp-accordion__item-title-text">
                    <RichText.Content value={heading} />
                    {hasSubtitle && (
                        <span className="ghwp-collapsible-subtitle">
                            {subtitle}
                        </span>
                    )}
                </span>
                <hr className="ghwp-accordion__item-title-line" />
                <span className="ghwp-accordion__item-title-arrow" />
            </div>

            {!!(innerBlocks.length || inner) && (
                <div
                    className="ghwp-collapsible-panel ghwp-accordion__item-content"
                    aria-hidden={initiallyOpen}
                >
                    <InnerBlocks.Content />
                </div>
            )}
        </div>
    );
};
