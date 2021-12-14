import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "../../../styles/Home.module.css";

function ListHeader() {
  return (
    <Box sx={{ pt: 3, textAlign: "center" }}>
      <img
        src="http://human-total.com/wp-content/uploads/2020/04/logo-6w.png"
        width="222"
        height="35"
        className={styles.loginLogo}
      />
      <Typography
        className={styles.loginTitle}
        variant="h6"
        component="h6"
        sx={{ fontWeight: "bold" }}
      >
        <span style={{ fontStyle: "italic" }}>Pick-up service</span>{" "}
        Reservation​
      </Typography>
    </Box>
  );
}

export default ListHeader;
