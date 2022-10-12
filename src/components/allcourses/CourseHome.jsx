import React from 'react';
import Back from "../common/back/Back";
import CoursesCard from './CoursesCard';
import OnlineCourse from './OnlineCourse';

const CourseHome = () => {
    return (
        <div>
            <Back title="Explorer Courses" />
            <CoursesCard />
            <OnlineCourse />
        </div>
    );
};

export default CourseHome;