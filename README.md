# ignored-loader for webpack

## Usage

if you don't want webpack build some modules, especially run in node, thus you can use ignored-loader.
``` javascript
var css = require('./index.scss');

// config your webpack config
{
    loader: "ignored-loader",
    test: /\.scss$/
}
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
