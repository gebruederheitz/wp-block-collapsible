<?php

namespace Gebruederheitz\GutenbergBlocks\Collapsible;

use Gebruederheitz\GutenbergBlocks\BlockRegistrar;
use Gebruederheitz\GutenbergBlocks\DynamicBlock;

class Collapsible
{
    /** @var DynamicBlock */
    protected $blockHandler;

    /**
     * @var array<string, array<string, mixed>>
     */
    protected const ATTRIBUTES = [
        'heading' => [
            'type' => 'string',
        ],
        'hasSubtitle' => [
            'type' => 'boolean',
            'default' => false,
        ],
        'inner' => [
            'type' => 'array',
        ],
        'initiallyOpen' => [
            'type' => 'boolean',
            'default' => false,
        ],
        'prettyName' => [
            'type' => 'string',
            'default' => '',
        ],
        'subtitle' => [
            'type' => 'string',
            'default' => '',
        ],
    ];

    protected const REQUIRED_ATTRIBUTES = ['heading'];

    public function __construct()
    {
        BlockRegistrar::getInstance();
        $this->blockHandler = new DynamicBlock(
            'ghwp/collapsible',
            __DIR__ . '/../template/collapsible.php',
            self::ATTRIBUTES,
            self::REQUIRED_ATTRIBUTES,
            'template-parts/blocks/collapsible.php',
        );
        $this->blockHandler->register();
    }
}
