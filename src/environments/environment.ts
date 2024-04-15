// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:4200',
  tableRowsToDisplay: 10,
  firebase: {
    apiKey: "AIzaSyC9ldDFOIdEhWWvGc1BUONCRm7NrYBf1CY",
    authDomain: "demoapp-68775.firebaseapp.com",
    projectId: "demoapp-68775",
    storageBucket: "demoapp-68775.appspot.com",
    messagingSenderId: "517147117554",
    appId: "1:517147117554:web:1bebc227896455f2094d6b",
    measurementId: "G-M2FRTVZZZK",
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
