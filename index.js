// Function to fetch posts from API and display them
const fetchPosts = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/v1/posts/getposts');
    const data = await response.json();

    // Check if data is valid
    if (data.length > 0) {
      const postsGrid = document.getElementById('posts-grid');

      // Loop through each post and create the HTML content
      data.forEach(post => {
        const postCard = document.createElement('div');
        postCard.classList.add('post-card');

        postCard.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.content.substring(0, 150)}...</p> <!-- Preview first 150 characters -->
          <a href="/posts/${post.id}" class="read-more">Read More</a>
        `;

        // Append the new post card to the grid
        postsGrid.appendChild(postCard);
      });
    } else {
      const postsGrid = document.getElementById('posts-grid');
      postsGrid.innerHTML = '<p>No posts found.</p>';
    }
  } catch (error) {
    console.error('Error fetching posts:', error);
    const postsGrid = document.getElementById('posts-grid');
    postsGrid.innerHTML = '<p>Error loading posts.</p>';
  }
};

// Call the function to fetch and display posts
fetchPosts();

