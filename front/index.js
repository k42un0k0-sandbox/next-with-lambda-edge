"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloHandler = void 0;
var next_1 = require("next");
var serverless_http_1 = require("serverless-http");
var nextHandler = (0, next_1.default)({dev:false}).getRequestHandler();
exports.helloHandler = (0, serverless_http_1)(nextHandler);
