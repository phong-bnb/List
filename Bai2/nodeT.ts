export  class NodeT<T> {
    data: T;
        next : NodeT<T> | null = null
    constructor(data : T) {
        this.data=data
    }
    readData(): T{
        return this.data
    }



}
