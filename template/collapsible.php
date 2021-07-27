<?php
    $heading = get_query_var('heading');
    $hasSubtitle = get_query_var('hasSubtitle');
    $initiallyOpen = get_query_var('initiallyOpen');
    $prettyName = get_query_var('prettyName');
    $subtitle = get_query_var('subtitle');
    $innerBlocks = get_query_var('innerBlocks');
?>
<div class="ghwp-collapsible ghwp-accordion__item<?= $initiallyOpen ? 'is-open' : '' ?>">
    <div
        class="ghwp-collapsible-toggle ghwp-accordion__item-title"
        data-ghwp-pretty-name={prettyName}
    >
        <span class="ghwp-accordion__item-title-text">
            <?= $heading ?>
            <?php if ($hasSubtitle): ?>
                <span class="ghwp-collapsible-subtitle">
                    {subtitle}
                </span>
            <?php endif; ?>
        </span>
        <hr class="ghwp-accordion__item-title-line" />
        <span class="ghwp-accordion__item-title-arrow"></span>
    </div>
    <?php if (!empty($innerBlocks)): ?>
        <div
            class="ghwp-collapsible-panel ghwp-accordion__item-content"
            aria-hidden=<?= $initiallyOpen === true ?>>
        >
            <?= $innerBlocks ?>
        </div>
    <?php endif; ?>
</div>
