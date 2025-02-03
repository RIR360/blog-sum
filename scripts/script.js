const blogs = [
    {
        image: "images/blog1.jpg",
        title: "First Blog Post",
        date: "March 1, 2024",
        link: "blogs/sample.html"
    },
    {
        image: "images/blog2.jpg",
        title: "Second Blog Post",
        date: "March 5, 2024",
        link: "blogs/blog2.html"
    },
    // Add more blogs here
];

createCards();

function createCards() {
    const container = document.getElementById('cardsContainer');
    
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