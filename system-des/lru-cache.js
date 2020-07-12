/*Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?*/

var LRUCache = function(capacity) {
    this.cacheMap = new Map();
    this.capacity = capacity;
    this.dll = new DoublyLinkedList();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let target = this.cacheMap.get(key)
    if (target) {
        target.remove();
        let appended = this.dll.append(target.key, target.val);
        this.cacheMap.set(target.key, appended);
        return target.val;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cacheMap.has(key)) {
        let target = this.cacheMap.get(key);
        target.remove();
    }
    
    let newNode = this.dll.append(key, value);
    this.cacheMap.set(key, newNode);
    
    if (this.cacheMap.size > this.capacity) {
        let removed = this.dll.removeHead();
        this.cacheMap.delete(removed.key);
    }
};



class Node {
    constructor(key = null, val = null) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
    
    remove() {
        this.prev.next = this.next;
        this.next.prev = this.prev;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = new Node();
        this.tail = new Node();
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    
    append(key, val) {
        let newNode = new Node(key, val);
        let lastNode = this.tail.prev;

        lastNode.next = newNode;
        newNode.prev = lastNode;

        this.tail.prev = newNode;
        newNode.next = this.tail;

        return newNode;
    }
    
    removeHead() {
        let head = this.head.next;
        head.remove();
        return head;
    }
}
