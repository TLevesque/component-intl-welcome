# Demonstration component 'Welcome' with locales

This is exampe library with support of internationalization according to
**[component approach](https://github.com/oklas/component-intl)**

This library exports a demonstration component **'Welcome'** which uses
[react-intl](https://github.com/yahoo/react-intl) internationalization
library. The component displays a simple form and displays a localized
sentence in the selected language. The sentence is reactively changing
in response to a change of the data in the form.

This demonstration component currently support `en`, `de`, `ru`, `zh` locales.

The localization data is in directory [./locales](./locales) in yaml
format according to component approach

To integrate localization data to application locale assets configure
the [webpack](https://webpack.js.org/) internationalization plugin
[intl-webpack-plugin](https://github.com/oklas/intl-webpack-plugin)
like this:

``` javascript
  var IntlPlugin = require("intl-webpack-plugin");
  module: {
    rules: [
      { test: /\.(intl)$/i,
        use: [
          IntlPlugin.loader(),
          'yaml-loader'
        ]
      }
    ]
  }
  plugins: [
    new IntlPlugin({})
  ]

```

And require internationalization entry point module somewhere in application:

``` javascript
import {} from 'component-intl-welcome/locales'
```

Now import component and put it on the page like this:

``` javascript
import React from 'react'

import Welcome from 'component-intl-welcome'
import {} from 'component-intl-welcome/locales'

const App = (props) => (
  <div>
    <h2>The "Welcome" component</h2>
    <Welcome/>
  </div>
)

```


To see example how to integrate this library component with locales into
application and how it works see

 * the running [demonstration application](https://oklas.github.io/component-intl-example/)

or its source code:

 * [component-intl-example](https://github.com/oklas/component-intl-example/)