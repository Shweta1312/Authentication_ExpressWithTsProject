"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.router = void 0;
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
var MetaDataKeys_1 = require("./MetaDataKeys");
exports.router = AppRouter_1.AppRouter.getInstance();
function controller(routePrefix) {
    return function (target) {
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(MetaDataKeys_1.MetaDataKeys.path, target.prototype, key);
            var method = Reflect.getMetadata(MetaDataKeys_1.MetaDataKeys.method, target.prototype, key);
            if (path) {
                exports.router[method]("" + routePrefix + path, routeHandler);
            }
        }
    };
}
exports.controller = controller;
