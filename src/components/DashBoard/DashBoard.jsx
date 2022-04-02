import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getLocalData } from '../../utils/localStorage';


export default function DashBoard() {

  const username = getLocalData('userMail')
  const theme = createTheme({
    typography: {
      fontFamily: "Proxima Nova",
    },
  });
  
  return (
    <Box sx={{ display: 'flex' }}>
      {/* eslint-disable no-restricted-globals  */}
      <AppBar
        position="fixed"
        sx={{ boxShadow: '0', height: '45px' }}
        style={{
          backgroundColor: 'blue',
          zIndex: '10000000000000000',
          backdropFilter: blur('54.3656px'),
        }}
      >
        <Toolbar
          sx={{
            height: '44px',
            ml: '1px',
            mt: '-7px',
            justifyContent: 'space-between',
          }}
        >
          <Stack direction="row">
            <a href="/dashboard">
              <Avatar
                sx={{ width: '100%', backgroundColor: 'white', borderRadius:'50%'}}
                src="/logo192.png"
                variant="square"
                alt="React-seeder"
              />
            </a>
          </Stack>
          <Box
            sx={{
              display: 'flex',
              width: '300px',
              mr: '25px',
              justifyContent: 'space-between',
              alignItems: 'center',
              m: '10px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'proxima-nova',
                  fontStyle: 'normal',
                  fontSize: '20px',
                  fontWeight: '600',
                  lineHeight: '16px',
                  letterSpacing: '-0.147911px',
                  color: 'white',
                  height: '16px',
                }}
              >
                {username}
              </Typography>
              
              
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "150px",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#FFFFFF",
          width: "80%",
          border: "1px solid #C2C2C2",
        }}
      >
        <Grid item xs={3} md={3} xl={3} />
        <Grid item xs={12} md={6} xl={6}>
          <Box
          // sx={{
          //   '& > :not(style)': {
          //     width: '100%',
          //     backgroundColor: 'white',
          //   },
          // }};
          >
            <Box sx={{ textAlign: "center", marginTop: "100px" }}>
              <img src="/logo192.png" alt="React-seeder" style={{ width: "90px" }} />
            </Box>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "22px",
                  lineHeight: "37px",
                  color: "#000000",
                  marginTop: "25px",
                  textAlign: "center",
                  width: "85%",
                  marginLeft: "30px",
                }}
              >
                <Typography variant="h4" gutterBottom component="div">
                  Welcome {username}
                </Typography>
              </Box>
            </ThemeProvider>
            
          </Box>
        </Grid>
        <Grid item xs={3} md={3} xl={3} />
      </Grid>
      
    </Box>
  );
}
