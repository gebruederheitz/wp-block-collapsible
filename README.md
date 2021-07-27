# WP Block: Skeleton

_A skeleton for a quick gutenberg block module setup._

---

## Installation

```shell
> npm i @gebruederheitz/wp-block-skeleton
```

## Usage

### Skeleton

The simplest way to use the skeleton is with `degit`, which will clone this 
repository's contents while uncoupling it from git (so you can initialize a new
one without fuss):

```shell
> npx degit @gebruederheitz/wp-block-skeleton ./wp-block-example
> cd wp-block-example
> git init 
```



Don't forget to:
 - delete this section and complete the Readme
 - change the package name in `package.json`
 - remove the hash from the script name at `pkg.scripts.#prepublishOnly`
 - change the repository URLs in `package.json` (`repository.url`, `bugs`, `homepage`)
 - check the licence
 - check whether you need all the dependencies

### In the editor

```js
import Block from '@gebruederheitz/wp-block-skeleton';

Block.register();
```

You may provide custom attributes, methods / components etc.:
```js
import {register, attributes} from '@gebruederheitz/wp-block-skeleton';
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

```js
import { BlockFactory } from '@gebruederheitz/wp-block-skeleton';

new BlockFactory();
```



### Rendering the block's output

You will need to register the block on the backend and provide a template to 
render the output. The composer library `gebruederheitz/wp-block-xxx`
will take care of that for you.


### Data supplied by the backend

The block expects some data to be present on the global window object, which 
need to be supplied by the WP backend. Again, the composer library 
`gebruederheitz/wp-block-xxx` does that out of the box.

```js
window.editorData = {
    restCustomUrl: 'string', // REST API URL for the image Sideloader
    restApiNonce: 'string',  // The API nonce for request validation (CSRF/XSS)
    embedTypes: [], // An array of possible embed types when used with a consent management solution. Pass `null` to skip.
}
```

### Styling

You may use and extend the default styles provided by this package in your 
(S)CSS:
```sass
// Your frontend SASS file

// Import the stylesheet
@use 'node_modules/@gebruederheitz/wp-block-skeleton/scss/skeleton' with (
  $variable: 'value',
);
```

```sass
// Your editor SASS file

// Import the stylesheet
@use 'node_modules/@gebruederheitz/wp-block-skeleton/scss/skeleton.editor';
```

Or use the precompiled CSS files:
```html
<link 
  rel="stylesheet"
  href="/path/to/node_modules/@gebruederheitz/wp-block-skeleton/dist/skeleton.css"
/>
<link 
  rel="stylesheet"
  href="/path/to/node_modules/@gebruederheitz/wp-block-skeleton/dist/skeleton.editor.css"
/>
```
