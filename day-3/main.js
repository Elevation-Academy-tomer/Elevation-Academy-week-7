// //// Exercise 1

// const factorials = function(number ,sum = 1){
//         if(number == 1) {return sum}
//         sum *= number
//        return factorials(--number ,sum)
// }

// console.log(factorials(8))


// //// Exercise 2

// const reverse = function(str , nweStr = ""){
//         if(str.length == 0){return nweStr}
//         nweStr +=str[str.length -1]
//         str = str.slice(0, str.length -1)
//         return reverse(str ,nweStr )
// }

// console.log(reverse("tomer"))

//// Exercise 3

// const swap = function(arr1, arr2){
//     if(arr1.length == 0){return arr2}
//     arr2.unshift(arr1[arr1.length -1])
//     arr1.splice(arr1.length -1 , 1)
//     swap(arr1, arr2)
// }

class Stack {
    constructor() {
        this.stack = []
        this.length = 0
    }

    print() {
        console.log(this.stack)
    }

    push(x) {
        this.stack[this.length] = x
        this.length++
    }
    
    isEmpty() {
        return this.length === 0
    }
    peek() {
        return this.isEmpty() ? null : this.stack[this.length - 1]
    }
    
    pop() {
        if (this.isEmpty()) {
            return null
        }
        this.length--
        delete this.stack[this.stack.length - 1]
        this.stack.length = this.length
    }
}

const swap = function(stack1, stack2){
    if(stack1.isEmpty()){return stack2}
    stack2.push(stack1.peek())
    stack1.pop()
    swap(stack1, stack2)
}

const stack1 =new Stack()
const stack2 =new Stack()
stack1.push(1)
stack1.push(2)
stack1.push(3)
// stack1.print()
// stack2.print()
swap(stack1, stack2)
stack1.print()
stack2.print()
