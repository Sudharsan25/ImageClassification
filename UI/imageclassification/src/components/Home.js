import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./Home.css";

const Home = () => {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "200px" }} alt="preview" />
      </div>
    </div>
  ));

  const SubmitHandler = (files) => {
    console.log(files, "Submitted");
    navigate("predicted");
  };

  return (
    <div className="App">
      <h3>Businessmen Image Classification Project</h3>
      <Card variant="outlined" className="card">
        <CardContent>
          <List className="celebrity_list">
            <ListItem disablePadding className="celebrity_item">
              <img src="../../static/images/Elon Musk.jpg" alt="" />
              <ListItemText primary="Elon Musk" />
            </ListItem>
            <ListItem disablePadding className="celebrity_item">
              <img src="../../static/images/Jeff Bezos.jpg" alt="" />
              <ListItemText primary="Jeff Bezos" />
            </ListItem>
            <ListItem disablePadding className="celebrity_item">
              <img src="../../static/images/Steve Jobs.jpg" alt="" />
              <ListItemText primary="Steve Jobs" />
            </ListItem>
            <ListItem disablePadding className="celebrity_item">
              <img src="../../static/images/Mark Zuckerberg.jpg" alt="" />
              <ListItemText primary="Mark Zuckerberg" />
            </ListItem>
            <ListItem disablePadding className="celebrity_item">
              <img src="../../static/images/Larry Page.jpg" alt="" />
              <ListItemText primary="Larry Page" />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <div {...getRootProps()} className="droparea">
        <input {...getInputProps()} />

        <p className="text">
          <CloudUploadIcon />
          Drop or Upload here
        </p>
      </div>
      <button onClick={() => SubmitHandler(files)}>Classify</button>
    </div>
  );
};

export default Home;
