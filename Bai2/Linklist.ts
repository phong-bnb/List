import {NodeT} from "./nodeT";

export class Linklist<T> {
    head: NodeT<T> | null;
    tail: NodeT<T>| null;
    length: number;
    constructor() {
        this.head  = null;
        this.tail = null;
        this.length = 0
    }
    insertFirstNode(data: T): void {
        let node = new NodeT(data);
        node.next = this.head;
        this.head = node;

        if (!this.tail) {
            this.tail = node
        }
        this.length++;
    }
    insertLastNode(data: T): void {
        if (!this.head){
            this.insertFirstNode(data);
        }else {
            let node = new NodeT(data);
            this.tail.next = node;
            this.tail = node;
            this.length++;
        }
    }
    delete(item:number){
        let p = this.head
        let c = this.head
        let i = 1
        while (i<item){
            p = c
            c = p.next
            i++
        }
        p.next=c.next
        c.next=null
        this.length--
    }
}
let aList = new Linklist();
aList.insertLastNode(1)
aList.insertLastNode(2)
aList.insertLastNode(3)
aList.insertLastNode(4)
console.table(aList)

aList.delete(2)

console.table(aList)