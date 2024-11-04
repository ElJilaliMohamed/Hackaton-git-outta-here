const follower = document.getElementById('follower');

document.addEventListener('mousemove', (e) => {
    follower.style.left = `${e.pageX}px`;
    follower.style.top = `${e.pageY}px`;
});