import React, { useState } from 'react';
import useCollapse from 'react-collapsed';

const Card = ({item}) => {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
  return (
    <>
        <div class="card" style={{ border: '2px solid black', borderRadius: '12' }}>
                                        <div style={{ border: '2px solid black' }}>
                                            <img style={{ objectFit: 'contain', height: '200px' }} src={item.image} class="card-img-top" alt="..." />
                                            <span class="badge rounded-pill bg-success">{item.category}</span>
                                        </div>
                                        <div class="card-body">
                                            <p class="card-text">{item.description.substring(0, 150)}</p>
                                            <p class="card-text" {...getCollapseProps()}>{item.description.substring(150)}</p>
                                            <button
                                                {...getToggleProps({
                                                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                                                })}
                                            >
                                                {isExpanded ? 'Read Less' : 'Read More'}
                                            </button>
                                            <span class="badge bg-danger">{item.price}</span>
                                        </div>
                                    </div>
    </>
  )
}

export default Card
