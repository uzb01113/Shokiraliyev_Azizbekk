document.addEventListener('DOMContentLoaded', function() {
    fetch('/galary.json')
        .then(response => response.json())
        .then(images => {
            const galleryContainer = document.getElementById('Gallery');
            images.forEach(image => {
                galleryContainer.innerHTML += `
                    <div class="gallery-item">
                        <a href="${image.image}" target="_blank">
                            <img src="${image.thumbnail}" alt="Thumbnail">
                            <div class="caption">${image.caption}</div>
                        </a>
                    </div>
                `;
            });
        })
        .catch(error => console.error('Error loading the gallery:', error));
  });