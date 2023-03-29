<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


## How to generate Nest CRUD generate ?

```bash
#used for generating for REST API, GraphQL, Microservices, DTO, entities are generated
$ nest g resourse products
```

This asks 2 questions to Choose 

? What transport layer do you use?
- REST API, GraphQL(code first), GraphQL(schema first), Microservice(non-HTTP), WebSockets

? Would you like to generate CRUD entry points? Yes

The above command would generate the methods associated with it.


## Coding Style

- Platform neutral or in lib specific way(Fastify / express)

Response:

- using @Res() decorator:

```bash
  @Get('listusers')
  getUsers(@Res() response) {
    response.status(200).json({ id: 1, name: 'some' });
  }
```

Request:

- Parameters:
  - Path Example users/1
  - Query Example ?a=45&b=55 NOTE: Query() decorator methods must be initiallized first
- Payload
  - Request body - used mainly with @Post() to get the body payload with @Body()


Async Response:

- callbacks
- Promises - use Promise type to declare the type to return
- using async and await
- RxJS - use Observable type to declare the type to return


Error handling:

- use Built-in HttpException
- this is the base for all exceptions. - BadRequestException, RequestTimeoutException. NotAcceptableException
- use custom exceptions extending from HttpException.


Customization of Error messages:

- using Filters.
- Check https://docs.nestjs.com/exception-filters#exception-filters-1

Middleware:

- It is a function which is called before the route handler.
- Class Middleware, Function Middleware

-------------------------------------------------------------------------------------------------------------

Configuration
Database
Microservices


## Configuration:

```bash
nest new config-app
```

How to read configration ?

- via nodejs env variables.

In command line, SET message=hello user

```bash
node index.js
```

- When above command in run, and access process.env.message, it outputs the message variable.

OR

## .env files

- using dotenv package
## Distributed config systems:

consul.io
Apache zookeeper

- From NextJS configuration

```bash
npm install @nestjs/config
```

- NestJS uses dotenv internally
- Need to inject config module in main module of NestJS

```bash
ConfigModule.forRoot({
  envFilePath: '.development.env',
});
```

```bash
ConfigModule.forRoot({
  isGlobal: true,
});
```

```bash
app.module.tsJS

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
})
export class AppModule {}
```

NOTE:

- https://docs.nestjs.com/techniques/configuration






