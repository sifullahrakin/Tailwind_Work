// Get the modal and buttons elements
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');
const addHeadingBtn = document.getElementById('addHeading');
const addImageBtn = document.getElementById('addImage');
const addDescriptionBtn = document.getElementById('addDescription');
const previewSection = document.getElementById('preview');

let headerText = "";
let imageUrl = "";
let descriptionText = "";

// Function to show the modal
function showModal(title, content) {
  modalTitle.innerText = title;
  modalContent.innerHTML = content;
  modal.classList.remove('hidden');
}

// Function to close the modal
function hideModal() {
  modal.classList.add('hidden');
}

// Event listeners for the buttons
addHeadingBtn.addEventListener('click', function () {
  showModal('Header', '<input type="text" id="headerInput" class="border p-2 w-full">');
});

addImageBtn.addEventListener('click', function () {
  showModal('Image', '<input type="file" id="imageInput" class="p-2 w-full">');
});

addDescriptionBtn.addEventListener('click', function () {
  showModal('Description', '<textarea id="descriptionInput" class="border p-2 w-full h-32"></textarea>');
});

closeModal.addEventListener('click', function () {
  hideModal();
});


document.body.addEventListener('input', function (event) {
  const target = event.target;
  if (target.id === 'headerInput') {
    headerText = target.value;
    updatePreview();
  }
});

document.body.addEventListener('change', function (event) {
  const target = event.target;
  if (target.id === 'imageInput') {
    const file = target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        imageUrl = reader.result;
        updatePreview();
      };
      reader.readAsDataURL(file);
    }
  }
});

document.body.addEventListener('input', function (event) {
  const target = event.target;
  if (target.id === 'descriptionInput') {
    descriptionText = target.value;
    updatePreview();
  }
});

// Function to update the preview section
function updatePreview() {
  previewSection.innerHTML = '';

  if (headerText !== "") {
    const headerElement = document.createElement('h1');
    headerElement.innerText = headerText;
    previewSection.appendChild(headerElement);
  }

  if (imageUrl !== "") {
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    previewSection.appendChild(imageElement);
  }

  if (descriptionText !== "") {
    const descriptionElement = document.createElement('p');
    descriptionElement.innerText = descriptionText;
    previewSection.appendChild(descriptionElement);
  }
}
