import React, { useState } from 'react'
import { AddCategory,GifGrid } from './components';
//UvT1mHj54DXs9cAKvMTANdQDPnrDdexT
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
           setCategories( [newCategory,...categories]);
    }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
        onNewCategory={ (event) =>onAddCategory(event)}
        />
            {categories.map( (category) => (
                    <GifGrid key={category} category={category}/>
                ))
            }
    </>
  )
}
