import React from 'react'
import { AppBar, Tabs , Tab, Typography, Box, Grid } from "@material-ui/core"
import modules from '../../../../data/Modules';

const Modules = (props) => {
  const { children, value, index, ...other } = props;
  const module = modules[value]
  return (
    <div>
        <Box p={3}>
          <Typography>{module.name}</Typography>
        </Box>
    </div>
  );
}

export default Modules
