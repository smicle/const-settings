"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var fs = __importStar(require("fs"));
var load = __importStar(require("./load"));
var path = process.cwd() + "/config/settings";
var Settings = {};
if (fs.existsSync(path + ".yaml")) {
    var yml = load.YAML(path + ".yaml");
    Settings = __assign(__assign({}, Settings), yml);
}
if (fs.existsSync(path + ".yml")) {
    var yml = load.YAML(path + ".yml");
    Settings = __assign(__assign({}, Settings), yml);
}
if (fs.existsSync(path)) {
    var files = fs.readdirSync(path).filter(function (f) { return /^.*\.ya?ml$/.test(f); });
    files.forEach(function (f) {
        var yml = load.YAML(path + "/" + f);
        Settings = __assign(__assign({}, Settings), yml);
    });
}
exports["default"] = Settings;
