# WP Block: Collapsible

_A collapsible / accordion block for gutenberg_

---

## Installation

### All the JS bits via NPM

```shell
> npm i @gebruederheitz/wp-block-collapsible
```


### All the PHP bits via Composer

```shell
> composer require gebruederheitz/wp-block-collapsible
```


## Usage


### In the editor

```js
import Block from '@gebruederheitz/wp-block-collapsible';

Block.register();
```

You may provide custom attributes, methods / components etc.:
```js
import {register, attributes} from '@gebruederheitz/wp-block-collapsible';
import {MyIconComponent} from 'your/icon/components/path';

const customAttributes = {
    newAttr: {
        type: 'string',
        default: 'default value',
    },
    ...attributes,
};

const edit = ({attributes: {newAttr}}) => {
    return (
        <p>{newAttr}</p>
    );
};

register({
    attributes: customAttributes,
    edit,
    icon: <MyIconComponent />,
});

```

### On the frontend

You will need to add the initializer scripts to your frontend script bundle in
order for the block to work:

```js
import { Collapsible } from '@gebruederheitz/wp-block-collapsible';

// Find all collapsible blocks and initialize them
Collapsible.factory();
```



### Rendering the block's output

In all cases will need to register the block on the backend.

#### Dynamically through PHP

If you're using the "dynamic" save method (the default), you will also have to
provide a template to render the output. The composer parts of this library 
(`gebruederheitz/wp-block-collapsible`) will take care of that for you:

```php
new \Gebruederheitz\GutenbergBlocks\Collapsible\Collapsible();
```

You can override the default template by putting an alternative template file
into `wp-content/themes/your-theme/template-parts/blocks/collapsible.php`. Take
a look at [the original template](./template/collapsible.php) for some 
inspiration. Note that you might have to change the frontend scripts if you
change the block's markup.

#### "Statically" through Gutenberg's React

This library provides an alternative save method that removes the need for
dynamic processing of the block's content for each request by statically
rendering the markup at "publish time".

```js
import {register, saveStatic} from '@gebruederheitz/wp-block-collapsible';

register({
    save: saveStatic,
});
```

Naturally you can also provide your own static renderer component in place of
the pre-packaged one.


### Styling

You may use and extend the default styles and themes provided by this package in 
your (S)CSS:

```sass
// Your frontend SASS file

// Import the stylesheet
@use 'node_modules/@gebruederheitz/wp-block-collapsible/scss/collapsible';
// or one of the preconfigured themes
@use 'node_modules/@gebruederheitz/wp-block-collapsible/scss/theme-colorful';
@use 'node_modules/@gebruederheitz/wp-block-collapsible/scss/theme-grey-boxes';

```

```sass
// Your editor SASS file

// Import the stylesheet
@use 'node_modules/@gebruederheitz/wp-block-collapsible/scss/collapsible';
```

Or use the precompiled CSS files:
```html
<link 
  rel="stylesheet"
  href="/path/to/node_modules/@gebruederheitz/wp-block-collapsible/dist/collapsible.css"
/>
<!-- or a theme -->
<link 
  rel="stylesheet"
  href="/path/to/node_modules/@gebruederheitz/wp-block-collapsible/dist/theme-grey-boxes.css"
/>
```

#### Creating a custom theme

The SCSS stylesheets rely heavily on default SCSS variables to simplify theming.
One basic approach would be to modify the parameters for one of the existing
themes:

