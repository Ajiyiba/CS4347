// Employee-specific JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Location selector change event
    const locationSelector = document.getElementById('location');
    if (locationSelector) {
        locationSelector.addEventListener('change', function() {
            const selectedLocation = this.value;
            
            // In a real application, this would fetch data for the selected location
            console.log(`Selected location: ${selectedLocation}`);
            
            // You might reload tables with location-specific data
            // For now, we'll just show an alert
            if (selectedLocation !== 'all') {
                alert(`Data filtered for location: ${selectedLocation}`);
            } else {
                alert('Showing data for all locations');
            }
        });
    }

    // Detail button actions
    const detailButtons = document.querySelectorAll('.btn-primary');
    detailButtons.forEach(button => {
        if (button.textContent.includes('Details') || button.textContent.includes('Edit')) {
            button.addEventListener('click', function() {
                // Find the row data
                const row = this.closest('tr');
                const rowData = Array.from(row.cells).map(cell => cell.textContent.trim());
                
                // In a real application, this would open a modal with details or navigate to a details page
                alert(`Details for ${rowData[0]}`);
            });
        }
    });

    // Response buttons for resident requests
    const respondButtons = document.querySelectorAll('button');
    respondButtons.forEach(button => {
        if (button.textContent.includes('Respond')) {
            button.addEventListener('click', function() {
                // Find the row data
                const row = this.closest('tr');
                const rowData = Array.from(row.cells).map(cell => cell.textContent.trim());
                
                // In a real application, this would open a response form
                const response = prompt(`Enter response for request from ${rowData[0]}:`);
                if (response) {
                    alert(`Response sent to ${rowData[0]}`);
                }
            });
        }
    });

    // Delete buttons
    const deleteButtons = document.querySelectorAll('.btn-danger');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the row data
            const row = this.closest('tr');
            const name = row.cells[0].textContent.trim();
            
            // Confirm deletion
            if (confirm(`Are you sure you want to delete ${name}?`)) {
                // In a real application, this would send a delete request to the server
                // For now, we'll just remove the row from the table
                row.remove();
                alert(`${name} has been deleted.`);
            }
        });
    });

    // Add New buttons
    const addButtons = document.querySelectorAll('.card-header button');
    addButtons.forEach(button => {
        if (button.textContent.includes('Add New')) {
            button.addEventListener('click', function() {
                const cardHeader = this.closest('.card-header');
                const title = cardHeader.querySelector('h2').textContent;
                
                // In a real application, this would open a form to add a new item
                alert(`This would open a form to add a new ${title.replace('Management', '').trim()}`);
            });
        }
    });

    // Handle updating status of requests
    const statusCells = document.querySelectorAll('td[data-filter="status"]');
    statusCells.forEach(cell => {
        if (cell.textContent.includes('Pending') || cell.textContent.includes('In Progress')) {
            cell.addEventListener('click', function() {
                const statusOptions = ['Pending', 'In Progress', 'Completed'];
                const currentStatus = this.textContent.trim();
                const currentIndex = statusOptions.indexOf(currentStatus);
                const nextIndex = (currentIndex + 1) % statusOptions.length;
                const nextStatus = statusOptions[nextIndex];
                
                // Update the status
                this.textContent = nextStatus;
                
                // Apply appropriate styling
                if (nextStatus === 'Completed') {
                    this.innerHTML = '<span class="status status-success">Completed</span>';
                } else if (nextStatus === 'In Progress') {
                    this.innerHTML = '<span class="status status-pending">In Progress</span>';
                } else {
                    this.innerHTML = '<span class="status">Pending</span>';
                }
            });
        }
    });
}); 