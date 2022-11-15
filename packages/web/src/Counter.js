import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, fetchPosts } from "@ie/api-call";

export function Counter() {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);

  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;

  if (postStatus === "loading") {
    content = <p> Loading... </p>;
  } else if (postStatus === "succeeded") {
    // Sort posts in reverse chronological order by datetime string
    content = <p>{posts[0].posts[0].title}</p>;
  } else if (postStatus === "failed") {
    content = <div> {error} </div>;
  }

  return <div>{content}</div>;
}
