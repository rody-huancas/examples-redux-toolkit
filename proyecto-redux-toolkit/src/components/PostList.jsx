import { useSelector } from "react-redux";
import { selectAllPosts } from "../features/postSlice";
import { AddPost } from "./AddPost";
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButtons";

export const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const orderPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderPosts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>{post.id}</p>
      <TimeAgo timestamp={post.date} />
      <br />
      <PostAuthor userId={post.userId} />
      <br />
      <ReactionButtons post={post} />
    </div>
  ));
  return (
    <>
      <AddPost />

      <div>{renderedPosts}</div>
    </>
  );
};
