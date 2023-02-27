export class Queue<T> {
    list: T[]

    constructor() {
        this.list = [];
        console.log(this.list);
    }

    enqueue(item: T): Queue<T> {
        this.list = [...this.list, item];
        return this
    }

    dequeue(): Queue<T> {
        const item = this.list[0];
        this.list = this.list.slice(1);
        return this;       
    }

    isEmpty(): boolean {
        return this.list.length === 0;
    }

    getLength(): number {
        return this.list.length
    }

    toString(): string {
        return this.list.toString();
    }
}