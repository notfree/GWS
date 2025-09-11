document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', event => {
        document.querySelectorAll('.sidebar a').forEach(l => l.classList.remove('active'));
        event.target.classList.add('active');
    });
});
