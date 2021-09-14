import React, { useContext } from "react";
import About from "./About";
import { DataContext } from "./DataProvider";
import Footer from "./Footer";

function Home() {
  const Products = useContext(DataContext);

  return (
    <div>
      <div className="product">
        {Products.map((product) => (
          <div className="card" key={product.id}>
            <img className="images" src={product.img} alt="" />

            <div className="card-body text-center">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.desciption}</p>
              <a href="/" className="btn btn-primary">
                Price :${product.price}
              </a>
            </div>
          </div>
        ))}

        <About />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
