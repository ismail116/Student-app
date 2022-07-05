// server side


// version 3
// node app.js add --id=number --name="content" --degree={10,20,30}




const yargs = require('yargs')
const students = require('./students')



yargs.command({
    command:'add',
    describe:'Add Student command',
   
    builder:{   
        id:{
            describe:'This is id description in add command',
            demandOption:true,
            type:'number'
        },
        name:{
            describe:'This is name description in add command',
            demandOption:true,
            type:'string'
        },
        degrees:{
            describe:'This is name description in add command',
            demandOption:true,
            type:'array'
        },
        comment:{
            describe:'This is comment description in add command',
            type:'string'
        }
    },
    // code excuted when using add command

    handler:()=>{
      students.addStudent(yargs.argv.id, yargs.argv.name, yargs.argv.degrees)
    }
})

yargs.command({
    command:'delete',
    describe:'Delete Student command',
    builder:{
        id:{
            describe:'This is id description in add command',
            demandOption:true,
            type:'number'
        }
    },

    handler:()=>{
        students.deleteStudent(yargs.argv.id)
    }
})
// read
yargs.command({
    command:'read',
    describe:'Read Student command',
    builder:{
        id:{
            describe:'This is id description in add command',
            demandOption:true,
            type:'number'
        }
    },
    handler:()=>{
        students.readStudent(yargs.argv.id)
    }
})

//list
yargs.command({
    command:'list',
    describe:'List Student command',
    handler:()=>{
        students.listStudent()
    }
})
console.log(yargs.argv)



