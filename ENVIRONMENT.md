# Environment Settings
Environment settings like Firebase configuration information is defined in a local .env file.  Copy the .env.example to start and replace the values with the correct information. Do not include the .env into Git as you will replace other developer's .env file.
 
The .env.example file is used during the launch of the app to ensure that all the environment variables have been set.  If you define a new environment variable, add it to the .env.example file.  If the environment variable is not available, the following exception will be thrown upon startup of the app.

```
/Users/steve/Projects/storysimple/node_modules/dotenv-safe/index.js:32
            throw new Error('Missing environment variables: ' + missing.join(', '));
            ^

Error: Missing environment variables: SHIZZLE_URL
    at Object.config (/Users/steve/Projects/storysimple/node_modules/dotenv-safe/index.js:32:19)
    at new DotenvPlugin (/Users/steve/Projects/storysimple/node_modules/webpack-dotenv-plugin/index.js:12:10)
    at Object.<anonymous> (/Users/steve/Projects/storysimple/webpack.config.dev.js:17:5)
    at Module._compile (module.js:573:32)
    at Object.Module._extensions..js (module.js:582:10)
    at Module.load (module.js:490:32)
    at tryModuleLoad (module.js:449:12)
    at Function.Module._load (module.js:441:3)
    at Module.require (module.js:500:17)
    at require (internal/module.js:20:19)
Waiting for the debugger to disconnect...
```
 
 Variables set in the .env file are available in the app via `process.env`.
 
**NOTE:** Externally set environment variables will override vars set in .env.

## Stage Environment
```
FIREBASE_API_KEY="AIzaSyBfnkq1M5bqKdXEQVLvBQ5s94MXx2w_8fA"
FIREBASE_AUTH_DOMAIN="storysimple-stage.firebaseapp.com"
FIREBASE_DATABASE_URL="https://storysimple-stage.firebaseio.com"
FIREBASE_STORAGE_BUCKET="storysimple-stage.appspot.com"
FIREBASE_MESSAGING_SENDER_ID="144748577825"
SHIZZLE_URL="http://stage-api.storysimple.com:8080"
