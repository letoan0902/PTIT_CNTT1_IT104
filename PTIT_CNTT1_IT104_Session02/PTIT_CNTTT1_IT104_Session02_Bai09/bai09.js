const getStudentSummary = (student)=>{
    let diemtrungbinh = 0;
    let max=-1;
    let subjectMax="unknown";
    let min=11;
    let subjectMin="unknown";
    for (const mon of student.listMonhoc) {
        diemtrungbinh+=mon.score;
        if(mon.score>max){
            subjectMax=mon.subject;
            max=mon.score
        }
        if(mon.score<min){
            subjectMin=mon.subject
            min=mon.score;
        }
    }
    diemtrungbinh=diemtrungbinh/student.listMonhoc.length;
    let danhgia;
    if(diemtrungbinh>=8.5){
        danhgia="Học sinh giỏi"
    }else if(diemtrungbinh>=7){
        danhgia="Học sinh khá"
    } else if(diemtrungbinh>=5){
        danhgia="Học sinh trung bình"
    } else {
        danhgia="Học sinh yếu"
    }
    console.log(`${student.name} is ${student.age} years old.
Average score: ${diemtrungbinh} --> ${danhgia}
Best subject: ${subjectMax} (${max})
Weakest subject: ${subjectMin} (${min})`);
}

getStudentSummary({
  name: "Dev",
  age: 20,
  listMonhoc: [
    { subject: "Math", score: 9 },
    { subject: "English", score: 7.5 },
    { subject: "Physics", score: 6 },
    { subject: "Literature", score: 8.5 }
  ]
}
)