import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Login.module.css";

import { authLogin } from "../../redux/auth/authAction";
import { setLocalData } from "../../utils/localStorage";
const Login = () => {
  const { authData } = useSelector((state) => state.auth);
  console.log(authData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showEmailValid, setShowEmailValid] = useState(false);
  const [showPasswordValid, setShowPasswordValid] = useState(false);
  const [showEmailRequired, setShowEmailRequired] = useState(false);
  const [showPasswordRequired, setShowPasswordRequired] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailValid = /\S+@\S+/;
  const handleSubmit = () => {
    if (email.trim() === "") {
      setShowEmailRequired(true);
    } else if (email.trim() !== "") {
      setShowEmailRequired(false);
    }
    if (password.trim() === "") {
      setShowPasswordRequired(true);
    } else if (password.trim() !== "") {
      setShowPasswordRequired(false);
    }

    if (emailValid.test(email) && password.length >= 4) {
      console.log(email, password);
      setLocalData('userMail', email);
      navigate('/dashboard')
      setShowEmailValid(false);
      setShowPasswordValid(false);
    } else if (emailValid.test(email)) {
      setShowPasswordValid(true);
      setShowEmailValid(false);
    } else if (password.length >= 4) {
      setShowPasswordValid(false);
      setShowEmailValid(true);
    } else {
      setShowPasswordValid(true);
      setShowEmailValid(true);
    }
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#63DAFB",
      },
      secondary: {
        main: "#282C34",
      },
    },
  });

  useEffect(() => {
    dispatch(authLogin());
  }, [dispatch]);

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
        }}
        id={styles.mainLoginComponent}
      >
        <Box id={styles.loginContBox}>
          <Box style={{ textAlign: "center" }}>
            <img src="/logo192.png" alt="Seeder" style={{ width: "90px" }} />
          </Box>
          <Box style={{ textAlign: "center", marginTop: "15px" }}>
            <Typography variant="h4" gutterBottom component="div">
              Login to your account
            </Typography>
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": {
                width: "60%",
              },
            }}
            autoComplete="off"
            style={{ textAlign: "center", marginTop: "45px" }}
          >
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              style={{ textAlign: "left", paddingLeft: "20%" }}
            >
              Email
            </Typography>

            <ThemeProvider theme={theme}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="email"
                InputLabelProps={{ shrink: false }}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </ThemeProvider>
            {showEmailRequired ? (
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                style={{
                  textAlign: "left",
                  paddingLeft: "20%",
                  color: "red",
                  fontWeight: "700",
                }}
              >
                Email Required
              </Typography>
            ) : showEmailValid ? (
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                style={{
                  textAlign: "left",
                  paddingLeft: "20%",
                  color: "red",
                  fontWeight: "700",
                }}
              >
                Invalid Email
              </Typography>
            ) : null}
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              style={{
                textAlign: "left",
                paddingLeft: "20%",
                marginTop: "35px",
              }}
            >
              Password
            </Typography>
            <ThemeProvider theme={theme}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="password"
                InputLabelProps={{ shrink: false }}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </ThemeProvider>
            {showPasswordRequired ? (
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                style={{
                  textAlign: "left",
                  paddingLeft: "20%",
                  color: "red",
                  fontWeight: "700",
                }}
              >
                Password Required
              </Typography>
            ) : showPasswordValid ? (
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                style={{
                  textAlign: "left",
                  paddingLeft: "20%",
                  color: "red",
                  fontWeight: "700",
                }}
              >
                Invalid Password
              </Typography>
            ) : null}
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                sx={{
                  height: "57px",
                  fontWeight: "600",
                  textTransform: "capitalize",
                  fontSize: "18px",
                  mt: "20px",
                }}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
            </ThemeProvider>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
