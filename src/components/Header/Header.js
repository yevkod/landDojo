import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import logo_desk from '../../assets/logo.svg';
import logo_mob from '../../assets/logo-mobile.svg';
import shopping_cart from '../../assets/shopping-cart.svg';
import user_info from '../../assets/user-info.svg';
import Drawer from "../Drawer";
import Navbar from "../Navbar";
import SearchInput from "../SearchInput";

const styles = {
    appBar: (theme) => ({
        background: theme.palette.purpleDark.main,
        boxShadow: "none",
        [theme.breakpoints.up("lg")]: {
            p: "40px 0",
        },
    }),
};

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <AppBar position="static" sx={styles.appBar}>
            <Container maxWidth="xl">
                <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
                <Toolbar disableGutters>
                    <Typography
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        <Box component="img" src={logo_desk} />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            color="inherit"
                            onClick={() => setIsDrawerOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Typography
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                        }}
                    >
                        <Box component="img" src={logo_mob} />
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", lg: "flex" },
                            pl: "80px",
                        }}
                    >
                        <Navbar white />
                    </Box>
                    <SearchInput />
                    <Box sx={{ display: "flex" }}>
                        <IconButton>
                            <Box component="img" src={shopping_cart} />
                        </IconButton>
                        <IconButton sx={{ xs: "none", lg: "block" }}>
                            <Box component="img" src={user_info} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
