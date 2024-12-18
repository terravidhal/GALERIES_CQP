export function createModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'imageModal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
             <div class="cont">
               <img id="modalImage" src="" alt="">
               <div class="modal-info">
                   <h2 id="modalTitle"></h2>
                   <p id="modalDetails"></p>
               </div>
            </div>
        </div>
    `;
    
    return modal;
}

export function openModal(image) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDetails = document.getElementById('modalDetails');
    
    modalImg.src = image.src;
    modalImg.alt = image.title;
    modalTitle.textContent = image.title;
    modalDetails.innerHTML = `
        <p>Color: ${image.color}</p>
        <p>Size: ${image.size}</p>
        <p>Added: ${image.dateAdded}</p>
    `;
    
    modal.classList.add('show');
}

export function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('show');
}