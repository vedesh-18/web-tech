function createStudent(){

    let id = Number(document.getElementById("id").value);
    let name = document.getElementById("name").value;
    let department = document.getElementById("dept").value;
    let marks = Number(document.getElementById("marks").value);

    
    const student = {
        id: id,
        name: name,
        department: department,
        marks: marks
    };

    
    const {id: sid, name: sname, department: sdept, marks: smarks} = student;

    
    let grade = smarks >= 90 ? "A" :
                smarks >= 75 ? "B" :
                smarks >= 60 ? "C" : "D";


    const updatedStudent = {
        ...student,
        grade: grade
    };

    document.getElementById("result").innerHTML =
    `Destructured Values:<br>
     ${sid} ${sname} ${sdept} ${smarks}<br><br>
     Updated Object:<br>
     ${JSON.stringify(updatedStudent)}`;
}