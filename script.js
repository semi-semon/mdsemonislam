// ===============================
// AUTO POST DATA (EDIT HERE ONLY)
// ===============================

const posts = [
  {
    title: "The Bridge Between Dreams",
    excerpt: "A lonely walk, a river, and thoughts that refused to sleep.",
    link: "post1.html"
  },
  {
    title: "মৃত্যু এবং বিদায়",
    excerpt: "নীরবতা, একাকীত্ব, আর বিদায়ের অনুভূতি।",
    link: "post2.html"
  }
  {
    title:"Selective Sinners",
    excerpt: "Selective Sinners, Judge",
      link: "post3.html"
  }
];

// ===============================
// AUTO RENDER POSTS
// ===============================

const container = document.getElementById("post-container");

if (container) {
  posts.forEach(post => {
    const card = document.createElement("a");
    card.className = "card";
    card.href = post.link;

    card.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
    `;

    container.appendChild(card);
  });
}
