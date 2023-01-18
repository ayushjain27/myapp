import React, { useState, useEffect } from 'react'
import Chart from './Chart';

const Cards = () => {
    const [data, setData] = useState([]);
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
            <button onClick={getCategoryCounts} type="button" class="btn btn-primary">
                Click
            </button>
            <div className="container">
                <div className="row">
                    {data.map((item) => {
                        return (
                            <>
                                <div className="col-3 mt-3">
                                    <div class="card" style={{ border: '2px solid black', borderRadius: '12' }}>
                                        <div style={{ border: '2px solid black' }}>
                                            <img style={{ objectFit: 'contain', height: '200px' }} src={item.image} class="card-img-top" alt="..." />
                                            <span class="badge rounded-pill bg-success">{item.category}</span>
                                        </div>
                                        <div class="card-body">
                                            <p class="card-text">{item.description ? item.description.slice(0, 150) : ""}...</p>
                                            <p class="card-title">{item.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <button style={{ position: 'fixed', bottom: '10%', right: '0' }} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Analysis
            </button>
            <Chart filteredCategories={filteredCategories[0]}/>
        </>
    )
}

export default Cards
