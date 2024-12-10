const fetchSinglePost = async () => {
  // Get the post ID from the query string
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id'); // Get the 'id' parameter

  if (!postId) {
    document.getElementById('single-post-container').innerHTML = '<p>Invalid post ID.</p>';
    return;
  }

  try {
    // Fetch the post data from the API
    const response = await fetch(`http://localhost:8080/api/v1/posts/getpost/${postId}`);
    const post = await response.json();

    // Check if the post exists
    if (post) {
      document.getElementById('single-post-title').innerText = post.title;
      document.getElementById('single-post-content').innerText = post.content;
    } else {
      document.getElementById('single-post-container').innerHTML = '<p>Post not found.</p>';
    }
  } catch (error) {
    console.error('Error fetching post:', error);
    document.getElementById('single-post-container').innerHTML = '<p>Error loading post.</p>';
  }
};

fetchSinglePost();
