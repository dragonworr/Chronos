<a href="https://chronoslany.com/">
    <img src="./app/assets/animated_logo.gif" alt="Chronos" title="Chronos" align="center" height="500" />
</a>


#
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/open-source-labs/Chronos)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Release: 4.0](https://img.shields.io/badge/Release-4.0-orange)
![Build Passing](https://img.shields.io/badge/build-passing-brightgreen)

# Chronos 

### :star: Star us on GitHub — it helps! :star:

Chronos is a comprehensive developer tool that monitors the health and web traffic of servers, microservices, and containers. Install the Chronos NPM package in your application to see real-time data monitoring and receive automated notifications over Slack or email.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Branches](#branches)
    - [Master](#master)
    - [Middleware](#middleware)
    - [Microservices](#microservices)
    - [Docker](#docker)
    - [ChronosWebsite](#chronoswebsite)
    - [Others](#others)
- [Installation](#installation)
    1. [Pre-Installation](#1.-pre-installation)
    2. [Install Dependencies](#2.-install-dependencies)
    3. [Configure Chronos](#3.-configure-chronos)
    4. [Initialize Chronos](#4.-initialize-chronos)
- [Notifications](#notifications)
    - [Slack](#slack)
    - [Email](#email)
- [Stack](#stack)
- [License](#license)

#
###### Return to [Top](#Chronos)
<br>

## Features 

- Distributed tracing enabled across microservices applications
- Supports <img src="./app/assets/http-logo-color.png" alt="HTTP" title="HTTP" align="center" height="20" /> and <img src="./app/assets/grpc-logo-color.png" alt="gRPC" title="gRPC" align="center" height="20" /> protocols
- Compatible with <img src="./app/assets/graphql-logo-color.png" alt="GraphQL" title="GraphQL" align="center" height="20" />
- Provides <img src="./app/assets/docker-logo-color.png" alt="Docker" title="Docker" align="center" height="20" /> container stats (e.g. ID, memory usage %, CPU usage %, running processes, etc.)
- Supports <img src="./app/assets/postgres-logo-color.png" alt="PostgreSQL" title="PostgreSQL" align="center" height="20" /> and <img src="./app/assets/mongo-logo-color.png" alt="MongoDB" title="MongoDB" align="center" height="20" /> databases
- Displays real-time temperature, speed, latency, and memory statistics
#
###### Return to [Top](#Chronos)
<br>

## Demo

Add text here<br>
Add text here<br>
Add text here<br>
Add text here<br>
Add text here<br>

<img src="./app/assets/Chronos-Demo.gif" alt="Chronos-Demo" title="Chronos-Demo" align="center" height="500" />

#
###### Return to [Top](#Chronos)
<br>


## Branches

### Master

The **'master'** branch of this repository is where the <img src="./app/assets/electron-logo-color.png" alt="Electron" title="Electron" align="center" height="20" /> application for Chronos is deployed. The Chronos monitoring tool's _default configuration_ includes two databases: one PostgresQL and one MongoDB, that are both connected and configured for you in the dashboard so you can easily view the metrics and graphs available to you. 

**NOTE:** To _replace_ or _override_ these two default databases that we provide, change the database URIs stored in the following path: 
```
root directory -> electron -> user -> settings.json
```

### Middleware

The **'middleware'** branch is what is ultimately deployed to the <img src="./app/assets/npm-logo-color.png" alt="NPM" title="NPM" align="center" height="20" /> package, which is what you will install and configure in your own application in order to use Chronos.
<br>
<br>

### Microservices

The **'dummy-microservice'** branch is where we provide a test suite of sample microservices application that successfully utilizes Chronos to apply all the powerful, built-in features of our  monitoring tool. You can then visualize the data with the <img src="./app/assets/electron-logo-color.png" alt="Electron" title="Electron" align="center" height="20" /> app.

The microservices include individual <img src="./app/assets/docker-logo-color.png" alt="Docker" title="Docker" align="center" height="20" />files in their respective directories. A docker-compose.yml is in the root directory in case you'd like to deploy all services together.

Refer to the [README](https://github.com/oslabs-beta/Chronos/tree/docker/microservice) of that branch for more details.
<br>
<br>

### Docker

The '<img src="./app/assets/docker-logo-color.png" alt="Docker" title="Docker" align="center" height="20" /> **/microservice'** branch is where we provide a sample _dockerized_ microservices application to test out Chronos and to apply distributed tracing across different containers for your testing convenience.. 

<img src="./app/assets/important.png" alt="Important" title="Important" align="center" height="20" /> Give your containers the same names you use for arguments for microservice names. Read more about it under the INSTALLATION section below.

<img src="./app/assets/important.png" alt="Important" title="Important" align="center" height="20" /> In order to have container stats saved to your database along with other health info, when starting up the containers, bind volumes to this path:
```
/var/run/docker.sock
```

For example, you can type the following when starting up a container:
```
docker run -v /var/run/docker.sock:/var/run/docker.sock [your-image-tag]
```

If you're using docker-compose to start up multiple containers at once, you can add a `volumes` key for each of your services in the YAML file:

```
volumes:
  - "/var/run/docker.sock:/var/run/docker.sock"
```
<br>

### ChronosWebsite

The **'chronosWebsite'** branch is where the source code for the website, chronoslany.com, exists. The website currently has a working download link for Chronos as a desktop application for **MacOS**, and the Windows and Linux download links will redirect you to the <img src="./app/assets/apple-icon-black.png" alt="Apple" title="Apple" align="center" height="15" /> Apple Store to buy a Macbook Pro <img src="./app/assets/macbook-logo-color.png" alt="MacBook" title="MacBook" align="center" height="15" />.
<br>
<br>

### Others

Please feel free to ignore the other branches in the repository ('Demo', 'Dev')
#
###### Return to [Top](#Chronos)
<br>


## Installation
This is for the latest Chronos version **5.1 release and later**.

- Stable release: 5.1.0
- LTS release: 5.0.1

### 1. Pre-Installation
Make sure you're running version 12.18.3 of <img src="./app/assets/node-logo-color.png" alt="Node" title="Node" align="center" height="20" />, which is the most recent LTS (long-term support) version. 

If you need to roll back from <img src="./app/assets/node-logo-color.png" alt="Node" title="Node" align="center" height="20" /> 14.9.0, make sure to run 
```npm rebuild```
in the root directory.

If you're installing Chronos into a microservices application, and you have different folders for each microservice, make sure you also run 
```npm rebuild```
in each microservices folder **after you roll back to version 12.18.3.**
<br>
<br>

### 2. Install Dependencies
To use Chronos in your existing application, download and install the following in the root directory:
```
npm install chronos-tracker
```

### 3. Configure Chronos
After you've installed `chronos-tracker` in the root directory of your application, add a `chronos-config.js` file in the root directory. If your application has 

```js
// A sample `chronos-config.js` file

const chronos = require('chronos-tracker');

chronos.use({
  microservice: 'payments',
  interval: 2000,
  dockerized: true,
  database: {
    type: 'MongoDB',
    URI: process.env.MONGO_URI,
  },
  notifications: [],
});
```

The `microservice` property takes in a string. This should be the name of your server or microservice. For **Docker** containers, the name of the microservice should be the same as the name of the corresponding Docker container.

The `interval` property is optional and takes in an integer. This controls the Chronos monitoring frequency. If this is omitted, Chronos will defualt to recording server health every 2000 ms or 2 seconds.

The `dockerized` property is optional and should be specified as `true` if the server is running inside of a Docker container. Otherwise, this should be `false`. If omitted, Chronos will assume this server is not running in a container.

The `database` property is required and takes in the following:
- `type` which should be a string and only supports 'MongoDB' and 'PostgreSQL'.
- `URI` which should be a connection string the database you intend Chronos to write and record data regarding health, HTTP route tracing, and container infomation to. A `.env` is recommended.

<!-- - `isDockerized`: Is this microservice running in a Docker container? Enter `yes` or `no`. The current default setting is `no`.
  - <img src="./app/assets/important.png" alt="Important" title="Important" align="center" height="20" /> When starting up the container, give it the same name that you used for the microservice, because the middleware finds the correct container ID of your container by matching the container name to the microservice name you input as 1st argument.
  - <img src="./app/assets/important.png" alt="Important" title="Important" align="center" height="20" /> Don't forget to bind mount to Docker socket. -->

The `notifications` property is optional. Jump to the section below, [Notifications](#notifications) to configure <img src="./app/assets/slack-logo-color.png" alt="Slack" title="Slack" align="center" height="20" /> or email <img src="./app/assets/email-icon-black.png" alt="Slack" title="Slack" align="center" height="20" /> notifications.
<br>
<br>

### 4. Initialize Chronos

Add text here<br>
Add text here<br>
Add text here<br>
Add text here<br>
Add text here<br>

```js
const cmd = require('chronos-tracker');
require('./cmd-config'); // Bring in config file

cmd.propagate();
app.use('/', cmd.track());
```

#
###### Return to [Top](#Chronos)
<br>

## Notifications

The `notifications` property is optional and allows developers to be alerted when the server responds to requests with status codes >= 400. To set up notifications, set the value of the `notifications` property to an array of objects, each with a `type` and `settings` property. 

Chronos only supports **Slack** and **email** notifications.
<br>

### Slack

Chronos uses the <img src="./app/assets/slack-logo-color.png" alt="Slack" title="Slack" align="center" height="20" /> API to send messages to a Slack channel and only requires the **webhook url**. Learn how to set up [Slack webhooks](https://api.slack.com/messaging/webhooks) for your team.

An example of configured **slack** settings:

```js
// ...
notifications: [
  {
    type: 'email',
    settings: {
      slackurl: process.env.WEBHOOK
    }
  }
]
// ...
```

### Email
Chronos provides the option to send <img src="./app/assets/email-icon-black.png" alt="Slack" title="Slack" align="center" height="20" /> emails. The properties that should be provided are the following
- `emails` - The recipient list (string) can be a single email address or multiple as comma seprated values. 
- `emailHost` - The smtp host (string) of your email server
- `emailPort` - The email port (integer) is either **465** or **587** depending on the sender email security settings. Learn more about email ports at the [nodemailer docs](https://nodemailer.com/smtp/)
- `user` - The email address (string) of the sender
- `password` - The password (string) of the sender email

_NOTE: Email notification settings may require alternative security settings to work_
 
An example of configured **email** settings:

```js
// ...
notifications: [
  {
    type: 'email',
    settings: {
      emails: 'foobar@email.com, bizbaz@email.edu',
      emailHost: 'smpt@gmail.com',
      emailPort: 465,
      user: process.env.SENDER_EMAIL,
      password: process.env.SENDER_PASSWORD
    }
  }
]
// ...
```
#
###### Return to [Top](#Chronos)
<br>

## Stack

Chronos was built using the following technology stacks:
- <img src="./app/assets/electron-logo-color.png" alt="Electron" title="Electron" align="center" height="30" />
- <img src="./app/assets/react-logo-color.png" alt="React" title="React" align="center" height="30" />
- <img src="./app/assets/js-logo-color.png" alt="JavaScript" title="JavaScript" align="center" height="30" />
- <img src="./app/assets/ts-logo-long-blue.png" alt="TypeScript" title="TypeScript" align="center" height="30" />
- <img src="./app/assets/postgres-logo-color.png" alt="PostgreSQL" title="PostgreSQL" align="center" height="30" />
- <img src="./app/assets/mongo-logo-color.png" alt="MongoDB" title="MongoDB" align="center" height="30" />
- <img src="./app/assets/node-logo-color.png" alt="Node" title="Node" align="center" height="30" />
- <img src="./app/assets/express-logo-color.png" alt="Express" title="Express" align="center" height="30" />
- <img src="./app/assets/http-logo-color.png" alt="HTTP" title="HTTP" align="center" height="30" />
- <img src="./app/assets/grpc-logo-color.png" alt="gRPC" title="gRPC" align="center" height="30" /> 
- <img src="./app/assets/graphql-logo-color.png" alt="GraphQL" title="GraphQL" align="center" height="30" />
- <img src="./app/assets/docker-logo-color.png" alt="Docker" title="Docker" align="center" height="30" />
- <img src="./app/assets/aws-logo-color.png" alt="AWS" title="AWS" align="center" height="30" />
- <img src="./app/assets/jest-logo-color.png" alt="Jest" title="Jest" align="center" height="30" />
- <img src="./app/assets/enzyme-logo-color.png" alt="Enzyme" title="Enzyme" align="center" height="30" />
- <img src="./app/assets/spectron-logo-color.png" alt="Spectron" title="Spectron" align="center" height="30" />
- <img src="./app/assets/webpack-logo-color.png" alt="Webpack" title="Webpack" align="center" height="30" />
- <img src="./app/assets/material-ui-logo-color.png" alt="Material-UI" title="Material-UI" align="center" height="30" />
- <img src="./app/assets/vis-logo-color.png" alt="Vis.js" title="Vis.js" align="center" height="30" />
- <img src="./app/assets/plotly-logo-color.png" alt="Plotly.js" title="Plotly.js" align="center" height="30" />
 
#
###### Return to [Top](#Chronos)
<br>


## Contributing

Development of Chronos is open source on GitHub through the tech accelerator umbrella OS Labs, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving Chronos.

- [Contributing](https://github.com/oslabs-beta/Chronos/blob/master/CONTRIBUTING.md)
#
###### Return to [Top](#Chronos)
<br>


## License

Chronos is <img src="./app/assets/mit-logo-color.png" alt="MIT" title="MIT" align="center" height="20" /> [licensed.](https://github.com/oslabs-beta/Chronos/blob/master/LICENSE.md) 
#
###### Return to [Top](#Chronos)
