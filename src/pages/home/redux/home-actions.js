import { postsList } from "../api/home-api";
import { setPosts, setPostsLoading } from "./home-action-types";

function fetchPosts() {
  return (dispatch) => {
    dispatch(setPostsLoading(true));

    return postsList().then((res) => {
      dispatch(setPosts(res.result));
      dispatch(setPostsLoading(false));
    });
  };
}

export { fetchPosts };

