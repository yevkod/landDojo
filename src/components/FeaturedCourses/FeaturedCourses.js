import React from 'react';
import eye from '../../assets/eye.svg';
import styles from './styles';
import Typography from "@mui/material/Typography";
import {Box, Button, Divider} from "@mui/material";

const FeaturedCourses = () => {
    return (
        <Box>
            <Box sx={styles.wrapper}>
                <Box sx={styles.content}>
                    <Box sx={{pr: "20px"}}>
                        <Typography sx={styles.topTitle}>#Top Courses</Typography>
                        <Typography sx={styles.title}>Featured Courses</Typography>
                    </Box>
                    <Divider orientation="vertical" sx={styles.divider}/>
                    <Typography sx={styles.text}>
                        Online learning offers a new way to explore subjects you’re passionate about.
                    </Typography>
                </Box>
                <Button sx={styles.btn}>
                    {' '}
                    <Box component="img" src={eye}/>
                    view all
                </Button>
            </Box>
        </Box>
    );
};

export default FeaturedCourses;
