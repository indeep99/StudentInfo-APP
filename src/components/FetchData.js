import React, {useState, useEffect} from 'react';
import axios from "axios";
import StudentDisplay from './StudentDisplay';


export default function FetchData() {
    const url ='https://api.hatchways.io/assessment/students';

    const [studentData, setStudentData] = useState('');

    const [filteredStudent, setFilteredStudent] = useState("");

    const [filteredTag, setFilteredTag] = useState("");

    // let list = [];

    const searchTag = (tags) => {
        // console.log("Tags "+ tags.taglist);
        // console.log("\n")
        // console.log(studentData)

        // // let output = studentData;
        // console.log(output)
        // // list = output;
        // console.log(list);
        // // setFilteredStudent(output);
        // console.log(filteredStudent);
        // studentData.map((data, index) => {
        //     if(data.id == tags.id) {
        //         data = tags;
        //         // console.log("inside fuck marc");
        //         // console.log(data);
        //     }

        // })
        // // setStudentData(output);
        // // setFilteredTag(output);
        // // setFilteredStudent(output);
        // // setStudentData(output);
        // // console.log(studentData);
        // setStudentData(studentData);
        // setFilteredTag(output);
        // console.log(studentData);        
    }

    useEffect(() => {
        getStudents();
    }, []);

    const getStudents = () => {
        axios.get(url)
        .then((response) => {
            // console.log(response.data);
            // console.log("again");
            const studentList = response.data.students;
            // console.log(studentList)
            setStudentData(studentList);
            setFilteredStudent(studentList);
            // return response.data.students
        })
    }
    
    const searchTagStudent = (tag) => {
        let output = [];
        let bol = false;
        // console.log(studentData);
        output = studentData.filter((data) => {
            // console.log(data);
            // console.log(data.taglist.has("hello"));
            if (tag === "") {
                return data;
            } else {
                if (data.taglist != undefined) {
                    data.taglist.filter((dataTag) => {
                        // console.log(dataTag);
                        if (dataTag.search(tag) > -1) {
                            console.log('in');
                            console.log(dataTag);
                            console.log(tag);
                            // return dataTag;
                            console.log(dataTag.search(tag));
                            console.log("\n");
                            bol = true;
                        }
                    });
                }
                if (bol === true) {
                    bol = false;
                    return data;
                }
            }

            
        });

        console.log(output);

        setFilteredStudent(output);
        // console.log(studentData);

    }

    const searchStudent = (name) => {
        // console.log(name);

        let output = [];
        // console.log(list)
        // console.log(filteredStudent);
        // console.log(filteredTag);
        // console.log(studentData);
        output = studentData.filter((data) => {
            // console.log(data);
            let fullName = data.firstName + " " + data.lastName;
            // console.log(fullName);

            if (fullName.search(name) != -1) {
                // console.log(fullName.search(name))
                console.log(fullName.search(name))
                console.log(fullName)
                console.log(name)
                console.log("\n")
                return data
            }
            // return fullName.search(name) != -1;
        });
        console.log(output)
        // setStudentData(output);
        setFilteredStudent(output);
        // setStudentData(output);
        // console.log(studentData);
        // console.log(filteredStudent);
        // console.log("fuck marc " + name );
    }

    return (
        <StudentDisplay studentData={filteredStudent} input={searchStudent} tags={searchTag} inputTag={searchTagStudent}/>
        
    )
        
    

}


