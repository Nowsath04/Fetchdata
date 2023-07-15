import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    // used to axios

    axios("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });

    // used to fetch
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((data) => data.json())
    //   .then((data) => {
    //     console.log(data);
    //     setPosts(data);
    //   });
  }, []);

  return (
    <div className="App">
      <div className="container">
        {posts
          ? posts.map((post) => {
              return (
                <div class="card mt-3">
                  <div class="card-header">{post.id}</div>
                  <div class="card-body">
                    <h5 class="card-title">{post.title}</h5>
                    <p class="card-text">{post.body}</p>
                  </div>
                </div>
              );
            })
          : "Loading..."}
        )
      </div>
    </div>
  );
}
