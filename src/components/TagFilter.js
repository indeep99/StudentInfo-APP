import React, {useState} from 'react';

export default function TagFilter (props) {
    // const [name, setName] = useState('');

    const tagSearch = (event) => {
        let info = event.target.value;
        // console.log(info)
        // props.getTag(info);
        props.getTag(info)

    }


    //onChange={ (event) => studentSearch(event) }
    return (
        <input type="text" class="inputField" placeholder="Search by tag" onChange={ (event) => tagSearch(event) }></input>
    )
        

}