import { Queue } from "./exercice4"; 

describe("Queue", () => {
  let queue: Queue<number>; 

  beforeEach(() => {
    queue = new Queue<number>();
  });

  it("should enqueue elements", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size()).toBe(2);
  });

  it("should dequeue elements in FIFO order", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
  });

  it("should return null when dequeueing from an empty queue", () => {
    expect(queue.dequeue()).toBeNull();
  });

  it("should check if the queue is empty", () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
  });

  it("should get the size of the queue", () => {
    expect(queue.size()).toBe(0);
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size()).toBe(2);
  });
});
