class Course {
    constructor(courseName, instructor) {
        this.courseName = courseName;
        this.instructor = instructor;
    }

    displayCourse() {
        return `Course: ${this.courseName}, Instructor: ${this.instructor}`;
    }
}

function enroll(){

    let cname = document.getElementById("courseName").value;
    let instructor = document.getElementById("instructor").value;
    let seats = Number(document.getElementById("seats").value);

    let course1 = new Course(cname, instructor);

    let courseDetails = course1.displayCourse();

    let enrollCourse = new Promise((resolve, reject) => {

        if(seats > 0)
            resolve("Enrollment Successful");
        else
            reject("Course Full");

    });

    enrollCourse
    .then(msg => {
        document.getElementById("result").innerHTML =
        `${courseDetails}<br>${msg}`;
    })
    .catch(err => {
        document.getElementById("result").innerHTML =
        `${courseDetails}<br>${err}`;
    });
}