import { Input } from 'antd';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPokemonSearcherList } from '../slices/dataSlice';

const Searcher = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        dispatch(setPokemonSearcherList(value));
    }, [value]);


    return <Input.Search value={value} onChange={onChange} placeholder='Search...' style={{ marginBottom: 10 }} />
}

export default Searcher;