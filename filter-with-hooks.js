import React, { useState } from "react";

const Products = ["Thumps Up", "Limca", "Sprite", "Pepsi", "Slice", "Coke"];

const FilterWithHooks = () => {

    const [searchValue, setSearchValue] = useState("");


    const handleChange = (e) => {
        setSearchValue(e.target.value);
        }
  

    const searchText = (e) => {
        const list = Products.map();
        console.log(list);
    }


return (<>
        <center>
        <input type="text" onChange={handleChange}/>
        <button onClick={(e)=>{searchText(searchValue)}}>Search Text</button>
        </center>


        <ul>
              {Products.map((item) => {
                  return (<div key={item}>
                  <li> {item} </li>
                  </div>)
                  })}

                </ul>
                
       

            </>);



};

export default FilterWithHooks;





  