import React,{useState} from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {
    
    const [Value, setValue] = useState('Inserta una busqueda')
    
    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    const handleOnFocus = () => {
        setValue('');
    };

    const handleOnContextMenu = (e) => {
        e.preventDefault();
        alert('Jsjsjs NO se puede copiar krnal')
    }


    const handleOnSubmit = (e) => {
        e.preventDefault();
        setCategories(categories => [Value, ...categories]);
        setValue('');
    }
    
    return (
        <form onSubmit={handleOnSubmit}>
            <input 
                type='text'
                value={Value}
                onChange={handleInputChange}
                onFocus={handleOnFocus}
                onContextMenu={handleOnContextMenu}
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}