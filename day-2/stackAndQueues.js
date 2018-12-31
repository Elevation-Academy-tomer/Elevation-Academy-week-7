                                    /////// Stack /////////

// class Stack {
//     constructor() {
//         this.stack = []
//         this.length = 0
        
//     }

//     print() {
//         console.log(this.stack)
//     }

//     push(x) {
//         this.stack[this.length] = x
//         this.length++
//     }
    
//     isEmpty() {
//         return this.length === 0
//     }
//     peek() {
//         return this.isEmpty() ? null : this.stack[this.length - 1]
//     }
    
//     pop() {
//         if (this.isEmpty()) {
//             return null
//         }
//         this.length--
//         return delete this.stack[this.stack.length - 1]
//     }
// }

                                    /////// Queue /////////

// class Queue {
//     constructor() {
//         this.queue = []
//         this.length = 0
//         this.pointer =0 
        
//     }

//     print() {
//         console.log(this.queue)
//     }

//     enqueue(x) {
//         this.queue[this.length] = x
//         this.length++
//     }
    
//     isEmpty() {
//         return this.pointer +1 > this.queue.length
//     }
//     peek() {
//         return this.isEmpty() ? null : this.queue[this.pointer]
//     }
    
//     dequeue() {
//         if (this.isEmpty()) {
//             return null
//         }
//         delete this.queue[this.pointer]
//         this.pointer++
//     }
// }


                                    /////// MinStack /////////


class MinStack {
    constructor() {
        this.stack = []
        this.length = 0
        this.min = null
        
    }

    print() {
        console.log(this.stack)
    }


    push(x) {
        this.isMin(x)
        this.stack[this.length] = x
        this.length++
    }

    isMin(x){
        if(x < this.peek() && !this.isEmpty()){
            this.min = x
        }
        else if(x > this.peek() && !this.isEmpty()){
            this.min = this.peek()
        }
        else{
            this.min = null
        }
    }

    getMin(){
        return this.min
    }
    
    isEmpty() {
        return this.length === 0
    }
    peek() {
        return this.isEmpty() ? false : this.stack[this.length - 1]
    }
    
    pop() {
        if (this.isEmpty()) {
            return null
        }
        this.isMin(this.stack[this.length -2])
        this.length--
        return delete this.stack[this.stack.length - 1]
    }
}

let ms = new MinStack()
ms.push(17)
ms.push(12)
ms.pop()
ms.push(31)
console.log(ms.getMin())    //12
ms.pop()
ms.pop()
console.log(ms.getMin())    //null
ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19
ms.push(3)
console.log(ms.getMin())    //3
ms.pop()
ms.pop()
console.log(ms.getMin())    //19



