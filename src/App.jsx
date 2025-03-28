import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CatImage from "./Components/CatImage";

function App() {
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      console.log(response.data);
      setImg(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <CatImage img={img} loading={loading} fetchImages={fetchImages} />
    </>
  );
}

export default App;
