export function createGalleryItem(image) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('data-color', image.color);
    item.setAttribute('data-size', image.size);
    item.setAttribute('data-date', image.dateAdded);
    
    item.innerHTML = `
        <img src="${image.src}" alt="${image.title}">
        <div class="info">
            <h3>${image.title}</h3>
            <p>Color: ${image.color}</p>
            <p>Size: ${image.size}</p>
            <p>Added: ${image.dateAdded}</p>
        </div>
    `;
    
    // Add click event to open modal
    item.addEventListener('click', () => {
        const modal = document.getElementById('imageModal');
        if (modal) {
            import('./Modal.js').then(({ openModal }) => {
                openModal(image);
            });
        }
    });
    
    return item;
}