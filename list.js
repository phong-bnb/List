export interface  List<T>{
    add(data: T): void;
    get(index: number): T;
    size(): number;
    remove(): void;
}

