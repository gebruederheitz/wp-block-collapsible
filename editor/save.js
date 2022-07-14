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
                'ghwp-collapsible',
                {
                    'is-open': initiallyOpen,
                },
            ])}
        >
            <div
                className="ghwp-collapsible__toggle"
                data-ghwp-pretty-name={prettyName}
            >
                <span className="ghwp-collapsible__title">
                    <RichText.Content value={heading} />
                    {hasSubtitle && (
                        <span className="ghwp-collapsible__subtitle">
                            {subtitle}
                        </span>
                    )}
                </span>
                <hr className="ghwp-collapsible__separator" />
                <span className="ghwp-collapsible__indicator" />
            </div>

            {!!(innerBlocks.length || inner) && (
                <div
                    className="ghwp-collapsible__panel"
                    aria-hidden={!initiallyOpen}
                >
                    <InnerBlocks.Content />
                </div>
            )}
        </div>
    );
};
