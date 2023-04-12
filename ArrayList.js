"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayList = void 0;
var ArrayList = /** @class */ (function () {
    function ArrayList() {
        this.container = [];
    }
    ArrayList.prototype.add = function (data) {
        this.container.push(data);
    };
    ArrayList.prototype.get = function (index) {
        return this.container[index];
    };
    ArrayList.prototype.size = function () {
        return this.container.length;
    };
    ArrayList.prototype.remove = function () {
        this.container.pop();
    };
    return ArrayList;
}());
exports.ArrayList = ArrayList;
