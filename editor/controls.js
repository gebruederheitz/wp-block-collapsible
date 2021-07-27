import classnames from 'classnames';
import { blockEditor, components, i18n } from 'wp';

import {
    TextFields as SubtitleIcon,
    UnfoldMore as UnfoldIcon,
} from '@gebruederheitz/wp-editor-components/dist/icons';
import { InputWithIcon } from '@gebruederheitz/wp-editor-components';

const { BlockControls, InspectorControls } = blockEditor;
const {
    Fill,
    IconButton,
    TextControl,
    ToggleControl,
    Toolbar: WPToolbar,
} = components;
const { __ } = i18n;

export const controls = (props) => {
    const initiallyOpenLabel = __('Initially open panel', 'ghwp');
    const showSubtitleLabel = __('Show subtitle', 'ghwp');

    const {
        attributes: { hasSubtitle, initiallyOpen, prettyName },
        isSelected,
        setAttributes,
    } = props;

    return (
        <>
            <InspectorControls>
                <div
                    className="ghwp-inspector-section"
                    style={{ marginTop: '1.5rem' }}
                >
                    <InputWithIcon
                        component={ToggleControl}
                        icon={UnfoldIcon}
                        label={initiallyOpenLabel}
                        checked={initiallyOpen}
                        attributeName="initiallyOpen"
                        setAttributes={setAttributes}
                    />
                    <InputWithIcon
                        component={ToggleControl}
                        icon={SubtitleIcon}
                        label={showSubtitleLabel}
                        checked={hasSubtitle}
                        attributeName="hasSubtitle"
                        setAttributes={setAttributes}
                    />
                </div>
            </InspectorControls>
            <BlockControls>
                <WPToolbar>
                    <IconButton
                        className={classnames(
                            'components-icon-button components-toolbar__control',
                            { 'is-active': initiallyOpen }
                        )}
                        icon={<UnfoldIcon />}
                        label={initiallyOpenLabel}
                        aria-pressed={initiallyOpen}
                        onClick={() => {
                            setAttributes({
                                initiallyOpen: !initiallyOpen,
                            });
                        }}
                    />
                    <IconButton
                        className={classnames(
                            'components-icon-button components-toolbar__control',
                            { 'is-active': hasSubtitle }
                        )}
                        icon={<SubtitleIcon />}
                        label={showSubtitleLabel}
                        aria-pressed={hasSubtitle}
                        onClick={() => {
                            setAttributes({
                                hasSubtitle: !hasSubtitle,
                            });
                        }}
                    />
                </WPToolbar>
            </BlockControls>
            {isSelected && (
                <Fill name="InspectorAdvancedControls">
                    <TextControl
                        label={__('Custom Anchor', 'ghwp')}
                        value={prettyName}
                        onChange={(prettyName) => {
                            setAttributes({ prettyName });
                        }}
                    />
                </Fill>
            )}
        </>
    );
};
