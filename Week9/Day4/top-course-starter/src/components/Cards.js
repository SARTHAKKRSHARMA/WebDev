import { useState } from "react";
import Card from "./Card"

export default function Cards(props)
{
    let category = props.category;
    let courses = props.courses;
    let allCourses = [];
    const [likedCourses, setLikedCourses] = useState([]);
    const getCourses = () => 
    {
        if(category === "All")
        {
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => allCourses.push(course));
            })
        }
        else
        {
            courses[category].forEach((course) => allCourses.push(course));
        }

        return allCourses;       
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">   
            {
                getCourses().map((course) => {
                return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
                })
            }
        </div>
    )
}   