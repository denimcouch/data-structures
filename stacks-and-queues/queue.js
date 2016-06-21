'use strict';

const queueGenerator = () => {
  var front = null;
  let back = null;

  const _enqueue = ( value ) => {
    let newNode = {
      value,
      next: null,
    }
    if (!front) {
      back = newNode;
      front = back;
    } else {
      back.next = newNode;
      back = newNode;
    }
  }

  const _dequeue = () => {
    if ( front ) {
      let value = front.value;
      front = front.next;
      return value;
    }
    return null;
  }

  return {
    enqueue: _enqueue,
    dequeue: _dequeue,
  }
}

var queue = queueGenerator();
queue.enqueue('first');
queue.enqueue('second');
queue.enqueue('third');
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());