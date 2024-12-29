const {withNativeFederation, shareAll} = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

      name: 'webapp-ng-nmf-remote',
      exposes: {
        // './Routes': './src/app/app.routes.ts', // sub routes for Module Federation
        './web-components': './src/bootstrap-as-webcomponent.ts', // Web Components for Native Federation
      },
      shared: {
        ...shareAll({singleton: true, strictVersion: true, requiredVersion: 'auto'}),
      },
      skip: [
        'rxjs/ajax',
        'rxjs/fetch',
        'rxjs/testing',
        'rxjs/webSocket',
        // Add further packages you don't need at runtime
      ]
      // Please read our FAQ about sharing libs:
      // https://shorturl.at/jmzH0

});
