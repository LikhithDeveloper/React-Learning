import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]); // State to hold fetched posts
  const [newPost, setNewPost] = useState({
    user: "",
    club: "",
    post: "",
    title: "",
    image: null, // For file upload
  }); // State for form data
  const apiUrl = "http://127.0.0.1:8000/posts/";

  // Fetch posts when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setNewPost({ ...newPost, image: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user", newPost.user);
    formData.append("club", newPost.club);
    formData.append("post", newPost.post);
    formData.append("title", newPost.title);
    if (newPost.image) {
      formData.append("image", newPost.image);
    }

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      setPosts([data, ...posts]); // Prepend the new post to the list
      setNewPost({ user: "", club: "", post: "", title: "", image: null }); // Reset form
    } catch (error) {
      console.error("Error submitting post:", error.message);
    }
  };

  // Handle like button click
  const handleLike = async (postId) => {
    const postToUpdate = posts.find((post) => post.id === postId);
    const updatedPost = {
      ...postToUpdate,
      likes: postToUpdate.likes + 1, // Increment likes
    };

    try {
      const response = await fetch(`${apiUrl}${postId}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPost),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      // Update the likes locally in the UI
      setPosts(posts.map((post) => (post.id === postId ? updatedPost : post)));
    } catch (error) {
      console.error("Error updating likes:", error.message);
    }
  };

  return (
    <div className="App">
      <h1>Posts</h1>

      {/* Form for creating a new post */}
      <form className="post-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user">User ID:</label>
          <input
            type="number"
            id="user"
            name="user"
            value={newPost.user}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="club">Club ID:</label>
          <input
            type="number"
            id="club"
            name="club"
            value={newPost.club}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="post">Post Content:</label>
          <textarea
            id="post"
            name="post"
            value={newPost.post}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Create Post</button>
      </form>

      {/* Display fetched posts */}
      <div className="data">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="post">
              <h2>{post.title}</h2>
              <p>{post.post}</p>
              <p>Likes: {post.likes}</p>
              <button onClick={() => handleLike(post.id)}>Like</button>
              {post.image && (
                <img src={post.image} alt={post.title} className="post-image" />
              )}
              <small>User ID: {post.user}</small> <br />
              <small>Club ID: {post.club}</small>
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
}

export default App;
