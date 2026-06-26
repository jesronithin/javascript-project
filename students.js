const students = [];

function addStudents (name,score){
    name = name.trim().toUpperCase();
    students.push({name,score});
}

function getGrades(){
     return students.map((students) => {
        let grade = "f";

        if(students.score >= 90) grade = "a";
        else if(students.score >= 75) grade = "b";
        else if(students.score >= 45) grade = "c";
        else if(students.score >= 35) grade = "d";
        return {...students,grade}
    })
}

function getTopScores(){
    return students.filter((students) => students.score > 75)
}

function getStudentName(name){
    return students.find((students) => students.name == name)
}

function displayAll(){
    const graded = getGrades();
    console.log("students data");
    console.log("Name | Score | Grade");
    graded.forEach((students) => {
        console.log(`${students.name} | ${students.score} | ${students.grade}`)
    })

}

addStudents("jesro","75"); 
addStudents("leo","95"); 
addStudents("parthiban","65"); 
addStudents("thoothukudi kgf","55"); 
addStudents("ronaldo","25"); 

displayAll();


console.log("\n Top Scores:" );
console.log(getTopScores())


console.log("\n Display Jesro:");
console.log(getStudentName("JESRO"))