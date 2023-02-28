import { useState } from "react";
import "./NewOrder.css";


export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Déclarer un accident</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Images</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[1])}
          />
            <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[2])}
          />
        </div>
        <div className="addProductItem">
          <label>Type de véhicule</label>
          <input
            name="title"
            type="text"
            placeholder="Voiture"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="description..."
            onChange={handleChange}
          />
        </div>
        <button className="addProductButton">
          Envoyer
        </button>
      </form>
    </div>
  );
}
