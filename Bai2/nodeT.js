"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeT = void 0;
var NodeT = /** @class */ (function () {
    function NodeT(data) {
        this.next = null;
        this.data = data;
    }
    NodeT.prototype.readData = function () {
        return this.data;
    };
    return NodeT;
}());
exports.NodeT = NodeT;
