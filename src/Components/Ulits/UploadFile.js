import React, { useState } from "react";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";
const UploadFile = ({ setfile }) => {
  const handleComplete = (files) => {
    const file = files[0];
    setfile(file?.originalFile?.file);
    console.log(file);

    files.forEach((file) => {
      console.log(
        `Uploaded file: ${file.name} (${file.type}, ${file.size} bytes)`
      );
    });
  };
  const handleUpload = (file, response) => {
    setfile((prevState) => [...prevState, file]);
  };
  const uploader = Uploader({
    apiKey: "free",
    on: {
      upload: handleUpload,
    }, // Get production API keys from Upload.io
  });

  // Configuration options: https://upload.io/uploader#customize
  const options = { multi: true };
  return (
    <div>
      <UploadButton
        uploader={uploader}
        options={options}
        onComplete={handleComplete}
      >
        {({ onClick }) => <h5 onClick={onClick}>Add a file...</h5>}
      </UploadButton>
    </div>
  );
};

export default UploadFile;
