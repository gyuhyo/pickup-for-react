import { Container, Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { mapState, okLocationState } from "../../atoms/MapOpen";

function LocationBox(props) {
  const setMapOpen = useSetRecoilState(mapState);
  const { start, end } = useRecoilValue(okLocationState);

  useEffect(() => {
    console.log(start);
  }, [start]);

  return (
    <Container sx={{ mt: 2, p: 0 }}>
      <Typography sx={{ color: "#fff", fontSize: 14, ml: 1 }}>
        Pick-up 예약하기
      </Typography>
      <Box sx={{ mt: 1, p: 2, backgroundColor: "#fff", borderRadius: 2 }}>
        <Paper
          elevation={0}
          sx={{ color: start.addr !== "" ? "#000" : "#bbb", fontSize: 12 }}
          onClick={() => {
            props.setStartAndEnd("start");
            setMapOpen(true);
          }}
        >
          <span style={{ fontSize: 7 }}>○</span>
          <span style={{ marginLeft: 22 }}>
            {start.addr !== "" ? start.addr : "출발지를 선택해주세요."}
          </span>
        </Paper>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Paper
          elevation={0}
          sx={{ color: end.addr !== "" ? "#000" : "#bbb", fontSize: 12 }}
          onClick={() => {
            props.setStartAndEnd("end");
            setMapOpen(true);
          }}
        >
          <span style={{ fontSize: 7 }}>○</span>
          <span style={{ marginLeft: 22 }}>
            {end.addr !== "" ? end.addr : "도착지를 선택해주세요."}
          </span>
        </Paper>
      </Box>
    </Container>
  );
}

export default LocationBox;
