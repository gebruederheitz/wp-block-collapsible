<?php
    $innerBlocks = get_query_var('innerBlocks');

    $heading = get_query_var('heading');
    $hasSubtitle = get_query_var('hasSubtitle');
    $initiallyOpen = get_query_var('initiallyOpen');
    $prettyName = get_query_var('prettyName');
    $subtitle = get_query_var('subtitle');
?>
<div class="ghwp-collapsible<?= $initiallyOpen ? ' is-open' : '' ?>">
    <div
        class="ghwp-collapsible__toggle"<?php
        if (!empty($prettyName)) echo ' data-ghwp-pretty-name="' . $prettyName . '"'; ?>
    >
        <span class="ghwp-collapsible__title">
            <?= $heading ?>
            <?php if ($hasSubtitle): ?>
                <span class="ghwp-collapsible__subtitle">
                    {subtitle}
                </span>
            <?php endif; ?>
        </span>
        <hr class="ghwp-collapsible__separator" />
        <span class="ghwp-collapsible__indicator"></span>
    </div>
    <?php if (!empty($innerBlocks)): ?>
        <div
            class="ghwp-collapsible__panel"
            aria-hidden="<?= $initiallyOpen === true ?>>"
        >
            <?= $innerBlocks ?>
        </div>
    <?php endif; ?>
</div>
