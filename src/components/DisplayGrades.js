import React from 'react';
export default function DisplayGrades (props) {
    console.log(props.compareToggle)


    // const testGrades = (grades) => {
    //     let output = "";
    //     for(var i = 0; i < grades.length; i++) {
    //         output += "Test " + parseInt(i + 1) + ": " + grades[i] + '\n'
    //         output += <p>Test {i+1}: {grades[1]}</p>
    //     } 
    //     return output;
    // }
    // const testGrade = props.allGrades.filter((grade) => { 
    //     console.log(grade)
    //     return<p>{grade}</p>;
    // }) 

    return (
        <div class="testGrades">
            {/* {testGrades(props.allGrades)} */}
            <p class="outGrades">Test 1: {props.allGrades[0]}</p>
            <p class="outGrades">Test 2: {props.allGrades[1]}</p>
            <p class="outGrades">Test 3: {props.allGrades[2]}</p>
            <p class="outGrades">Test 4: {props.allGrades[3]}</p>
            <p class="outGrades">Test 5: {props.allGrades[4]}</p>
            <p class="outGrades">Test 6: {props.allGrades[5]}</p>
            <p class="outGrades">Test 7: {props.allGrades[6]}</p>
            <p class="outGrades">Test 8: {props.allGrades[7]}</p>
        </div>    
    )
}