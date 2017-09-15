# La Piscine

Main boilerplate for the next first french BTC VIP club.

## Features

* [Universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9#.aug1ngj77) rendering with async data fetching.
* [React](https://facebook.github.io/react/) as the view.
* [React Router v4](https://reacttraining.com/react-router/) as the router.
* [Redux](https://github.com/reactjs/redux)'s futuristic [Flux](https://facebook.github.io/react/blog/2014/05/06/flux.html) implementation.
* [Express](https://expressjs.com/) server.
* [Webpack 3](https://webpack.js.org/) for bundling and [**"Tree-Shaking"**](https://webpack.js.org/guides/tree-shaking/) support.
* [Babel](https://babeljs.io/) for ES6 and ES7 transpiling.
* [React Hot Loader 3](https://github.com/gaearon/react-hot-loader) to tweak React components in real time.
* [nodemon](https://nodemon.io/) to monitor for any changes in your node.js application and automatically restart the server.
* [axios](https://github.com/mzabriskie/axios) for universal data fetching/rehydration on the client.
* [redux-thunk](https://github.com/gaearon/redux-thunk) as the middleware to deal with asynchronous action.
* [react-router-redux](https://github.com/reactjs/react-router-redux) to keep your router in sync with Redux state.
* [react-helmet](https://github.com/nfl/react-helmet) to manage title, meta, styles and scripts tags on both server and client.
* [webpack-isomorphic-tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools) to allow require() work for statics both on client and server.
* [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware) serves the files emitted from webpack over the Express server.
* [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware) allows you to add hot reloading into the Express server.
* [morgan](https://github.com/expressjs/morgan) the HTTP request logger for server side debugging.
* [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension) for next generation developer experience.
* [Flow](https://flowtype.org/) as the static type checker for javascript.
* [ESLint](http://eslint.org/) to maintain a consistent javascript code style (Airbnb's code style).
* [StyleLint](http://stylelint.io/) to maintain a consistent css/scss code style.
* CSS and SASS support with [PostCSS](https://github.com/postcss/postcss-loader) for advanced transformations (e.g. autoprefixer). [CSS modules](https://github.com/css-Modules/css-Modules) enabled.
* Image (with [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader) for optimizing) and Font support.
* Split vendor's libraries from client bundle.
* No other view engines, just javascript based HTML rendering component.
* Shared app config between development and production.
* 404 error page and redirect handling.
* Integrate [Jest](https://facebook.github.io/jest/) with [enzyme](https://github.com/airbnb/enzyme) as the solution for writing unit tests with code coverage support.
* [Yarn](https://yarnpkg.com/lang/en/) as the package manager.

## Requirements

* [node](https://nodejs.org/en/) >= 5.0
* [npm](https://www.npmjs.com/) >= 3.0

## Getting Started

**1. You can start by clone the repository on your local machine by running:**

```bash
git clone https://github.com/LeoDps/lapiscine.git
cd lapiscine
```

**2. Install all of the dependencies:**

```bash
yarn install
```

**3. Start to run it:**

```bash
yarn start    # For development, see production parts below
```

Now the app should be running at [http://localhost:3000/](http://localhost:3000/)

## NPM Script Commands

I use [better-npm-run](https://github.com/benoror/better-npm-run) to manage the scripts in a better way, which also provides the compatibility of cross-platform. All of the scripts are listed as following:

`yarn <script>`|Description
------------------|-----------
`start`|Run your app on the development server at `localhost:3000`. HMR will be enabled.
`start:production`|Bundles the app to `./build` and run it on the production server at `localhost:8080`.
`start:prod`|Run your app on the production server only at `localhost:8080`.
`build`|Remove the previous client and server bundled stuff and bundle them to `./build`.
`build:client`|Remove the previous client bundled stuff and bundle it to `./build/public/assets`.
`build:server`|Remove the previous server bundled stuff and bundle it to `./build`.
`lint`|Lint all `.js` and `.scss` files.
`lint:js`|Lint all `.js` files.
`lint:style`|Lint all `.scss` files.
`flow`|Run type checking for `.js` files.
`test`|Run testing once (with code coverage reports).
`test:watch`|Run testing on every test file change.
`clean:all`|Remove the client/server bundled stuff and the coverage report.
`clean:client`|Remove the `./build/public/assets` folder to clean the client bundled stuff.
`clean:server`|Remove the server bundled stuff from the `./build` folder.
`clean:test`|Remove the `./coverage` folder to clean the code coverage report.

## Overview
### Adding Routes

This starter use [React Router v4](https://reacttraining.com/react-router/) library to manage our routes. You can setup your routes in `./src/routes.js`. For example:

```javascript
import MyRouteComponent from './containers/MyRouteComponent';

// ...

export default [
  {
    // Define your route path
    path: '/myPath',
    // If the route matches the location.pathname exactly or not (used for index route usually)
    exact: true,
    // Add your route component here
    component: MyRouteComponent,
    // Add your sub route component here
    routes: [
      {
        path: '/myPath/mySubPath',
        component: MySubRouteComponent
      }
    ]
    // ...
  },
  // Setup other routes...
];
```

### Managing Title, Meta, Styles and Scripts

The parent `App.js` defines the base title and meta in a `<Helmet {...config.app} />` component. Any sub-component can override/add properties (supports meta, link, script, style tags and html attributes). See the [react-helmet](https://github.com/nfl/react-helmet) documents for more info.

### Styles

The starter supports CSS, SASS and [CSS modules](https://github.com/css-Modules/css-Modules) is enabled by default. I use [PostCSS](https://github.com/postcss/postcss-loader) plugin to parse CSS and add autoprefixer to your stylesheet. You can access your stylesheet with two ways.

With CSS modules:

```javascript
import styles from './styles.scss';

// ...

render() {
  return (
    <div className={styles.myClass}>   // The className matches one of CSS classes in your SCSS file
      <Helmet title="Home" />
      {this.renderUserList()}
    </div>
  );
}
```

Without CSS modules (you need to turn off CSS modules from `./tools/webpack/config.js`):

```javascript
import './styles.scss';

// ...

render() {
  return (
    <div className="myClass">    // Use the CSS class as normal
      <Helmet title="Home" />
      {this.renderUserList()}
    </div>
  );
}
```

By the way, if you want to use your based style or a vendor CSS framework, just import it through the `./src/containers/App/index.js` file, for example:

```javascript
import '../../theme/normalize.css';   // Import a vendor stylesheet here
import styles from './styles.scss';   // Import your based stylesheet here

export default routes => {

  // ...

};
```

### Styles

The starter supports CSS, SASS and [CSS modules](https://github.com/css-Modules/css-Modules) is enabled by default. I use [PostCSS](https://github.com/postcss/postcss-loader) plugin to parse CSS and add autoprefixer to your stylesheet. You can access your stylesheet with two ways.

With CSS modules:

```javascript
import styles from './styles.scss';

// ...

render() {
  return (
    <div className={styles.myClass}>   // The className matches one of CSS classes in your SCSS file
      <Helmet title="Home" />
      {this.renderUserList()}
    </div>
  );
}
```

Without CSS modules (you need to turn off CSS modules from `./tools/webpack/config.js`):

```javascript
import './styles.scss';

// ...

render() {
  return (
    <div className="myClass">    // Use the CSS class as normal
      <Helmet title="Home" />
      {this.renderUserList()}
    </div>
  );
}
```

By the way, if you want to use your based style or a vendor CSS framework, just import it through the `./src/containers/App/index.js` file, for example:

```javascript
import '../../theme/normalize.css';   // Import a vendor stylesheet here
import styles from './styles.scss';   // Import your based stylesheet here

export default routes => {

  // ...

};
```

For the better development experience, don't forget to include those files in the `./src/utils/Html.js`, for example:

```javascript
// ...

  {
    _.keys(assets.styles).length === 0 ?
      <style
        dangerouslySetInnerHTML={{ __html:
          // Include the vendor CSS framework and your own style here
          require('../theme/normalize.css')._style +
          require('../containers/App/styles.scss')._style +
          // Other styles...
        }}
      />
      : null
  }

// ...
```

### Image and Font

It's super easy to render the image and font both on client and server, the usage would be like below.

Using image:

```javascript
// Require an image
<img src={require('./assets/logo.svg')} alt="Logo" role="presentation" />
```

Using font-awesome:

```javascript
// With CSS modules
import styles from './styles.scss';

// ...

return (
  <div>
    <div><i className={styles.iconUser}></i> Welly</div>
  </div>
);

// Without CSS modules
import './font-awesome.css';

// ...

return (
  <div>
    <div><i className="fa fa-user"></i> Welly</div>
  </div>
);

```

For using CSS modules, you have to set the proper font path in your scss/sass file:

```
$fa-font-path:"../node_modules/font-awesome/fonts";
@import "../node_modules/font-awesome/scss/font-awesome";
.icon-user {
  @extend .fa;
  @extend .fa-user;
}
```

## Production

**1. Init app dependencies and install app:**

```bash
apt-get update -y
apt-get install -y git curl
curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh
nano nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt-get install nodejs
sudo apt-get install build-essential
sudo npm -g yarn
git clone https://github.com/LeoDps/lapiscine.git
cd lapiscine
```
**2. Setting up NGINX:**

```bash
apt-get update -y
apt-get install nginx
sudo nano /etc/nginx/sites-available/default
```
> Change the following line :
server_name _
And add this script on the location / {} block to enable reverse proxying
location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
}

**2.1 Testing NGINX syntax is ok and reload service:**
```bash
sudo nginx -t
sudo systemctl reload nginx
```

**3 Config app:**
```bash
yarn
vim package.json
```

> Change start:prod better-npm-scripts as you like

```bash
vim src/config/default.js
```
> Change logs path

**4 Run app:**
```bash
sudo npm install -g pm2
pm2 start npm --name "La Piscine" -- run start:production
pm2 startup systemd
```

**5 Monitor app:**
```bash
pm2 monit
```


