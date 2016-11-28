import './server/__2.1.1.workaround.ts';

// These polyfills must be the first thing imported in node
// the polyfills must be the first thing imported in node.js
import 'angular2-universal-polyfills';

import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';

// Angular 2
import { enableProdMode } from '@angular/core';
// Angular 2 Universal
import { createEngine } from 'angular2-express-engine';

// enable prod for faster renders
enableProdMode();

import { AppModule } from './server/app.module';

const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));

// Express View
app.engine('.html', createEngine({ ngModule: AppModule, time: true }));
app.set('views', __dirname);
app.set('view engine', 'html');

// Serve static files
app.use(express.static(ROOT, { index: false }));

app.get('/', function (req, res, next) {
  res.render('./index', {
    time: true,
    req,
    res,
    originUrl: 'http://localhost:3000',
    baseUrl: '/',
    requestUrl: '/',
    // preboot: false,
    preboot: { appRoot: ['/'], uglify: true },
  });
});

// Server
let server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on: http://localhost:${server.address().port}`);
});
