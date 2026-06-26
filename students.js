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
    const top = getTopScores();
    const jesro = getStudentName("JESRO");

    let output = "Name | Score | Grade\n\n";

    graded.forEach(s => {
        output += `${s.name} | ${s.score} | ${s.grade}\n`;
    });

    output += "\n--- TOP SCORES ---\n";
    top.forEach(s => {
        output += `${s.name} | ${s.score}\n`;
    });

    output += "\n--- SEARCH RESULT ---\n";
    output += JSON.stringify(jesro, null, 2);

    document.getElementById("output").innerText = output;
}

addStudents("jesro","75"); 
addStudents("leo","95"); 
addStudents("ram","65"); 
addStudents("kgf","55"); 
addStudents("messi","25"); 

showData();


console.log("\n Top Scores:" );
console.log(getTopScores())


console.log("\n Display Jesro:");
console.log(getStudentName("jesro"))