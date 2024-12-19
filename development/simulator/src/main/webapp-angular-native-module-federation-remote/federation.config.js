const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'webapp-angular-native-module-federation-remote',

  exposes: {
    './Component': './src/app/app.component.ts', // TODO: we dont need the component routed
    './Routes': './src/app/app.routes.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),

    "chart.js/auto": {
      singleton: true,
      requiredVersion: "auto",
    },
    "primeng/resources": {
      singleton: true,
      requiredVersion: "auto",
    },
    "@angular/cdk": {
      singleton: true,
      requiredVersion: "auto",
      strictVersion: true,
    }

  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',

    // exclude node specific libraries
    "@softarc/native-federation-node",
    "fs",
    "path",
    "url",
    "node:module",
    "node:url",
    "node:fs/promises",
    "node:path"

  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

});
