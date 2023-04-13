import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import PropertyList from '../components/PropertyList'

function Category() {
    const {category} = useParams();

    useEffect(() => {
        const windowPos = window.pageYOffset;
        if (windowPos > 0) {
            window.scrollTo(0, 0);
        }
    }, [])

    

  return (
    <div className='container'>
        <h5>{category}</h5>
        <PropertyList />
    </div>
  )
}

export default Category