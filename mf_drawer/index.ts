// index.ts
document.querySelector('nav')?.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target as HTMLElement;
    if (target.tagName === 'A') {
        const route = target.getAttribute('href');
        loadContent(route);
    }
});

function loadContent(route: string | null) {
    const content = document.getElementById('content');
    if (route === '/videos') {
        content!.innerHTML = `<h1>Videos Page</h1>`;
    } else if (route === '/favorites') {
        content!.innerHTML = `<h1>Favorites Page</h1>`;
    }
}
