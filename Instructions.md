# Crear estructura del proyecto 

- tests
- public
    - index.html
- src
    - App.js
    - index.js
- .babelrc
- .gitignore
- package.json
- webpack.config.js

## Iniciar nuestro archivo ***package.json***

    $ npm init -y

## Instalar dependencias de webpack en dev

    $ npm i --save-dev webpack webpack-dev-server webpack-cli

## Instalar dependencias de babel en dev

    $ npm i --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader

## Instalar dependencias de archivos (css, img, etc)

    $ npm i --save-dev html-webpack-plugin mini-css-extract-plugin clean-webpack-plugin css-loader node-sass sass-loader file-loader style-loader url-loader 

## Instalar dependencias de React (stable) 18

    $ npm i --save react react-dom

## Agregar en el archivo .babelrc

    {
        "presets": [
            "@babel/preset-env",
            "@babel/preset-react"
        ]
    }

## Agregar al archivo .gitignore

    # Created by https://www.toptal.com/developers/gitignore/api/react
    # Edit at https://www.toptal.com/developers/gitignore?templates=react

    ### react ###
    .DS_*
    *.log
    logs
    **/*.backup.*
    **/*.back.*

    node_modules
    bower_components

    *.sublime*

    psd
    thumb
    sketch

    # End of https://www.toptal.com/developers/gitignore/api/react

## Aregar al archivo index.html

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
    </html>

## Agregar al archivo webpack.config.js

Agregar los import de las dependencias en el ***webpack.config.js***:
```javascript
    const { CleanWebpackPlugin } = require('clean-webpack-plugin');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
    const path = require('path');
```

Export modulo en el ***webpack.config.js***:
```javascript
    module.exports = {}
```

Definir "entry" en el ***webpack.config.js***
```javascript
    module.exports = {
        ...
        entry: path.resolve(__dirname, './src/index.js'),
        ...
    }
```
Definir "output" en el ***webpack.config.js***
```javascript
    module.exports = {
        ...
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].bundle.js',
            publicPath: '/'
        },
        ...
    }
```

Definir "rules" en el ***webpack.config.js***
- Agregar Regla para babel
```javascript
    module.exports = {
        ...
        module: {
            rules: [
                ...
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                ...
            ]
        }
        ...
    }
```
- Agregar Regla para imagenes
```javascript
    module.exports = {
        ...
        module: {
            rules: [
                ...
                {
                    test: /\.(jpe?g|png|gif|svg)$/,
                    use: {
                        loader: 'url-loader'
                    }
                },
                ...
            ]
        }
        ...
    }
```
- Agregar Regla para archivos css o sass
```javascript
    module.exports = {
        ...
        module: {
            rules: [
                ...
                {
                    test: /\.(css|scss)$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
                },
                ...
            ]
        }
        ...
    }
```

Definir "resolve" en el ***webpack.config.js***
```javascript
    module.exports = {
        ...
        resolve: {
            extensions: ['*', '.js', '.jsx']
        }
        ...
    }
```

Definir "devServer" en el ***webpack.config.js***
```javascript
    module.exports = {
        ...
        devServer: {
            allowedHosts: 'all',
            compress: true,
            port: 3000,
            open: true,
            hot: true
        }
        ...
    }
```

Definir "plugins" en el ***webpack.config.js***
```javascript
    module.exports = {
        ...
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './public/index.html'),
                filename: 'index.html'
            }),
            new MiniCssExtractPlugin({
                filename: 'style.css'
            }),
            new CleanWebpackPlugin()
        ]
        ...
    }
```

Configurar "scripts" en el ***package.json***
```json
    {
        ...
        "scripts": {
            ...
            "start": "webpack serve --config ./webpack.config.js --mode development",
            "build": "webpack --mode production",
            ...
        }
        ....
    }

```
## Incluir codigo en el ***./src/index.js***

```javascript
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App';

    const container = document.querySelector('#root');
    ReactDOM.createRoot(container).render(<App />)

```

## Incluir en el ***./src/App.js***
```javascript
import React from 'react';

const App = () => {
    return (
        <h1>REACT APP</h1>
    )
}

export default App;

```


## Instalar "Jest" para pruebas unitarias (opcional)

    $ npm i --save-dev jest

Configurar "scripts" en el ***package.json***
```json
    {
        ...
        "scripts": {
            ...
            "test": "jest --watchAll"
            ...
        }
        ....
    }
```

## Instalar "Bootstrap" (opcional)

    $ npm i --save bootstrap@5.1

Configurar bootstrap en el ***index.js***
```javascript
    import 'bootstrap/dist/css/bootstrap.min.css'; // CSS
    import 'bootstrap/dist/js/bootstrap.bundle'; // JS
```
