import { Button, Divider, Drawer, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import Login from "../components/commons/Login";
import Register from "../components/commons/Register";
import CloseIcon from "@mui/icons-material/Close";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState({ open: false, type: null });
  let [drawerTypeComponent, setDrawerTypeComponent] = useState(null);

  const handleDrawerOpen = (type) => {
    if (type === "register") {
      setDrawerTypeComponent(<Register drawerOpen={setDrawerOpen} />);
    } else {
      setDrawerTypeComponent(<Login drawerOpen={setDrawerOpen} />);
    }

    console.log(drawerTypeComponent);
    setDrawerOpen({ open: true, type: type });
  };

  return (
    <div className={styles.container}>
      <Paper className={styles.loginInfo} elevation={4}>
        <div className={styles.loginLogoAndTitle}>
          <img
            src="http://human-total.com/wp-content/uploads/2020/04/logo-6w.png"
            width="222"
            height="35"
            className={styles.loginLogo}
          />
          <Typography className={styles.loginTitle} variant="h5">
            HTS에 오신 것을 환영합니다.
          </Typography>
        </div>
      </Paper>
      <Box className={styles.loginBox}>
        <Button
          variant="contained"
          onClick={() => handleDrawerOpen("register")}
        >
          회원가입
        </Button>
        <Button
          variant="outlined"
          sx={{ mt: 2 }}
          onClick={() => handleDrawerOpen("login")}
        >
          로그인
        </Button>
      </Box>
      <Paper className={styles.footer}>서비스 문의 ☎1577-1161</Paper>
      <Drawer
        anchor="bottom"
        open={drawerOpen.open}
        onClose={() => setDrawerOpen({ open: false, type: null })}
        elevation={10}
        sx={{
          [`& .MuiDrawer-paper`]: {
            height: drawerOpen.type === "register" ? "90vh" : "40vh",
            p: 2,
          },
        }}
      >
        <CloseIcon onClick={() => setDrawerOpen({ open: false, type: null })} />
        <Divider sx={{ mt: 1 }} />
        {drawerTypeComponent}
      </Drawer>
    </div>
  );
}
