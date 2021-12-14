import CloseIcon from "@mui/icons-material/Close";
import { Container, Divider, Drawer, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Box } from "@mui/system";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  latlngState,
  mapState,
  pickupDetailOpenState,
} from "../../atoms/MapOpen";
import KakaoMap from "../../components/commons/KakaoMap";
import ListHeader from "../../components/passenger/ListHeader";
import LocationBox from "../../components/passenger/LocationBox";
import PickupDetail from "../../components/passenger/PickupDetail";

function pickup() {
  const [mapOpen, setMapOpen] = useRecoilState(mapState);
  const [pickupDetailOpen, setPickupDetailOpen] = useRecoilState(
    pickupDetailOpenState
  );
  const [latlng, setLatlng] = useRecoilState(latlngState);
  const [startAndEnd, setStartAndEnd] = useState("start");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (pos) {
        var latitude = pos.coords.latitude;
        var longitude = pos.coords.longitude;

        if (latlng.lat !== latitude || latlng.lng !== longtitude) {
          setLatlng({ lat: latitude, lng: longitude });
        }
      });
    }
  }, []);

  useEffect(() => {
    console.log(pickupDetailOpen);
  }, [pickupDetailOpen]);

  return (
    <Container
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: "rgb(32, 56, 100)",
      }}
    >
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=45812c9522edefce68361e49c09b46fa&libraries=services,clusterer,drawing"
        ></script>
      </Head>
      <ListHeader />
      <LocationBox setStartAndEnd={setStartAndEnd} />
      <Drawer
        anchor="bottom"
        open={mapOpen}
        onClose={() => setMapOpen(false)}
        elevation={10}
        sx={{
          [`& .MuiDrawer-paper`]: {
            height: "90vh",
            p: 2,
          },
        }}
      >
        <CloseIcon onClick={() => setMapOpen(false)} />
        <Divider sx={{ mt: 1 }} />
        <KakaoMap positions={startAndEnd} />
      </Drawer>

      <Drawer
        anchor="right"
        open={pickupDetailOpen}
        onClose={() => setPickupDetailOpen(false)}
        elevation={10}
        sx={{
          [`& .MuiDrawer-paper`]: {
            width: "100vw",
            height: "100vh",
            p: 0,
          },
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(to bottom, #536976, #292e49)",
            color: "#fff",
            width: "100%",
            height: 60,
            p: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>Pick-up Service 예약</Typography>
          <CloseIcon onClick={() => setPickupDetailOpen(false)} />
        </Box>
        <PickupDetail />
      </Drawer>
    </Container>
  );
}

export default pickup;
