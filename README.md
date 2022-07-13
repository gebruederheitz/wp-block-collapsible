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

You may use and extend the default styles provided by this package in your 
(S)CSS:
```sass
// Your frontend SASS file

// Import the stylesheet
@use 'node_modules/@gebruederheitz/wp-block-collapsible/scss/collapsible' with (
    $base-font-size: 1rem,

    $title-color: #4a4d4a,
    $title-hover-color: #0080c8,
    $title-active-color: #73b128,
    $title-font: null,
    $title-active-font: null,
    $title-font-size: 1.125em,
    $title-text-transform: uppercase,
    
    $line-color: #e7e7e7,
    $line-thickness: 2px,
    
    $indicator-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23a0a0a0' viewBox='0 0 27 15'%3E%3Cpath d='M14.313 14.361l12-12c.5-.5.5-1.2 0-1.7s-1.2-.5-1.7 0l-11.1 11.2-11.2-11.2c-.5-.5-1.2-.5-1.7 0-.2.2-.3.5-.3.8 0 .3.1.7.3.9l12 12a1.2 1.2 0 001.7 0z'/%3E%3C/svg%3E"),
    $indicator-hover-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230080c8' viewBox='0 0 27 15'%3E%3Cpath d='M14.313 14.361l12-12c.5-.5.5-1.2 0-1.7s-1.2-.5-1.7 0l-11.1 11.2-11.2-11.2c-.5-.5-1.2-.5-1.7 0-.2.2-.3.5-.3.8 0 .3.1.7.3.9l12 12a1.2 1.2 0 001.7 0z'/%3E%3C/svg%3E"),
    $indicator-active-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%2373b128' viewBox='0 0 27 15'%3E%3Cpath d='M14.313 14.361l12-12c.5-.5.5-1.2 0-1.7s-1.2-.5-1.7 0l-11.1 11.2-11.2-11.2c-.5-.5-1.2-.5-1.7 0-.2.2-.3.5-.3.8 0 .3.1.7.3.9l12 12a1.2 1.2 0 001.7 0z'/%3E%3C/svg%3E"),
    $indicator-width: 1.5em,
    $indicator-height: 0.8125em,
    
    $content-border-left: 2px solid $title-active-color,
);
```

```sass
// Your editor SASS file

// Import the stylesheet
@use 'node_modules/@gebruederheitz/wp-block-collapsible/scss/collapsible.editor';
```

Or use the precompiled CSS files:
```html
<link 
  rel="stylesheet"
  href="/path/to/node_modules/@gebruederheitz/wp-block-collapsible/dist/collapsible.css"
/>
<link 
  rel="stylesheet"
  href="/path/to/node_modules/@gebruederheitz/wp-block-collapsible/dist/collapsible.editor.css"
/>
```
