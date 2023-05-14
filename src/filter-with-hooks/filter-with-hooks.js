import React, { useState } from "react";
import pm from "./pm.css";

const Products = [
                    { category:"Cold-Drinks", name:"Thumps Up", price:"Rs. 20"},
                    { category:"Cold-Drinks", name:"Fanta", price:"Rs. 20"},
                    { category:"Cold-Drinks", name:"Limca", price:"Rs. 20"},
                    { category:"Cold-Drinks", name:"Sprite", price:"Rs. 20"},
                    { category:"Cold-Drinks", name:"Coca Cola", price:"Rs. 20"},
                    { category:"Hot-Snakes", name:"Vada Pav", price:"Rs. 25"},
                    { category:"Hot-Snakes", name:"Samosa", price:"Rs. 20"},
                    { category:"Hot-Snakes", name:"Dabeli", price:"Rs. 25"},
                    { category:"Hot-Snakes", name:"Frankie", price:"Rs. 30"},
                    { category:"Hot-Snakes", name:"Burger", price:"Rs. 50"},
                ];

const FilterWithHooks = () => {

    const [searchText, setSearchText] = useState("");


    const handleChange = (e) => {
        setSearchText(e.target.value);
        }
  


return (<>
        <center>
        <input className="pm" type="text" onChange={handleChange} placeholder="Search....." value={searchText} />
        </center>
        <ProductTable products={Products} searchText={searchText} />
        </>);

};

function ProductCategoryRow({ category }) {
    return (
      <tr className="tablecss">
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
  
  function ProductRow({ product }) {
    return (
      <tr className="tablecss">
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
  
  function ProductTable({ products, searchText }) {
    const rows = [];
    let lastCategory = null;
  
    products.forEach((product) => {

        if (product.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) 
        {
            return;
          }
      



      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });
  
    return (<center>
      <table border={"1px solid red"} >
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      </center>
    );
  }



export default FilterWithHooks;





  