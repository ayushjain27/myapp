import React, { useState, useEffect } from 'react'

const Category = (props) => {
    const [data, setData] = useState([]);
    const getDetails = async () => {
        // TODO : API Call
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        let value=props.cate;
        console.log(value);
        const filterCategory= json.filter((values)=>{
            return values.category.includes(value);
        })
        console.log(filterCategory);
        setData(filterCategory);
    }

    useEffect(() => {
        getDetails();
        // getCategoryCounts();
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
        </>
    )
}

export default Category
