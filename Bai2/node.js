"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    Node.prototype.readData = function () {
        return this.data;
    };
    return Node;
}());
exports.Node = Node;
var node = new Node(3);
var node1 = new Node(4);
node.next = node1;
console.log(node);
