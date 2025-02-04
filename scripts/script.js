let blogs = [
    {
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*PtKvTh_tzXHUwUfaBOynPQ.jpeg",
        title: "First Blog Post",
        date: "March 1, 2024",
        link: "blogs/sample.html"
    }
    // Add more blogs here
];

createCards();

function createCards() {
    const container = document.getElementById('cardsContainer');

    blogs = blogs.slice(0, 50);

    blogs.forEach(blog => {
        const card = document.createElement('a');
        card.href = blog.link;
        card.className = 'card';
        card.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}">
            <div class="card-content">
                <h2>${blog.title}</h2>
                <p class="card-date">${blog.date}</p>
            </div>
        `;
        container.appendChild(card);
    });

}