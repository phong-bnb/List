import {List} from "./list"
export class ArrayList<T> implements List<T>{
    container: Array<T>
constructor() {
        this.container=[]
}

    add(data: T): void {
        this.container.push(data)
    }
    get(index: number): T {
        return this.container[index]
    }
    size(): number {
       return  this.container.length
    }
    remove(): void {
        this.container.pop()
    }
}