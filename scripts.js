document.addEventListener("DOMContentLoaded", function() {
    const postForm = document.getElementById("postForm");
    const postsContainer = document.getElementById("postsContainer");

    // Predefined blog posts
    const predefinedPosts = [
        { title: "First Blog Post", content: "This is the content of the first blog post." },
        { title: "Second Blog Post", content: "This is the content of the second blog post." },
        { title: "Third Blog Post", content: "This is the content of the third blog post." },
        { title: "Fourth Blog Post", content: "This is the content of the fourth blog post." },
        { title: "Fifth Blog Post", content: "This is the content of the fifth blog post." },
        { title: "Sixth Blog Post", content: "This is the content of the sixth blog post." },
    ];

    function addPost(title, content) {
        const post = document.createElement("div");
        post.className = "post";

        const postTitle = document.createElement("h3");
        postTitle.textContent = title;

        const postContent = document.createElement("p");
        postContent.textContent = content;

        post.appendChild(postTitle);
        post.appendChild(postContent);

        postsContainer.appendChild(post);
    }

    // Add predefined posts
    predefinedPosts.forEach(post => {
        addPost(post.title, post.content);
    });

    // Handle form submission
    postForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;

        addPost(title, content);

        postForm.reset();
    });
});