import React from "react";
import Post from "./Post/Post";
import { styles } from "./styles";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Posts({ setCurrentId }) {
  // Whole global state, can see values in reducers
  const posts = useSelector((state) => state.posts);

  // console.log(posts);
  return (
    // Create progress bar or put Grid in
    !posts ? (
      <CircularProgress />
    ) : (
      <Grid
        style={styles.mainContainer}
        container
        alignItems="stretch"
        spacing={3}
      >
        {posts.map((post) => (
          <Grid item key={post._id} xs={12} sm={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
}

export default Posts;
