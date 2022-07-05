const fs = require('fs')
const { version } = require('yargs')
const student = require('./app')


//////////////////////////////////////////////////////////////////////////////////
// ADD (Filter)

const addStudent = (id,name,degrees) =>{
    const students = loadStudent()

    const duplicateID = students.filter((obj)=>{
         return obj.id === id
    })

   console.log(duplicateID)
   
   if( duplicateID.length === 0){
    students.push({
        id,name,degrees
    })
    saveStudent(students)
    console.log('Saved Successfully')
   } else{
    console.log('Error Duplicated')
   }

}

//////////////////////////////////////////////////////////////////////////////////
// Delete


    const deleteStudent = (id) =>{
    const students = loadStudent()

    const studentsToKeep = students.filter((obj)=>{
        return obj.id !== id
    })

   console.log(studentsToKeep)
   
   
    if( studentsToKeep.length !== students.length){
     saveStudent(studentsToKeep)
     console.log('Delete Successfully')
    } else{
    console.log('no ID is found')
    }

}

/////////////////////////////////////////////////////////////////////////
// read  (find)
    const readStudent = (id) =>{
    const students = loadStudent()

    const student = students.find((obj)=>{


   

      return obj.id == id
    })

   console.log(student)
   if(student){
    console.log(student.name)
    // const total = student.degrees.forEach((el)=>{
        
    //     total += el
    // })
    const total = student.degrees[0]+student.degrees[1]+student.degrees[2]
    console.log(total)
   }else{
    console.log('not Found')
   }

}
//////////////////////////////////////////////////////////////////////////////////
// List

    const listStudent = () =>{
    const notes = loadStudent()

    notes.forEach((obj)=>{
        console.log(obj.name)
    })
}






const loadStudent = () =>{
    try{
    const data = fs.readFileSync('student.json').toString()
    return JSON.parse(data) // josn --> object
    }
    catch(e){
        return []
    }

}
const saveStudent = (students) =>{
    // notes --> [ { title: 'new', body: 'body1' } ]
    //  [{title:"new",body:"body1"}],{title:"title1",body:"body2"}]] -->
    //  [{"title":"new","body":"body1"}],{"title":"title1","body":"body2"}]]
    const saveData = JSON.stringify(students)
    // [ { title: 'new', body: 'body1' } ] --> [ { "title": 'new', "body": 'body1' } ]
  
    console.log(saveData)
    fs.writeFileSync('student.json',saveData) 
}
module.exports = {
   addStudent, 
   deleteStudent,
   readStudent,
   listStudent,
 
}