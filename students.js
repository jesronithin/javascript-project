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

function showData() {
    const graded = getGrades();

    let output = "Name | Score | Grade\n";

    graded.forEach(s => {
        output += `${s.name} | ${s.score} | ${s.grade}\n`;
    });

    document.getElementById("output").innerText = output;
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