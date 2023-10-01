// script.js
const imageUpload = document.getElementById('image-upload');
const detailsContainer = document.getElementById('details-container');

imageUpload.addEventListener('change', (event) => {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
        const imageDetails = `
            <p>File Name: ${selectedImage.name}</p>
            <p>File Type: ${selectedImage.type}</p>
            <p>File Size: ${(selectedImage.size / 1024).toFixed(2)} KB</p>
            <p>Last Modified: ${selectedImage.lastModifiedDate.toLocaleDateString()}</p>
        `;
            // <p>File Location: ${displayImageLocation(selectedImage)}</p>
        detailsContainer.innerHTML = imageDetails;

    
    } else {
        detailsContainer.innerHTML = 'No image selected.';
    }
});

