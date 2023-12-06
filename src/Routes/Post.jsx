import { useLoaderData } from "react-router-dom";
import CommentForm from "../Components/CommentForm";
import { useEffect, useState } from "react";
import { fetchPostById } from "../api";

export default function Post() {
  const loadedPost = useLoaderData();
  const [post, setPost] = useState(loadedPost);

  useEffect(() => {
    document.title = `${post.title}`;
  }, [post.title]);

  return (
    <div className="post-page">
      <h1>{post.title}</h1>
      <h5>{post.description}</h5>
      <h4>By {post.user.name}</h4>
      <p>{post.body}</p>
      <br></br>
      <h3>Comments</h3>
      <ol>
        {post.comments.map((comment) => {
          return (
            <li key={comment.id}>
              {comment.body} | Posted by <b>{comment.userName}</b>
            </li>
          );
        })}
      </ol>

      <CommentForm
        postId={post.id}
        onSubmitCommentForm={() => {
          fetchPostById(post.id).then((post) => {
            setPost(post);
          });
        }}
      />
    </div>
  );
}
