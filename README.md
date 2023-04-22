# react-floating-label-textarea


[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
![minified size](https://badgen.net/bundlephobia/min/@krelsis/react-floating-label-textarea)
![minzipped size](https://badgen.net/bundlephobia/minzip/@krelsis/react-floating-label-textarea)

[![npm badge][npm-badge-png]][package-url]

# Forked from [cymen/react-floating-label-textarea](https://github.com/cymen/react-floating-label-textarea)
This fork was created as the original NPM package seems to be broken and is no longer being maintained, an [issue](https://github.com/cymen/react-floating-label-textarea/issues/2) was raised regarding the problem, but it has yet to be looked at.

# Typescript support
Typescript definitions have been included for convenience.

# Original Description

A floating label component for React. It inherits the font-size from the parent.

![react-floating-label-textarea](floating-label-textarea.gif)

Try it yourself at the [Storybook](http://blog.cymen.org/react-floating-label-textarea).

## Example

```jsx
import React from 'react';
import FloatingLabelTextarea from 'react-floating-label-textarea';

export default ({ onChange, value }) =>
  <div style={{ fontSize: 64 }}>
    <FloatingLabelTextarea
      id="example-3"
      label="label"
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      onFocus={action('onFocus')}
      value={value}
    />
  </div>;
```

## Props

| name         | optional | default    |
|--------------|----------|------------|
| className    | yes	  |            |
| fontSize     | yes      | inherit    |
| id           | no       |            |
| label        | no       |            |
| onBlur       | yes      |            |
| onChange     | no       |            |
| onFocus      | yes      |            |
| placeholder  | yes      | ''         |
| refs         | yes      |            |
| type         | yes      | text       |
| value        | yes      | ''         |

* `refs` is set as `ref` prop on `textarea`

## Dependencies

Peer dependencies:

* react
* styled-components

## License

[MIT](LICENSE)

[package-url]: https://npmjs.org/package/@krelsis/react-floating-label-textarea
[npm-badge-png]: https://nodei.co/npm/@krelsis/react-floating-label-textarea.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/@krelsis/react-floating-label-textarea.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/@krelsis/react-floating-label-textarea.svg
[downloads-url]: http://npm-stat.com/charts.html?package=@krelsis/react-floating-label-textarea
