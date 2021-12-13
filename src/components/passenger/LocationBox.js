import { Container, Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function LocationBox() {
  return (
    <Container sx={{ mt: 2, p: 0 }}>
      <Typography sx={{ color: "#fff", fontSize: 14, ml: 1 }}>
        Pick-up 예약하기
      </Typography>
      <Box sx={{ mt: 1, p: 2, backgroundColor: "#fff", borderRadius: 2 }}>
        <Paper elevation={0} sx={{ color: "#bbb", fontSize: 15 }}>
          <span style={{ fontSize: 7, writingMode: "vertical-lr" }}>○</span>
          <span style={{ marginLeft: 22 }}>출발지를 선택해주세요.</span>
        </Paper>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Paper elevation={0} sx={{ color: "#bbb", fontSize: 15 }}>
          <span style={{ fontSize: 7, writingMode: "vertical-lr" }}>○</span>
          <span style={{ marginLeft: 22 }}>도착지를 선택해주세요.</span>
        </Paper>
      </Box>
    </Container>
  );
}

export default LocationBox;
