import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import './AllGrades.css';
import DisplayGrades from './DisplayGrades';

  export default function AllGrades (props) {
    
    const [isCollapsed, setCollapsed] = useState(false);

    const isClicked = () => {
        setCollapsed(true);
        props.setCheck(isCollapsed)
    }

    const isNotClicked = () => {
        setCollapsed(false);
        props.setCheck(isCollapsed)
    }

    return (
        <div>
            {isCollapsed && <button class="btn sign"><FontAwesomeIcon class="symbol" icon={faMinus} onClick={isNotClicked}/></button>}
            {!isCollapsed && <button class="btn sign"><FontAwesomeIcon class="symbol" icon={faPlus} onClick={isClicked}/></button>}
            {isCollapsed && <DisplayGrades allGrades={props.sendInfo}></DisplayGrades>}
        </div>    
    )
  }