// Function to display applications as a table
document.getElementById("viewApplicationsBtn").addEventListener("click", function() {
    const applicationsTableContainer = document.getElementById("applicationsTableContainer");
    applicationsTableContainer.innerHTML = ""; // Clear previous content

    if (applications.length === 0) {
        applicationsTableContainer.innerHTML = "<p>No applications submitted yet.</p>";
        return;
    }

    // Create a table element
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // Define table headers
    const headers = ["First Name", "Last Name", "Phone", "Email", "Address", "City", "State", "ZIP", "Resume", "Cover Letter"];
    
    // Populate the table header
    const headerRow = document.createElement("tr");
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    
    // Populate the table body with application data
    applications.forEach(application => {
        const row = document.createElement("tr");
        headers.forEach(key => {
            const cell = document.createElement("td");
            cell.textContent = application[key.toLowerCase().replace(/ /g, "")]; // Access values by keys
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });

    // Append thead and tbody to the table
    table.appendChild(thead);
    table.appendChild(tbody);

    // Append the table to the container
    applicationsTableContainer.appendChild(table);
});
