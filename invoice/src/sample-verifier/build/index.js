"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var verifierResource_1 = __importDefault(require("./resources/verifierResource"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', verifierResource_1.default);
app.listen(process.env.PORT, function () {
    console.log("Verifier started on http://localhost:".concat(process.env.PORT));
});
