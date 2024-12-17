document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("typing-text");
  const text = "Halo, saya Jasa"; // Ubah teks sesuai keinginan Anda
  let index = 0;

  function typeText() {
    if (index < text.length) {
      textElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, 150); // Kecepatan ketikan (dalam milidetik)
    }
  }

  typeText();
});
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar"); 
  const aboutSection = document.querySelector("#about"); 
  
  window.addEventListener("scroll", function () {
    const rect = aboutSection.getBoundingClientRect(); 
    if (rect.top <= 0 && rect.bottom >= 0) {
      navbar.classList.add("navbar-about"); 
    } else {
      navbar.classList.remove("navbar-about"); 
    }
  });
});

// Pilih elemen gambar di section about
const aboutImage = document.querySelector('.about-image');

// Buat Intersection Observer
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
  if (entry.isIntersecting) {
    aboutImage.classList.add('show'); // Tambahkan class untuk memulai animasi
  } else {
    aboutImage.classList.remove('show'); // Hapus class jika keluar dari viewport
  }
});
});

// Observer mengamati elemen gambar
observer.observe(aboutImage);


// Pilih elemen teks di section about
const aboutContent = document.querySelector('.about-content');

// Buat Intersection Observer
const observer1 = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
  if (entry.isIntersecting) {
    aboutContent.classList.add('show'); // Tambahkan class show untuk memulai animasi
  } else {
    aboutContent.classList.remove('show'); // Hapus class jika keluar dari viewport
  }
});
});

// Observer mengamati elemen teks
observer1.observe(aboutContent);


// Pilih semua elemen service-card
const serviceCards = document.querySelectorAll('.service-card');

// Buat Intersection Observer
const observer2 = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('show'); // Tambahkan class 'show' jika elemen terlihat
  } else {
    entry.target.classList.remove('show'); // Hapus class jika keluar viewport
  }
});
});

// Pasang observer ke setiap service-card
serviceCards.forEach((card) => {
observer2.observe(card);
});


// Animasi saat elemen masuk viewport
const portfolioItems = document.querySelectorAll(".portfolio-item");

const observer3 = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add("show");
  } else {
    entry.target.classList.remove("show");
  }
});
});

portfolioItems.forEach((item) => {
observer3.observe(item);
});