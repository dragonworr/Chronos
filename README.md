![Chronos logo](https://raw.githubusercontent.com/Chronos2-0/Chronos/master/app/assets/logo2.png)
## Chronos
Microservice communication and health visualizer.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

```js
const cmd = require('chronos-microservice-debugger3')
cmd.propagate()

app.use('/', cmd.microCom('microserviceName', 'databaseType', 'databaseURL', 'wantMicroHealth', 'queryFrequency'))
```

## Features

  * HTTP request tracing
  * Speed and latency tracking
  * Process monitoring
  * Memory usage

## Installation

Chronos consists of a [Node](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/) and a lightweight [Electron](https://electronjs.org/) desktop application.

To begin, install the [Chronos](https://www.npmjs.com/package/chronos-microservice-debugger3) node module within each microservice of your application using the
[`npm install`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)command:

```bash
$ npm install chronos-microservice-debugger3
```

Once installed, place the following two lines in the microservice's server file before requiring 'express':
```javascript
const cmd = require('chronos-microservice-debugger3');
cmd.propagate();
```

Then add a route handler for all incoming requests:
```js
app.use('/', cmd.microCom('microserviceName', 'databaseType', 'databaseURL', 'wantMicroHealth', 'queryFrequency'))
```

The cmd.microCom handler function logs communication and health data to a user-provided database. This is to ensure that your private data stays private. We currently support MongoDB and SQL/PostgreSQL databases.

cmd.microCom takes four parameters and an optional fifth parameter. You can enter the arguments as individual strings or as an array.

The parameters are:
1. microserviceName: To identify the microservice (i.e. "payments")
2. databaseType: Enter either "mongo" or "sql"
3. databaseURL: Enter the URL of your database
4. wantMicroHealth: Do you want to monitor the health of this microservice? Enter "yes" or "no"
5. queryFrequency (optional): How frequently do you want the log the health of this microservice? It defaults to every minute, but you can choose:
  * "s" : every second
  * "m" : every minute (default)
  * "h" : every hour
  * "d" : once per day
  * "w" : once per week

String parameter example:
```javascript
app.use('/', cmd.microCom('payments', 'mongo', 'mongodb+srv://user:password@cluster0-abc.mongodb.net/','yes','h'))
```

Array parameter example:
```javascript
let values = [
  'payments',
  'mongo',
  'mongodb+srv://user:password@cluster0-abc.mongodb.net/',
  'yes',
  'h'
]

app.use('/', cmd.microCom(values)
```

## Contributing

Chronos hopes to inspire an active community of both users and developers. For questions, comments, or contributions, please submit a pull request.

## People

[List of all contributors](https://github.com/Chronos2-0/Chronos/graphs/contributors)

## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/chronos-microservice-debugger3.svg
[npm-url]: https://www.npmjs.com/package/chronos-microservice-debugger3
[downloads-image]: https://img.shields.io/npm/dm/chronos-microservice-debugger3.svg
[downloads-url]: https://npmjs.org/package/chronos-microservice-debugger3
