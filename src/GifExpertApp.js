import React , {useState} from 'react';
import { AddCategory } from './componentss/AddCategory';
import { GifGrid } from './componentss/GifGrid';

const GifExpertApp = () => {

    const initialState = ['One Punch Man'];

    const [categories, setCategories] = useState(initialState);

    // const handleAgregar = () => {
    //     setCategories(cats => ['Evangelion', ...cats]);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory 
                setCategories={ setCategories }
            />
            <hr/>
                {
                    categories.map( category =>(
                        <GifGrid key={category} category={ category }/>
                    )) 
                }
        </>
    );
};

export default GifExpertApp;