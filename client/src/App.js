import React, { useState } from 'react'
import axios from 'axios'

export default function App() {
  const [file, setfile] = useState("") //path of the file
  const uploadFileHandler = async () => {
    console.log(file)
    // const response = await axios.post("")
    // console.log(response.data)
  }
  const downloadFileHandler = async () => {
    console.log(file)
    const response = await axios.post("")
    console.log(response.data)
  }
  return (
    <div>
      <input type="file" onChange={(e) => setfile(e.target.value)} />
      <button onClick={() => uploadFileHandler()}>Upload</button>
      <button onClick={() => downloadFileHandler()}>Download</button>
    </div>
  )
}
