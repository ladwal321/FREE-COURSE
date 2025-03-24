const courses = {
    "Mathematics": ["Rakesh Yadav", "Gagan Sir", "Arun Sharma", "Rajesh Kumar", "Deepak Tiwari", "Vivek Kumar"],
    "English": ["Neetu Singh", "S. P. Bakshi", "Plinth to Paramount", "A. K. Singh", "Hari Mohan Prasad", "R. S. Aggarwal"],
    "General Knowledge": ["Dr. Vikas Divyakirti", "Aman Sharma", "Manohar Pandey", "Ravi Singh", "K. K. Sharma", "Lucent's GK"],
    "Science": ["Dr. H. C. Verma", "P. Bahadur", "S. Chand", "Lakhmir Singh", "M. P. Singh", "Amit Gupta"],
    "History": ["Bipin Chandra", "R. S. Sharma", "Satish Chandra", "K. L. Khurana", "Sumit Sarkar", "Romila Thapar"],
    "Reasoning": ["Arun Sharma", "R. S. Aggarwal", "Kiran Institute", "S. P. Bakshi", "B. S. Sijwali", "Lucent Reasoning"]
};


const teacherVideos = {
    "Rakesh Yadav": "video1.mp4",
    "Gagan Sir": "video2.mp4",
    "Arun Sharma": "video3.mp4",
    "Rajesh Kumar": "video4.mp4",
    "Deepak Tiwari": "video5.mp4",
    "Vivek Kumar": "video6.mp4",

    "Neetu Singh": "video1.mp4",
    "S. P. Bakshi": "video2.mp4",
    "Plinth to Paramount": "video3.mp4",
    "A. K. Singh": "video4.mp4",
    "Hari Mohan Prasad": "video5.mp4",
    "R. S. Aggarwal": "video5.mp4",

    "Dr. Vikas Divyakirti": "video2.mp4",
    "Aman Sharma": "video2.mp4",
    "Manohar Pandey": "video3.mp4",
    "Ravi Singh": "video4.mp4",
    "K. K. Sharma": "video5.mp4",
    "Lucent's GK": "video6.mp4",  // ✅ Added comma here

    "Dr. H. C. Verma": "video1.mp4",
    "P. Bahadur": "video2.mp4", 
    "S. Chand": "video3.mp4",
    "Lakhmir Singh": "video4.mp4", 
    "M. P. Singh": "video5.mp4", 
    "Amit Gupta": "video6.mp4",

    "Bipin Chandra": "video1.mp4", 
    "R. S. Sharma": "video2.mp4", 
    "Satish Chandra": "video3.mp4", 
    "K. L. Khurana": "video4.mp4",
    "Sumit Sarkar": "video5.mp4",
    "Romila Thapar": "video6.mp4",

    "Arun Sharma": "video1.mp4",
    "R. S. Aggarwal": "video2.mp4", 
    "Kiran Institute": "video3.mp4", 
    "S. P. Bakshi": "video4.mp4", 
    "B. S. Sijwali": "video5.mp4", 
    "Lucent Reasoning": "video6.mp4"
};



function generateCourse() {
    const courseBox = document.getElementById("courseBox");
    Object.keys(courses).forEach(course => {
        const courseItem = document.createElement("div");
        courseItem.classList.add("course-item");
        courseItem.innerText = course;
        courseItem.onclick = () => {
            localStorage.setItem("selectedCourse", course);
            window.location.href = "course.html";
        };
        courseBox.appendChild(courseItem);
    });
}

function loadCourseDetails() {
    const course = localStorage.getItem("selectedCourse");
    document.getElementById("courseTitle").innerText = course;

    const teacherBox = document.getElementById("teacherBox");
    teacherBox.innerHTML = courses[course].map(teacher =>
        `<div class="teacher-item" onclick="selectTeacher('${teacher}', '${course}')">${teacher}</div>`
    ).join("");
}

function selectTeacher(teacher, course) {
    localStorage.setItem("selectedTeacher", teacher);
    localStorage.setItem("selectedCourse", course);
    window.location.href = "teacher.html";
}

function loadTeacherDetails() {
    const teacher = localStorage.getItem("selectedTeacher");
    document.getElementById("teacherName").innerText = teacher;
    document.getElementById("courseName").innerText = `Teaching ${localStorage.getItem("selectedCourse")}`;
}

function showVideos() {
    const teacher = localStorage.getItem("selectedTeacher");
    const videoFile = teacherVideos[teacher] || "default.mp4";

    const videoContainer = document.getElementById("videoContainer");
    videoContainer.innerHTML = `
        <video id="teacherVideo" controls autoplay>
            <source src="videos/${videoFile}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
    videoContainer.style.display = "block";
}

function goBack() {
    window.history.back();
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("courseBox")) generateCourse();
    if (document.getElementById("courseTitle")) loadCourseDetails();
    if (document.getElementById("teacherName")) loadTeacherDetails();
});
