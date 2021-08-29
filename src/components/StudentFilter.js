import React, {useState} from 'react';
import './StudentFilter.css';

export default function StudentFilter (props) {
    const [name, setName] = useState('');

    const studentSearch = (event) => {
        let info = event.target.value;
        // console.log(info)


        props.getName(info);

    }

    return (
        <input type="text" class="inputField" placeholder="Search by Name" onChange={ (event) => studentSearch(event) }></input>
    )
        

}