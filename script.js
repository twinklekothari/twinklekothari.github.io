window.addEventListener('scroll', () => {
    const btn = document.getElementById('backToTop');
    btn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
