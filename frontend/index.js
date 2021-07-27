export class CollapsibleFactory {
    /**
     * Show/hide element on click
     *
     * @param {string} selector - selector for collapsible elements
     * @param {string} selectorToggle - selector for collapsible toggle
     * @param {string} selectorPanel - selector for collapsible content
     */
    constructor({
        selector = '.ghwp-collapsible',
        selectorToggle = '.ghwp-collapsible-toggle',
        selectorPanel = '.ghwp-collapsible-panel',
    }) {
        this.selectorToggle = selectorToggle;
        this.selectorPanel = selectorPanel;

        const collapsibleElements = document.querySelectorAll(selector);
        Array.prototype.forEach.call(collapsibleElements, this.initItem);
    }

    initItem(collapsibleThis) {
        let toggle = collapsibleThis.querySelector(this.selectorToggle);
        let panel = collapsibleThis.querySelector(this.selectorPanel);

        toggle.innerHTML = `
            <button aria-expanded="false" class="ghwp-collapsible-toggle-button">
                ${toggle.innerHTML}
            </button>
            `;

        let btn = toggle.querySelector('button');

        const classes = Array.from(collapsibleThis.classList);
        const panelHasAriaAttribute = panel.hasAttribute('aria-hidden');
        if (
            !panelHasAriaAttribute &&
            classes.findIndex((el) => el === 'is-open') < 0
        ) {
            panel.setAttribute('aria-hidden', true);
        }

        btn.onclick = () => {
            let expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', !expanded);
            panel.setAttribute('aria-hidden', expanded);
            collapsibleThis.classList.toggle('is-open');
        };
    }
}
