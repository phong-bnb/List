"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Linklist = void 0;
var nodeT_1 = require("./nodeT");
var Linklist = /** @class */ (function () {
    function Linklist() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    Linklist.prototype.insertFirstNode = function (data) {
        var node = new nodeT_1.NodeT(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.length++;
    };
    Linklist.prototype.insertLastNode = function (data) {
        if (!this.head) {
            this.insertFirstNode(data);
        }
        else {
            var node = new nodeT_1.NodeT(data);
            this.tail.next = node;
            this.tail = node;
            this.length++;
        }
    };
    Linklist.prototype.delete = function (item) {
        var p = this.head;
        var c = this.head;
        var i = 1;
        while (i < item) {
            p = c;
            c = p.next;
            i++;
        }
        p.next = c.next;
        c.next = null;
        this.length--;
    };
    return Linklist;
}());
exports.Linklist = Linklist;
var aList = new Linklist();
aList.insertLastNode(1);
aList.insertLastNode(2);
aList.insertLastNode(3);
aList.insertLastNode(4);
console.table(aList);
aList.delete(2);
console.table(aList);
