import React, {useState, useEffect} from 'react';
import Card from './Card';
import StudentFilter from './StudentFilter';
import AllGrades from './AllGrades';
import DisplayGrades from './DisplayGrades';
import TagFilter from './TagFilter';
import AddTag from './AddTag';

export default function StudentDisplay(props) {
    // console.log(props.studentData)

const [toggle, setToggle] = useState(false);
const [taglistTest, setTagListTest] = useState ([]);

const studentAvg = (grades) => {
    var avg = 0;
    var total = 0;
    for(var i = 0; i < grades.length; i++) {
        total += parseInt(grades[i])
    }
    avg = total/grades.length;
    return avg;
}


const toggleDiv = (check) => {
    console.log(check)
    setToggle(check);
}


const getNameHandler = (name) => {
    props.input(name);
}

const getTagHandler = (tagName) => {
    props.inputTag(tagName);
}


const extendTag = (list) => {
    // console.log("List " +list.firstName);
    list["taglist"] = [];
    // console.log(list)
}

// const tagListTest = [];

const tagList = (e) => {
    // console.log("fuck Marc"+e);
    props.tags(e)
    console.log(e)
    // setTagListTest(e);
    // console.log(taglistTest);
}


const studentInfo = (props) => {
    // console.log("Props " +props.length);
    const {studentData} = props;


    console.log(props);
    if (studentData.length > 0) {
        return (
            studentData.map((info, index) => {
                return (
                    <Card>
                        
                        <div>
                            
                            <img class="profile" src={info.pic}></img>
                            <h1 class="content name">{info.firstName} {info.lastName}</h1>
                            <div class="card-info">
                                <p class="content">E-Mail: {info.email}</p>
                                <p class="content">Company: {info.company}</p>
                                <p class="content">Skill: {info.skill}</p>
                                <p class="content">Average: {studentAvg(info.grades)}%</p> 
                            </div>
                            <AllGrades setCheck={toggleDiv} sendInfo={info.grades}></AllGrades>
                            <AddTag sendStudents={info} updatingList={tagList} ></AddTag>
                            {/* <Tag listOfTags={info}></Tag> */}

                        </div>
                         
                    </Card>
                )
            })
        )
    } else {
        return (<h1>No Data</h1>)
    }

}
  

    return (
        <div>
            {/* {console.log(props.studentData)} */}
            <StudentFilter getName={getNameHandler}></StudentFilter>

            <TagFilter getTag={getTagHandler}></TagFilter>
            {studentInfo(props)}
        </div>
        // <div></div>
    )


}