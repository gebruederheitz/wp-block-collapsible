const OPEN_STATE_MODIFIER = 'is-open';

export class Collapsible {
    /**
     * @param {string} selector - selector for collapsible elements
     * @param {string} selectorToggle - selector for collapsible toggle
     * @param {string} selectorPanel - selector for collapsible content
     */

    static factory({
        selector = '.ghwp-collapsible',
        selectorToggle = '.ghwp-collapsible__toggle',
        selectorPanel = '.ghwp-collapsible__panel',
    } = {}) {
        document.querySelectorAll(selector).forEach((item) => {
            const toggle = item.querySelector(selectorToggle);
            const panel = item.querySelector(selectorPanel);
            new Collapsible(item, toggle, panel);
        });
    }

    /**
     * @type {boolean}
     */
    isOpen = false;

    /**
     * @type {Element}
     */
    container;

    /**
     * @type {Element}
     */
    button;

    /**
     * @type {Element}
     */
    panel;

    /**
     * @param {Element} container
     * @param {Element} toggle
     * @param {?Element} panel
     */
    constructor(container, toggle, panel) {
        this.container = container;
        this.panel = panel;

        if (!panel) return;

        if (
            this.container.classList.contains(OPEN_STATE_MODIFIER) &&
            panel.getAttribute('aria-hidden') !== 'true'
        ) {
            this.isOpen = true;
        }

        this._init(toggle);
        this._listen();
    }

    /**
     * @param {Element} toggle
     * @private
     */
    _init(toggle) {
        const button = document.createElement('BUTTON');
        button.classList.add('ghwp-collapsible__button');
        button.setAttribute('aria-expanded', this.isOpen);
        button.innerHTML = toggle.innerHTML;

        Array.from(toggle.childNodes).forEach((node) => node.remove());
        toggle.appendChild(button);

        this.button = button;
    }

    _listen() {
        this.button.addEventListener('click', this._onClick);
    }

    _onClick = () => {
        this.isOpen = !this.isOpen;

        this.button.setAttribute('aria-expanded', this.isOpen);
        this.panel.setAttribute('aria-hidden', !this.isOpen);

        const method = this.isOpen ? 'add' : 'remove';
        this.container.classList[method](OPEN_STATE_MODIFIER);
    };
}
