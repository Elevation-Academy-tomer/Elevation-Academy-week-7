/// Exercise 1

class Matrix{
    constructor(numRows, numColumns){
        this.matrix = this.generateMatrix(numRows, numColumns)

    }

    generateMatrix(numRows, numColumns) {
        this.matrix = []
        let num = 1
        
        for (let r = 0; r < numRows; r++) {
            this.matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                this.matrix[r].push(num++)
            }
        }
        return this.matrix
    }

    get(rowNum, colNum) {
        return  this.matrix[rowNum][colNum]
    }

    print() {

        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j <  this.matrix[i].length; j++) {
                line += ( this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }

    printColumn(colNum) {
        for (let i = 0; i <  this.matrix.length; i++) {
            console.log( this.matrix[i][colNum])
        }
    }

    printRow(rowNum) {
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            console.log(this.matrix[rowNum][i])
        }
    }

    alter(rowNum, colNum, value) {
        this.matrix[rowNum][colNum] = value
    }

    findCoordinate(value){
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j <  this.matrix[i].length; j++) {
                if(this.matrix[i][j] == value){
                    return {
                        x : j,
                        y : i
                    }
                }
            }
        }
        return "value is not exsit in the matrix"
    }
        
}

// let m = new Matrix(3, 4)
// m.print()
// //prints
// /*
// 1       2       3       4
// 5       6       7       8
// 9       10      11      12
// */

// m.alter(0, 0, m.get(1, 1))
// console.log("")
// m.printColumn(0) //prints 6, 5, 9 (separate lines)
// console.log("")
// m.printRow(0) //prints 6, 2, 3, 4 (separate lines)

// let m = new Matrix(3, 4)
// console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
// console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}

let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]


class EmployeeMatrix extends Matrix{
    constructor(){
        super()
    }

    loadData(data){
        super.generateMatrix(data.length , Object.keys(data[0]).length)
        for(let i = 0; i < data.length; i++){
            let j =0
            for(let item in data[i]){
                super.alter(i ,j++ ,data[i][item])
            }
        }
    }

    getEmployees(departmentName){
        let departmentArray = []
        this.matrix.forEach(data => {
            if(departmentName == data[2]){
                departmentArray.push(data[1])
            }
        })

        return departmentArray
    }

    getTotalSalary(departmentName){
        let sum = 0
        this.matrix.forEach(data => {
            if(departmentName == data[2]){
                sum += data[3]
            }
        })

        return sum
    }

    findRichest(){
        let max = this.matrix[0][3]
        let name = this.matrix[0][1]
        this.matrix.forEach(data => {
            if(max < data[3]){
                max = data[3]
                name = data[1]
            }
        })

        return name
    }

}

// let m = new EmployeeMatrix()

// m.loadData(data)
// m.print()


// console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
// console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]
// console.log(m.getTotalSalary("Finance")) //prints 4300
// console.log(m.getTotalSalary("Design")) //prints 5300
// console.log(m.findRichest()) //prints Anisha

class TicTacToe extends Matrix{
    constructor(){
        super()
        this.sumRow = {
            1 : 
                {
                    0 :0, 
                    1: 0, 
                    2:0
                },
            2 : {
                0 :0, 
                1: 0, 
                2:0
            }
        }

        this.sumCol = {
            1 : 
                {
                    0 :0, 
                    1: 0, 
                    2:0
                },
            2 : {
                0 :0, 
                1: 0, 
                2:0
            }
        }

        this.sumSlantEqual = {
            1 : 0,
            2 : 0
        }

        this.sumSlant2 = {
            1 : 0,
            2 : 0
        }

        this.lastPlayer = 0
    }
    

    loadBoard(){
       this.generateMatrix(3, 3)
    }

     generateMatrix(numRows, numColumns) {
        this.matrix = []
        
        for (let r = 0; r < numRows; r++) {
            this.matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                this.matrix[r].push(".")
            }
        }
        return this.matrix
    }
    play(rowNum , columnNum , player ){
        if(this.lastPlayer == player) {return console.log("you already played last time")}
        let xOrO = ""
        player == 1 ? xOrO = "x" : xOrO = "o"
        if(this.matrix[rowNum][columnNum] == "."){
            super.alter(rowNum , columnNum ,  xOrO)
            this.sumRow[player][rowNum]++
            this.sumCol[player][columnNum]++
            if(rowNum == columnNum ){
                this.sumSlantEqual[player]++ 
            }
            if(rowNum + 2== columnNum || rowNum == columnNum + 2 || rowNum == 1 && columnNum == 1){
                this.sumSlant2[player]++ 
            }
            this.lastPlayer = player
         }

         else{
            console.log("You already put a X/O in this postion")
         }

         if(this.sumRow[player][rowNum] == 3 
            || this.sumCol[player][columnNum] == 3 
            || this.sumSlantEqual[player] ==3 || this.sumSlant2[player] ==3){
             console.log(`Congratulations Player ${player}`)
            return this.loadBoard()
         }
    }

}

// let board = new TicTacToe()
// board.loadBoard()
// board.print()

// let board = new TicTacToe()
// board.loadBoard()

// board.play(2, 2, 1)
// board.play(2, 2, 1)
// board.play(0, 0, 2)
// board.print()

let board = new TicTacToe()
board.loadBoard()

board.play(2, 2, 2)
board.play(0, 0, 1)
board.play(0, 2, 2)
board.play(1, 0, 1)
board.play(1, 1, 2) 
// board.play(0, 0, 1)

board.play(1, 2, 1)  
board.play(2, 0, 2)  
board.print()

// console.log(board)
