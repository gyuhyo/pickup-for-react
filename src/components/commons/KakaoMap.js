import { Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  latlngState,
  okLocationState,
  mapState,
  pickupDetailOpenState,
} from "../../atoms/MapOpen";

function KakaoMap(props) {
  const { lat, lng } = useRecoilValue(latlngState);
  const setLatlng = useSetRecoilState(latlngState);
  const [addr, setAddr] = useState({ addr: "", latlng: { lat: 0, lng: 0 } });
  const [globalAddr, setGlobalAddr] = useRecoilState(okLocationState);
  const setMapOpen = useSetRecoilState(mapState);
  const [pickupDetailOpen, setPickupDetailOpen] = useRecoilState(
    pickupDetailOpenState
  );

  useEffect(() => {
    if (lat === 0 || lng === 0) {
      lat = 35.17935611130195;
      lng = 129.07628743431113;
      setLatlng({ lat: 35.17935611130195, lng: 129.07628743431113 });
    }

    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new window.kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    var map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    var marker = new window.kakao.maps.Marker();

    var customOverlay = new window.kakao.maps.CustomOverlay({
      position: map.getCenter(),
      content: "",
    });

    // 마커의 위치를 지도중심으로 설정합니다
    marker.setPosition(map.getCenter());
    marker.setMap(map);
    map.setDraggable(true);

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new window.kakao.maps.services.Geocoder();

    // 지도가 이동, 확대, 축소로 인해 중심좌표가 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(map, "center_changed", function () {
      // 마커의 위치를 지도중심으로 설정합니다
      marker.setPosition(map.getCenter());
      marker.setMap(map);
    });

    kakao.maps.event.addListener(map, "center_changed", function () {
      searchDetailAddrFromCoords(map.getCenter(), function (result, status) {
        if (status === window.kakao.maps.services.Status.OK) {
          var detailAddr = !!result[0].road_address
            ? "<div>도로명주소 : " +
              result[0].road_address.address_name +
              "</div>"
            : "";
          detailAddr +=
            "<div>지번 주소 : " + result[0].address.address_name + "</div>";

          var content =
            '<div style="position: absolute; left: -150px; top: -100px; background-color: #fff; border: 1px solid #ddd; font-size: 0.8rem; padding: 12px; width:max-content; border-radius: 7px">' +
            detailAddr +
            "</div>";

          customOverlay.setPosition(map.getCenter());
          customOverlay.setContent(content);
          customOverlay.setMap(map);

          setAddr({
            addr: !!result[0].road_address
              ? result[0].road_address.address_name
              : result[0].address.address_name,
            latlng: {
              lat: lat,
              lng: lng,
            },
          });
        }
      });
    });

    function searchDetailAddrFromCoords(coords, callback) {
      // 좌표로 법정동 상세 주소 정보를 요청합니다
      geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    }
  }, []);

  const handleOkLocation = async () => {
    await setGlobalAddr({
      ...globalAddr,
      [props.positions]: {
        addr: addr.addr,
        latlng: {
          lat: addr.lat,
          lng: addr.lng,
        },
      },
    });

    setMapOpen(false);

    if (
      (props.positions === "end" && globalAddr.start.addr !== "") ||
      (props.positions === "start" && globalAddr.end.addr !== "")
    ) {
      setPickupDetailOpen(true);
    }
  };
  return (
    <Container sx={{ height: "100%", m: 0, p: 0 }}>
      <div
        id="map"
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
        <Button
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "auto",
            height: 50,
            zIndex: 3,
            m: 2,
            boxSizing: "border-box",
          }}
          variant="contained"
          color="success"
          onClick={() => handleOkLocation()}
        >
          현재 위치로 적용
        </Button>
      </div>
    </Container>
  );
}

export default KakaoMap;
