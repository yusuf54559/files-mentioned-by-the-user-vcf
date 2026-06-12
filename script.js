// Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
const links = document.querySelectorAll('a, .project-card, .btn');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Follower effect
    setTimeout(() => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    }, 50);
});

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        follower.classList.add('hovered');
    });
    link.addEventListener('mouseleave', () => {
        follower.classList.remove('hovered');
    });
});

// Hide cursor when leaving window
document.addEventListener('mouseout', () => {
    cursor.style.display = 'none';
    follower.style.display = 'none';
});
document.addEventListener('mouseover', () => {
    cursor.style.display = 'block';
    follower.style.display = 'block';
});
