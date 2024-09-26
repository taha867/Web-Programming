// Declare a global array to hold application data
let applications = [];

// Function to handle form submission
document.getElementById("applicationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Collect form data
    const applicationData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zip: document.getElementById("zip").value,
        resume: document.getElementById("resume").files[0]?.name, // Get file name
        coverLetter: document.getElementById("coverLetter").value,
        education: document.getElementById("education").value,
        school: document.getElementById("school").value,
        major: document.getElementById("major").value,
        gradYear: document.getElementById("gradYear").value,
        jobTitles: document.getElementById("jobTitles").value,
        companyNames: document.getElementById("companyNames").value,
        employmentDates: document.getElementById("employmentDates").value,
        responsibilities: document.getElementById("responsibilities").value,
        skills: document.getElementById("skills").value,
        certifications: document.getElementById("certifications").value,
        startDate: document.getElementById("startDate").value,
        relocate: document.getElementById("relocate").value,
        schedule: document.getElementById("schedule").value,
        referenceName: document.getElementById("referenceName").value,
        referenceContact: document.getElementById("referenceContact").value,
        relationship: document.getElementById("relationship").value,
        reason: document.getElementById("reason").value,
    };

    // Push the application data to the applications array
    applications.push(applicationData);

    // Clear the form
    document.getElementById("applicationForm").reset();
});
