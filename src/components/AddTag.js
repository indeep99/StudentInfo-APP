import React, {useState} from 'react';
import './AddTag.css';

export default function AddTag (props) {
    const [tag, setTag] = useState([]);
    const [outputTag, setOutputTag] = useState("");
    
    const updatedTag = [];

    const testEnter = (ele) => {

        let output = "";
        if (ele.keyCode == 13) {
            if (props.sendStudents["taglist"] === undefined) {
                props.sendStudents["taglist"] = [];
            } 
            
            props.sendStudents["taglist"].push(ele.target.value);
            props.updatingList(props.sendStudents);
            for (var i = 0; i < props.sendStudents["taglist"].length; i++) {
                output += "<span class='tags'><p class='context'>"+props.sendStudents["taglist"][i]+"</p></span>";
                    // console.log(output);
            }

            setOutputTag(output);

                
            
           
           
        }
    }





    return (
        <div>
            {/* {console.log(tagsOut)} */}
            <div dangerouslySetInnerHTML={{__html: outputTag}} />
            <input type="text" class="tagField" placeholder="Add a Tag"  onKeyDown={testEnter} ></input>          
        </div> 
    )
        
        
        

}