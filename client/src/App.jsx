import "./App.css";
import { useEffect, useState } from "react";
// @mui/material @emotion/react @emotion/styled
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { styles } from "./styles.js";
// Can dispatch an action
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

function App() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  // Could add [dispatch, currentId] but doesn't seem like we need to for the app to update
  useEffect(() => {
    // Used to dispatch an action
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      {/* Top display bar */}
      <AppBar style={styles.appBar} position="static" color="inherit">
        {/* For textual elements */}
        <Typography
          style={{ ...styles.heading, marginTop: "10px" }}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img style={styles.image} src={memories} alt="memories" height="60" />
      </AppBar>

      {/* Posts and Form bar */}
      {/* Simple Animation */}
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            align-items="stretch"
            spacing={3}
          >
            {/* 12 is full width, 7 is half */}
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form setCurrentId={setCurrentId} currentId={currentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
