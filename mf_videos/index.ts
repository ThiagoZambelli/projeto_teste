// index.ts
import axios from 'axios';

const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('search') as HTMLInputElement;
const videosDiv = document.getElementById('videos');

searchButton?.addEventListener('click', async () => {
    const query = searchInput.value;
    const response = await axios.get(`http://localhost:3000/search?q=${query}`);
    const videos = response.data;
    videosDiv!.innerHTML = videos.map((video: any) => `
        <div class="video">
            <h3>${video.snippet.title}</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>
            <button data-id="${video.id.videoId}" class="favorite">☆</button>
        </div>
    `).join('');
});

videosDiv?.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('favorite')) {
        // Adicionar/Remover favorito e atualizar contador
    }
});
