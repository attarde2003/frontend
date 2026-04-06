import { useEffect, useState } from "react";
import axios from "axios";

function Grain() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:9090/api/posts");
      console.log("API DATA 👉", res.data); // DEBUG
      setPosts(res.data);
    } catch (err) {
      console.error("ERROR:", err);
    }
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 fw-bold">Available Crops</h2>

      {posts.length === 0 ? (
        <p className="text-center">No posts available</p>
      ) : (
        posts.map((post, index) => (
          <div className="card mb-4 shadow-sm" key={index}>

            {/* Farmer Info */}
            <div className="d-flex align-items-center p-3">
              <img
  src={
    post.farmer?.image
      ? `http://localhost:9090/images/${post.farmer.image}` // dynamic farmer image
      : "http://localhost:9090/images/Screenshot (15).png"      // fallback
  }
  alt="profile"
  className="rounded-circle me-3"
  width="60"
  height="60"
/>

              <div>
                <h6 className="mb-0">
                  {post.farmer?.first_name || "Farmer"}{" "}
                  {post.farmer?.last_name || ""}
                </h6>
                <small className="text-muted">
                  {post.farmer?.address || "Unknown location"}
                </small>
              </div>
            </div>

            {/* Post Image */}
            <img
              src={
                post.post_image
                  ? `http://localhost:9090/images/${post.post_image}`
                  : "http://localhost:9090/images/download.jpeg" // fallback static image
              }
              className="card-img-top"
              style={{ height: "400px", objectFit: "cover" }}
              alt="post"
            />

            {/* Content */}
            <div className="card-body">
              <p>{post.caption}</p>

              <p>
                <strong>Crop:</strong> {post.crop} &nbsp;
                <strong>Available:</strong> {post.available} KG &nbsp;
                <strong>Price:</strong> ₹{post.price}/Kg
              </p>

              <p>
                📞{" "}
                {post.farmer?.mobile ? (
                  <a href={`tel:${post.farmer.mobile}`}>
                    +91 {post.farmer.mobile}
                  </a>
                ) : (
                  "Not available"
                )}
              </p>

              <small className="text-muted">
                {post.onCreate
                  ? new Date(post.onCreate).toLocaleString()
                  : ""}
              </small>
            </div>

          </div>
        ))
      )}
    </div>
  );
}

export default Grain;