document.addEventListener('DOMContentLoaded', () => {
    // Fetch the text file from the same directory
    fetch('top_artists.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.text();
        })
        .then(text => {
            // Get the content div where the text will be displayed
            const contentDiv = document.getElementById('top-artists-content');
            if (contentDiv) {
                // Display the text content as is, preserving new lines and spaces
                contentDiv.textContent = text;
            } else {
                console.error('The div element with id "top-artists-content" does not exist.');
            }
        })
        .catch(error => {
            console.error('Error fetching the text file:', error);
            const contentDiv = document.getElementById('top-artists-content');
            if (contentDiv) {
                contentDiv.textContent = 'Failed to load content.';
            }
        });
});
