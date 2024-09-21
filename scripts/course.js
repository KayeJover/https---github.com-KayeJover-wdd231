// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Update the content of the elements with the corresponding ids
const currentYearElement = document.getElementById('currentyear');
if (currentYearElement) {
    currentYearElement.textContent = currentYear;
}

const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.textContent = 'Last Modification: ' + lastModifiedDate;
}

// Hamburger Icon
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// The courses array
const courses = [
    { subject: 'CSE 110', completed: false },  
    { subject: 'WDD 130', completed: true },  
    { subject: 'CSE 111', completed: true },  
    { subject: 'CSE 210', completed: false },  
    { subject: 'WDD 131', completed: true },  
    { subject: 'WDD 231', completed: true }  
];

// Function to display courses
function displayCourses(filter = 'all') {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = ''; // Clear the current list

    // Filter courses based on the selected filter (all, CSE, or WDD)
    const filteredCourses = courses.filter(course => {
        if (filter === 'all') return true;
        return course.subject.startsWith(filter); // Adjusted to match by subject prefix
    });

    // Dynamically create course cards and display them
    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');

        // Apply background color based on completion status
        if (course.completed) {
            courseCard.style.backgroundColor = 'brown';
        } else {
            courseCard.style.backgroundColor = 'gray';
        }

        // Display course subject
        courseCard.innerHTML = `
            <h3>${course.subject}</h3>`;

        // Append the course card to the course list
        courseList.appendChild(courseCard);
    });

    // Call function to update total credits (optional)
    displayTotalCredits();
}

// Function to display total credits
function displayTotalCredits() {
    const totalCredits = courses.reduce((total, course) => total + 2, 0); // Assuming each course is 2 credits
    document.getElementById('total-credits').textContent = `Total Credits: ${totalCredits}`;
}

// Event listeners for filtering
document.getElementById('show-all').addEventListener('click', () => displayCourses('all'));
document.getElementById('show-cse').addEventListener('click', () => displayCourses('CSE'));
document.getElementById('show-wdd').addEventListener('click', () => displayCourses('WDD'));


// Initial display of all courses
displayCourses();
