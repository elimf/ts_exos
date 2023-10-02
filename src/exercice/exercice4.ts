export class Queue<T> {
  private elements: T[] = [];

  enqueue(element: T): void {
    this.elements.push(element);
  }

  dequeue(): T | null {
    if (this.isEmpty() ) {
      return null;
    }
    return this.elements.shift() || null;
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  size(): number {
    return this.elements.length;
  }
}

