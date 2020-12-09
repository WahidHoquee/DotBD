import React from "react"
import { Tabs, Tab } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Module from "./Modules"
import modules from '../../../data/Modules';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}))

const Apps = ({ sector, price }) => {
  const classes = useStyles()
  const moduleNames = Object.keys(modules)
  const [value, setValue] = React.useState('start')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {
            moduleNames.map(moduleName => (
                <Tab key={moduleName} label={moduleName.toUpperCase()} value={moduleName} />
            ))
        }
      </Tabs>
      <Module value={value} index={0}/>
    </div>
  )
}
export default Apps
