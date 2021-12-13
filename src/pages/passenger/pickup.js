import { Container } from "@mui/material";
import React from "react";
import ListHeader from "../../components/passenger/ListHeader";
import LocationBox from "../../components/passenger/LocationBox";

function pickup() {
  return (
    <Container
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: "rgb(32, 56, 100)",
      }}
    >
      <ListHeader />
      <LocationBox />
    </Container>
  );
}

export default pickup;
