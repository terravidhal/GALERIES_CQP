export function filterImages(images, filterType, filterValue) {
    if (filterValue === 'all') return images;
    
    return images.filter(image => image[filterType] === filterValue);
}

export function sortByDate(images, ascending = true) {
    return [...images].sort((a, b) => {
        const dateA = new Date(a.dateAdded);
        const dateB = new Date(b.dateAdded);
        return ascending ? dateA - dateB : dateB - dateA;
    });
}