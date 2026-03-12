const calculateAverage = (m1, m2, m3) => {
    return (m1 + m2 + m3) / 3;
};

function calculate(){

    let studentName = document.getElementById("name").value;

    let mark1 = Number(document.getElementById("mark1").value);
    let mark2 = Number(document.getElementById("mark2").value);
    let mark3 = Number(document.getElementById("mark3").value);

    let total = mark1 + mark2 + mark3;

    let average = calculateAverage(mark1, mark2, mark3);

    document.getElementById("result").innerHTML =
    `Student Name: ${studentName} <br>
     Total Marks: ${total} <br>
     Average Marks: ${average.toFixed(2)}`;
}