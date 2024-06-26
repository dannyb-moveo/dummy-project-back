"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
app.get("/", function (req, res) {
    res.send("Hello, World!");
});
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
