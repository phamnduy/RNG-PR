import React from "react";
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Header from '../Header/Header'
import VietLot from '../VietLot/index'
import ThuDo from '../ThuDo/index'

const useStyles = makeStyles({
    root: {
      width: 500,
    },
  });
  
const HomeContainer = styled.div(({ theme }) => ({
    // display: "flex",
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    minHeight: '100vh',
    width: '375px'
}));

const NavContainer = styled.div(() => ({
    width: '100%'
}))

const CustomBottomNavigation = styled(BottomNavigation)(() => ({
    width: '375px !important',
    minHeight: '56px',
    position: 'fixed',
    zIndex: 999,
    bottom: 0,
    background: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop:' 1px solid #E1E1E1',
    paddingLeft: '4px',
    paddingRight: '4px',
}))

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}
const Home = () => {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);
    const [bottomValue, setBottomValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <HomeContainer>
            <Header title='WINLUCK'></Header>
            <NavContainer>
                <AppBar position="static">
                    <Tabs
                        centered
                        value={value}
                        onChange={handleChange}
                        aria-label="simple tabs example"
                    >
                        <Tab label="Item One" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                   <VietLot/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ThuDo/>
                </TabPanel>
            </NavContainer>
            <CustomBottomNavigation
                value={bottomValue}
                onChange={(event, newValue) => {
                    setBottomValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction href='/Home' label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </CustomBottomNavigation>
        </HomeContainer>
    );
};

export default Home