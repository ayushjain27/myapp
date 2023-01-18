import React, { useState, useEffect } from 'react';
import Chart from './Chart';
import Card from './Card';

const Cards = () => {
    const [data, setData] = useState([]);
    // const [read, setRead] = useState(false);
    // const [getCollapseProps, getToggleProps] = useCollapse({ read });
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const getDetails = async () => {
        // TODO : API Call
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        console.log(json);
        setData(json);
    }
    const getDetail = async () => {
        // TODO : API Call
        const response = await fetch("https://fakestoreapi.com/products/categories");
        const jsons = await response.json();
        console.log(jsons);
        setCategories(jsons);
    }

    const getCategoryCounts = () => {
        let categoryCounts = [];
        categories.forEach(category => {
            categoryCounts[category] = data.filter(product => product.category === category).length;
        });
        setFilteredCategories(categoryCounts)
        // console.log(setFilteredCategories);
        console.log(filteredCategories);
        setFilteredCategories(categoryCounts)
        // filteredCategories.forEach(categorye => {
        //     // categoryCounts[category] = data.filter(product => product.category === category).length;
        //     console.log("Ayush" + categorye);
        // });
    }

    useEffect(() => {
        getDetails();
        getDetail();
        // getCategoryCounts();
    }, [])

    return (
        <>
            {/* <div>
      
      <section ></section>
    </div> */}
            <div className="container">
                <div className="row">
                    {data.map((item, index) => {
                        return (
                            <>
                                <div className="col-3 mt-3">
                                    <Card key={index} item={item}/>                                    
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <button style={{ position: 'fixed', bottom: '10%', right: '0' }} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Analysis
            </button>
            <Chart filteredCategories={filteredCategories[0]} />
        </>
    )
}

export default Cards
