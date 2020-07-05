
class QueueElement { 
  constructor(element, priority) 
  { 
      this.val = element; 
      this.priority = priority; 
  } 
} 

class PriorityQueue { 

  constructor() 
  { 
      this.items = []; 
  } 

  enqueue(value, priority) {
      const el = new QueueElement(value, priority);
      
      let contain = false; 
      
      for (let i = 0; (i < this.items.length); i++) { 
          if (this.items[i].priority > el.priority) { 
              this.items.splice(i, 0, el);
              contain = true; 
              break;
          } 
      } 
      
      if (!contain) { 
          this.items.push(el); 
      } 
  }
  
  dequeue() {
      if (this.isEmpty()) {return []}
      
      return this.items.shift();
  }
  
  first() {
      if (this.isEmpty()) {return []}
      
      return this.items[0]
  }
  
  last() {
      if (this.isEmpty()) {return []}
      
      return this.items[this.items.length - 1]
  }
  
  isEmpty() {
      return (this.items.length === 0);
  }
  
  print() {
      console.log('Henlo! Here is your p. queue :^}\n')
      this.items.forEach((el, i) => {
          if (i > 0) {
              console.log('----------')
          }
          console.log('priority:', el.priority, '//', 'value:', el.val,)
      })
      console.log('\n~~thank you for using me~~')
  }
}