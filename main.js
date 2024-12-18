import { images } from './src/data/images.js';
import { filterImages, sortByDate } from './src/utils/filters.js';
import { createGalleryItem } from './src/components/GalleryItem.js';
import { createModal, closeModal } from './src/components/Modal.js';


const gallery = document.getElementById('gallery');
const colorFilters = document.getElementById('colorFilters');
const sizeFilters = document.getElementById('sizeFilters');
const dateFilters = document.getElementById('dateFilters');

let currentImages = [...images];
let activeColorFilter = 'all';
let activeSizeFilter = 'all';

// Initialize modal
document.body.appendChild(createModal());

// Close modal when clicking outside or on close button
document.addEventListener('click', (e) => {
    const modal = document.getElementById('imageModal');
    if (e.target === modal || e.target.classList.contains('close-button')) {
        closeModal();
    }
});

// Close modal with escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Initialize gallery
function renderGallery(imagesToRender) {
    gallery.innerHTML = '';
    imagesToRender.forEach(image => {
        gallery.appendChild(createGalleryItem(image));
    });
}

// Apply filters
function applyFilters() {
    let filteredImages = [...images];
    
    if (activeColorFilter !== 'all') {
        filteredImages = filterImages(filteredImages, 'color', activeColorFilter);
    }
    
    if (activeSizeFilter !== 'all') {
        filteredImages = filterImages(filteredImages, 'size', activeSizeFilter);
    }
    
    currentImages = filteredImages;
    renderGallery(currentImages);
}

// Event listeners for color filters
colorFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        colorFilters.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        activeColorFilter = e.target.dataset.filter;
        applyFilters();
    }
});

// Event listeners for size filters
sizeFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        sizeFilters.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        activeSizeFilter = e.target.dataset.filter;
        applyFilters();
    }
});

// Event listeners for date sorting
dateFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        dateFilters.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        const sortOrder = e.target.dataset.sort;
        const sortedImages = sortByDate(currentImages, sortOrder === 'oldest');
        renderGallery(sortedImages);
    }
});

// Initialize the gallery
renderGallery(images);