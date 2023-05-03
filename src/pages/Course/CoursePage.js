import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import image_learn from "./../../assets/imageslearn.png";
import styles from "./styles";
import Wrapper from "../../components/Wrapper";
import MyBreadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CurrentStatus from "../../components/CurrentStatus/CurrentStatus";
import CourseDescription from "../../components/CourseDescription/CourseDescription";
import LearnCourse from "../../components/LearnCourse/LearnCourse";
import CourseContent from "../../components/CourseContent/CourseContent";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Courses from "../../components/Courses/Courses";

const CoursePage = () => {
  return (
    <Box sx={{ pt: "90px" }}>
      <Wrapper>
        <Box>
          <Typography variant="h1" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>
          <MyBreadcrumbs />
        </Box>
        <Box sx={styles.wrapper}>
          <Box sx={styles.wrapperLeftBlock}>
            <Box component="img" src={image_learn} sx={styles.img} />
            <CurrentStatus />
            <CourseDescription />
            <LearnCourse />
            <CourseContent />
          </Box>
          <Box>
            <CourseDetails />
            <Courses />
          </Box>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default CoursePage;
