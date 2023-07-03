import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { TextField, Button, Paper, Typography } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

// Get the current id

function Form({ currentId, setCurrentId }) {
  // If the id exists, find the post associated to it. Otherwise set this to null
  // Essentially, the ... button updates the currentId, and then we grab its state information if it exists here
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }

    clear();
  };

  // When the clear button is pressed
  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  const marginBottomValue = "15px";

  // If post was able to find the currentId from the redux state, then update postData
  // We have default grayed out values for the text, but they auto populate if the state is changed
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  return (
    <Paper style={styles.paper}>
      {/* {`${styles.root} ${styles.form}`} */}
      <form
        autoComplete="off"
        noValidate
        style={{ ...styles.form, ...styles.root["& .MuiInputBase-root"] }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Updating" : "Creating"} a Memory
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          style={{
            marginTop: "10px",
            marginBottom: marginBottomValue,
          }}
          fullWidth
          value={postData.creator}
          // Means keep everything from before but add this creator
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          style={{ marginBottom: marginBottomValue }}
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          style={{ marginBottom: marginBottomValue }}
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div style={styles.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          style={styles.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}

export default Form;
