import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Grid, Box, Container, List, ListItem, ListItemText, Drawer, Button } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import * as creators from '../redux/actionCreators';
import heading from '../assets/main.jpg';
import logo from '../assets/logo.png';
import john from '../assets/john.jpg';
import act from '../assets/act.jpg';

const Header = (props) => {
  return <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" width="100%">
      <Box fontWeight="bold" paddingTop="20px" paddingBottom="20px" paddingX="0">
          <Box paddingBottom="5px" fontSize="30px" style={{ userSelect: 'none', textAlign: 'center' }}>{props.text}</Box>
          <Box width="65px" height="5px" margin="auto" bgcolor="#20a3e1"></Box>
      </Box>
  </Box>;
}


const Home = (props: any) => {
  const { userId } = props;
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className="home">
      <section className='navbar'>
        <div>
          <img className="logo-img" src={logo}></img>
        </div>
        <div className='name'>ACBCC</div>
        <Box flex={1}></Box>
        <div className='flex-center'>
          <div className='icon-block button' onClick={() => setOpenDrawer(true)}>
            <AppsIcon></AppsIcon>
          </div>
        </div>
      </section>
      <section className='heading' data-id={userId}>
        <Box position="relative" style={{ backgroundImage: `url(${heading})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', height: '750px' }} className="heading-block">
          <Box className="heading-title">
            <Box className="logo">LOGO</Box>
          </Box>
          <Button variant="contained" className="read-button">Read More</Button>
          <Box className="heading-text">
            <Box>Build encapsulated components that manage their own state, then compose them to make complex UIs</Box>
          </Box>
        </Box>
      </section>
      <section className='intro'>
        <Container maxWidth="lg">
          <Header text="Intoduction" />
          <Box width="100%" maxWidth="800px" margin="auto" boxShadow="0 0 5px 1px #2077a1" fontSize="24px" padding="15px" borderRadius="5px" style={{ background: '#b0d9f1' }}>
              Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected.
              Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected.
          </Box>
        </Container>
      </section>
      <section className="team-section">
        <Container maxWidth="lg">
          <Header text="Team" />
          <Grid container>
              <Grid item xs={12} lg={4}>
                  <Box className="team-card">
                      <Box className="image-block">
                          <img src={john} />
                      </Box>
                      <Box className="name">
                          John Wick
                      </Box>
                      <Box className="title">
                          Head of Security Department
                      </Box>
                  </Box>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Box className="team-card">
                  <Box className="image-block">
                      <img src={john} />
                  </Box>
                  <Box className="name">
                      John Wick
                  </Box>
                  <Box className="title">
                      Head of Security Department
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Box className="team-card">
                  <Box className="image-block">
                      <img src={john} />
                  </Box>
                  <Box className="name">
                      John Wick
                  </Box>
                  <Box className="title">
                      Head of Security Department
                  </Box>
                </Box>
              </Grid>
          </Grid>
        </Container>
      </section>
      <section className="activity-section">
        <Container maxWidth="lg">
          <Header text="Activities" />
          <Grid container spacing={1}>
              <Grid item xs={12} lg={6}>
                  <Box className="activity-card">
                      <Box className="image-block">
                          <img src={act} />
                      </Box>
                      <Box className="text">
                          <Box className="time-holder">
                              <Box>Time: 2022-03-04</Box>
                              <Box>Holder: John Smith</Box>
                          </Box>
                          <Box className="main-content">
                              React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes
                          </Box>
                      </Box>
                  </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                  <Box className="activity-card">
                      <Box className="image-block">
                          <img src={act} />
                      </Box>
                      <Box className="text">
                          <Box className="time-holder">
                              <Box>Time: 2022-03-04</Box>
                              <Box>Holder: John Smith</Box>
                          </Box>
                          <Box className="main-content">
                              React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes
                          </Box>
                      </Box>
                  </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                  <Box className="activity-card">
                      <Box className="image-block">
                          <img src={act} />
                      </Box>
                      <Box className="text">
                          <Box className="time-holder">
                              <Box>Time: 2022-03-04</Box>
                              <Box>Holder: John Smith</Box>
                          </Box>
                          <Box className="main-content">
                              React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes
                          </Box>
                      </Box>
                  </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                  <Box className="activity-card">
                      <Box className="image-block">
                          <img src={act} />
                      </Box>
                      <Box className="text">
                          <Box className="time-holder">
                              <Box>Time: 2022-03-04</Box>
                              <Box>Holder: John Smith</Box>
                          </Box>
                          <Box className="main-content">
                              React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes
                          </Box>
                      </Box>
                  </Box>
              </Grid>
          </Grid>
        </Container>
      </section>
      <section className='footer'>
        <Box className='name'>ACBCC</Box>
        <Box className='phone'>PH: 0411112222</Box>
        <Box className='email'>Email: aaaa.bbbb.cccc@gmail.com</Box>
      </section>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List style={{ width: '300px', position: 'relative', cursor: 'pointer' }}>
            {['Home', 'Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text} style={{ borderBottom: '1px solid #c9c9c9' }}>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
      </Drawer>
    </div>
  );
}

const mapStateToProps = (state: any) => state.main;
const mapDispatchToProps = creators;

export default connect(mapStateToProps, mapDispatchToProps)(Home);