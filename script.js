const projectItems = document.querySelectorAll(".project-item");
const previewImage = document.getElementById("preview-image");

projectItems.forEach((item) => {
  // Change preview image on hover
  item.addEventListener("mouseover", () => {
    const imageSrc = item.getAttribute("data-image");
    previewImage.src = imageSrc;
  });

  // Navigate to project page on click
  item.addEventListener("click", () => {
    const link = item.getAttribute("data-link");
    window.location.href = link;
  });
});
