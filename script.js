// Navigasi Smooth Scroll (Tambahan opsional karena CSS sudah mendukung)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efek Transparansi Navbar saat Scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#1a252f';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        nav.style.background = '#2c3e50';
        nav.style.boxShadow = 'none';
    }
});

// Pesan Log saat tombol beli diklik
document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', () => {
        console.log("Mengarahkan ke bagian kontak untuk pembelian...");
    });
});
