import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from "../Components/Popular/Popular";

const Shop = () => {
  const [popular, setPopular] = useState([]);
  // const [newcollection, setNewCollection] = useState([]);

  const fetchInfo = () => {
    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => setPopular(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div>
      <Hero />
      <div className="absolute top-40 right-12">
        <div>
          <Popular data={popular} />
        </div>
      </div>
      <div className="absolute top-72 left-12">
      <h1 className="p-2 text-white text-3xl font-bold">Locate Us:</h1>      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5569.795031247538!2d78.14725564776161!3d11.278778490682365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babcf4d19fc9fc3%3A0x726a8f6116ffa2bb!2sLishanth%20Pet%20Industries%2C%20Water%20Preform%20manufacture%20in%20Tamilnadu%2C%20Preform%20in%20Namakkal!5e0!3m2!1sen!2sin!4v1715759732819!5m2!1sen!2sin"
        width="600"
        height="450"
        className="border-0 rounded-lg shadow-lg"

        // style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>  
    </div>
  );
};

export default Shop
