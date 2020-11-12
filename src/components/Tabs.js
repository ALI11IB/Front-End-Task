import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export function TabPanel(props) {
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs({ value, handleTabChange }) {
  const classes = useStyles();

  return (
    <Tabs
      value={value}
      onChange={handleTabChange}
      aria-label="simple tabs example"
    >
      <Tab style={{ color: "#000000" }} label="Products" {...a11yProps(0)} />
      <Tab style={{ color: "#000000" }} label="Services" {...a11yProps(1)} />
      <Tab style={{ color: "#000000" }} label="Order" {...a11yProps(2)} />
      <Tab style={{ color: "#000000" }} label="Account" {...a11yProps(2)} />
    </Tabs>
  );
}
