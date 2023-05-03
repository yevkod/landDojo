import React from 'react';
import whiteArrow from '../../assets/chevron-down-white.svg';
import { NavLink } from "react-router-dom";
import arrow from '../../assets/chevron-down.svg';
import styles from './styles';
import {Box, Link} from "@mui/material";

const pages = [
    {title: "home", arrow: false},
    {title: "About", arrow: false},
    {title: "Course", arrow: true},
    {title: "Page", arrow: true},
    {title: "Blog", arrow: true},
    {title: "Contact", arrow: false},
]

const Navbar = ({ white }) => {
    return (
        <Box sx={styles.navbar}>
            {pages.map((page) => (
                <Link
                    key={page.title}
                    component={NavLink}
                    to={page.title === "home" ? "/" : page.title}
                    sx={{
                        ...styles.link,
                        color: white ? "#fff" : "#000",
                        textTransform: "capitalize",
                    }}
                >
                    {page.title}
                    {page.arrow && (
                        <Box
                            sx={styles.arrow}
                            component="img"
                            src={white ? whiteArrow : arrow}
                        />
                    )}
                </Link>
            ))}
        </Box>
    );
};
export default Navbar;
