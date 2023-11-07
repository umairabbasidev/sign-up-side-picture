import React from "react";
import LockIcon from "@mui/icons-material/Lock";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
// import img from './img'
// import Image from './img'
import mountainImage from "./img/mountain.jpg";
// import backgroundImage from   "./img/mountain.jpg";
import Paper from "@mui/material/Paper";

function SignUp() {
  return (
    <>
      <Grid container justifyContent="space-between" >
        <Grid item sm={6} sx={{ height: "100vh", display: { xs: 'none', sm: 'flex' } }}  className="img">
          <img src={mountainImage} alt="" width="100%" height="100%" />
        </Grid>

        <Grid item sm={6} p={2} boxShadow="rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px">
          <Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="white"
              width={40}
              height={40}
              borderRadius="50%"
              margin="auto"
              sx={{ backgroundColor: "purple" }}
            >
              <LockIcon />
            </Box>

            <Typography variant="h6" gutterBottom>
              Sign up
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" gap={4}>
            <TextField
              id="outlined-password-input"
              label="Password *"
              type="password"
              autoComplete="current-password"
            />

            <TextField
              // id="outlined-password-input"
              label="Email Address *"
              type="password"
              autoComplete="current-password"
            />
          </Box>

          <Box display="flex" alignItems="center">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
            />
          </Box>

          {/* <Box sx={{backgroundColor:"red", width:"20rem" }} > */}
          <Button variant="contained" size="medium" fullWidth>
            Large
          </Button>

          {/* </Box> */}

          <Box display="flex" justifyContent="space-between" gap={1} pt={3} flexWrap="wrap">
            <Link variant="body2" href="#">Forgot password?</Link>
            <Link variant="body2" href="#">Don't have an account? Sign Up?</Link>
          </Box>
          <Box paddingTop={4}>
            <Typography variant="body2" gutterBottom>
              Copyright © <Link href="#"> Your Website</Link> 2023.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default SignUp;
