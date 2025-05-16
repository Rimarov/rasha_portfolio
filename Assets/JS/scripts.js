function openLightbox(src) {
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = src;
  lightbox.classList.add("active");
}

function closeLightbox() {
  const lightbox = document.querySelector(".lightbox");
  lightbox.classList.remove("active");
}
