import React, { useState, useEffect } from 'react'
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";
ChartJs.register(
    Tooltip, Title, ArcElement, Legend
);

const data={
    datasets:[{
        data:[10,20,30,40],
        backgroundColor:['Green','Yellow','Blue', 'Red'],
    }],
    labels:['Green','Yellow','Blue', 'Red']
}

const Chart = (props) => {
    console.log(props.filteredCategory);
    const [data, setData] = useState({
        datasets: [{
            data: [10, 20, 30, 40],
            backgroundColor: ['Green', 'Yellow', 'Blue', 'Red'],
        }],
        labels: ['Green', 'Yellow', 'Blue', 'Red'],
    });
    useEffect(() => {
        const fetchData = () => {
            fetch("https://fakestoreapi.com/products/categories").then((data) => {
                const res = data.json();
                return res;
            }).then((res) => {
                console.log("data", res);
                const label = [];
                // const datam = [];
                for (var i of res) {
                    label.push(i);
                    // datam.push(i);
                }
                console.log("d", label);
                // console.log("Ase", datam);
                setData({
                    datasets: [{
                        data: [props.filteredCategory,20,30,40],
                        backgroundColor: ['Green', 'Yellow', 'Blue', 'Red'],
                    }],
                    labels: label,
                })
            }).catch(e => {
                console.log("error", e);
            })
        }
        fetchData();
    }, [])
    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <Doughnut data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Chart
