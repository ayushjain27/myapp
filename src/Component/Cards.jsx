import React, { useState, useEffect } from 'react'
import Chart from './Chart';

const Cards = () => {
    const [data, setData] = useState([]);
    const getDetails = async () => {
        // TODO : API Call
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        console.log(json);
        setData(json);
    }

    useEffect(() => {
        getDetails();
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    {data.map((item) => {
                        return (
                            <>
                                <div className="col-3 mt-3">
                                    <div class="card" style={{ border: '2px solid black', borderRadius: '12' }}>
                                        <div style={{ border: '2px solid black' }}>
                                            <img style={{ height: '50%' }} src={item.image} class="card-img-top" alt="..." />
                                            <span class="badge rounded-pill bg-success">{item.category}</span>
                                        </div>
                                        <div class="card-body">
                                            <p class="card-text">{item.description}</p>
                                            <p class="card-title">{item.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <button style={{position:'fixed', bottom: '10%', right: '0'}} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Analysis
            </button>
            <Chart />
        </>
    )
}

export default Cards
