import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Box from "@material-ui/core/Box"
import Details from "./Details/details"
import Container from "@material-ui/core/Container"
import { FiTarget,FiCommand, FiGift,  } from "react-icons/fi";
import { Grid } from "@material-ui/core"
import Title from '../../Utils/Title'
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  box: {
    padding: "100px",
    background: "linear-gradient(180deg,#fff,#eee)",
    boxShadow: "2px 2px 30px 0 rgba(0,0,0,.05)"
  },
  tabs:{
    backgroundColor: '#fff'
  },
  tab:{
    color: '#68676f',
    fontWeight: 500,
    fontSize: '14px',
    '&:hover':{
      color: theme.palette.primary.main,
    }
  },
  detailsIcon: {
    height:'50px',
    width:'50px',
    fontWeight:200,
    color: theme.palette.secondary.main,
  },
  iconCenter: {
    textAlign: 'center'
  },
}))

const Service = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box className={classes.box}>
      <Container fixed>
        <Title>Our Portfolio</Title>

        <div className={classes.root}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              centered
              variant="fullWidth"
              indicatorColor='primary'
              textColor='primary'
              className={classes.tabs}
            >
              <Tab label="Web Developement" {...a11yProps(0)} className={classes.tab}/>
              <Tab label="Software Developement" {...a11yProps(1)} className={classes.tab}/>
              <Tab label="Android Developement" {...a11yProps(2)} className={classes.tab}/>
              <Tab label="Digital Marketing" {...a11yProps(3)} className={classes.tab}/>
            </Tabs>
          </AppBar>
          <Details value={value} index={0}>
            <Grid container direction="column">
              <Grid item>
                <Box mb={4}>
                  <Grid container direction="row">
                    <Grid item xs={2} className={classes.iconCenter}>
                      <FiTarget className={classes.detailsIcon}/>
                    </Grid>
                    <Grid item xs={10}>
                      <h3>Empower Your Advisors</h3>
                      <p>
                        Pave the way for increased adoption of private alternatives by simplifying time-consuming paperwork and processes.
                      </p>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item>
                <Box mb={4}>
                  <Grid container direction="row">
                    <Grid item xs={2} className={classes.iconCenter}>
                      <FiCommand className={classes.detailsIcon}/>
                    </Grid>
                    <Grid item xs={10}>
                      <h3>Streamline Operations</h3>
                      <p>
                        Automate KYC, suitability, and capital activity in lock-step with your existing compliance protocol and operational infrastructure.
                      </p>
                    </Grid>
                  </Grid>
                </Box> 
              </Grid>
              <Grid item>
                <Box mb={4}>
                  <Grid container direction="row">
                    <Grid item xs={2} className={classes.iconCenter}>
                      <FiGift className={classes.detailsIcon}/>
                    </Grid>
                    <Grid item xs={10}>
                      <h3>Boost Productivity</h3>
                      <p>
                        Optimize advisor activity and field coverage via multi-layered analytics.
                      </p>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Details>
          <Details value={value} index={1}>
            Item Two
          </Details>
          <Details value={value} index={2}>
            Item Three
          </Details>
          <Details value={value} index={3}>
            Item Four
          </Details>
        </div>
      </Container>
    </Box>
  )
}
export default Service