```scss
$my-theme-text-color: #101510;
$title-color: $my-theme-text-color;
$title-color: #333 !default;

@use 'node_modules/@gebruederheitz/wp-block-collapsible/scss/theme-grey-boxes' with (
    $title-color: $title-color,
    $title-font: null,
    $title-font-size: 1em,
    $title-text-transform: none,
    $subtitle-color: lighten($title-color, 0.3),
    $subtitle-font-size: 0.9em,
    $subtitle-font-weight: 400,
    $border-color: #eee,
    $indicator-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23c0c0c0' viewBox='0 0 27 15'%3E%3Cpath d='M14.313 14.361l12-12c.5-.5.5-1.2 0-1.7s-1.2-.5-1.7 0l-11.1 11.2-11.2-11.2c-.5-.5-1.2-.5-1.7 0-.2.2-.3.5-.3.8 0 .3.1.7.3.9l12 12a1.2 1.2 0 001.7 0z'/%3E%3C/svg%3E"),
    $toggle-hover-background: #eee,
);

@use 'node_modules/@gebruederheitz/wp-block-collapsible/scss/collapsible' with (
    $base-font-size: 1rem,

    $title-color: #4a4d4a,
    $title-hover-color: #0080c8,
    $title-active-color: #73b128,
    $title-font: null,
    $title-active-font: null,
    $title-font-size: 1.125em,
    $title-text-transform: uppercase,
    
    $subtitle-color: $title-color,
    $subtitle-font-size: null,
    $subtitle-font-weight: null,
    
    $show-line: true,
    $line-color: #e7e7e7,
    $line-thickness: 2px,
    $line-space: 1em,
    
    $indicator-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23a0a0a0' viewBox='0 0 27 15'%3E%3Cpath d='M14.313 14.361l12-12c.5-.5.5-1.2 0-1.7s-1.2-.5-1.7 0l-11.1 11.2-11.2-11.2c-.5-.5-1.2-.5-1.7 0-.2.2-.3.5-.3.8 0 .3.1.7.3.9l12 12a1.2 1.2 0 001.7 0z'/%3E%3C/svg%3E"),
    $indicator-hover-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230080c8' viewBox='0 0 27 15'%3E%3Cpath d='M14.313 14.361l12-12c.5-.5.5-1.2 0-1.7s-1.2-.5-1.7 0l-11.1 11.2-11.2-11.2c-.5-.5-1.2-.5-1.7 0-.2.2-.3.5-.3.8 0 .3.1.7.3.9l12 12a1.2 1.2 0 001.7 0z'/%3E%3C/svg%3E"),
    $indicator-active-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%2373b128' viewBox='0 0 27 15'%3E%3Cpath d='M14.313 14.361l12-12c.5-.5.5-1.2 0-1.7s-1.2-.5-1.7 0l-11.1 11.2-11.2-11.2c-.5-.5-1.2-.5-1.7 0-.2.2-.3.5-.3.8 0 .3.1.7.3.9l12 12a1.2 1.2 0 001.7 0z'/%3E%3C/svg%3E"),
    $indicator-width: 1.5em,
    $indicator-height: 0.8125em,
    $indicator-transform: none,
    $indicator-open-transform: rotate(180deg),
    
    $toggle-show-border: false,
    $toggle-border-color: $title-color,
    $toggle-border-width: 1px,
    $toggle-background: transparent,
    $toggle-hover-background: $toggle-background,
    $toggle-active-background: $toggle-background,
    
    $margin: 1em 0,
    $toggle-button-padding: 0.625em 0,
    
    $panel-border-color: $title-active-color,
    $panel-border-width: 2px,
    $panel-border-show-top: false,
    $panel-border-show-right: false,
    $panel-border-show-bottom: false,
    $panel-border-show-left: true,
    $panel-padding: 0 0 0 2em,
    $panel-open-margin: 2em 0 4em 0,
    $panel-max-height: 1080px,
);
```


## Development

### Dependencies

- PHP >= 7.3
- [Composer 2.x](https://getcomposer.org)
- [NVM](https://github.com/nvm-sh/nvm) and nodeJS LTS (v16.x) with npm
- Nice to have: GNU Make (or drop-in alternative)

### Quickstart

You can use the watch task:
```shell
$> npm run watch
# or
make
# or, more explicitly
make dev
```

After making your changes to scripts or styles, run
```bash
$> make
# or
$> make build
# or, more explicitly
$> nvm use            # Once, to make sure you're using the correct node version
$> npm run build
```
to create the stylesheets and ES-module bundles at `dist/`.

Run `make release` to publish a new version. `release-it` will guide you through
the process.

`make test` or `make lint` will lint all the source scripts and stylesheets.
