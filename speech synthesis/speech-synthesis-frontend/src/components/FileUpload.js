// import React, { useState } from "react";
// import axios from "axios";
// import ProgressBar from "./ProgressBar";

// function FileUpload() {
//   const [file, setFile] = useState(null);
//   const [uploadProgress, setUploadProgress] = useState(0);

//   const handleUpload = async () => {
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/files/upload",
//         formData,
//         {
//           onUploadProgress: (progressEvent) => {
//             const percentCompleted = Math.round(
//               (progressEvent.loaded * 100) / progressEvent.total
//             );
//             setUploadProgress(percentCompleted);
//           },
//         }
//       );
//       alert("File uploaded successfully: " + response.data.filePath);
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//       <button onClick={handleUpload}>Upload</button>
//       <ProgressBar progress={uploadProgress} />
//     </div>
//   );
// }

// export default FileUpload;
