class UniqueArray{
    constructor(){
        this.arr = []
        this.obj = {}
    }

    add(item){
        !this.exists(item) ? (this.arr.push(item)) 
        && (this.obj[JSON.stringify(item)] = this.get(this.arr.length -1)) && this.counter++
        : null
    }

    showAll(){
        console.log(this.arr)
    }

    exists(item){
        let checkItem = JSON.stringify( item)
       return this.obj[checkItem] != undefined 
    }

    get(index){
        return this.arr[index] || -1
    }

}

const uniqueStuff = new UniqueArray()
uniqueStuff.add({toy :"toy" , id : "something"})
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add({toy :"toy" , id : "something"})
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists({toy :"toy"}) //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"


