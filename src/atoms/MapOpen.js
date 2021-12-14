import { atom } from "recoil";

export const mapState = atom({
  key: "mapState",
  default: false,
});

export const latlngState = atom({
  key: "latlngState",
  default: {
    lat: 0,
    lng: 0,
  },
});

export const okLocationState = atom({
  key: "okLocationState",
  default: {
    start: {
      addr: "",
      latlng: {
        lat: 0,
        lng: 0,
      },
    },
    end: {
      addr: "",
      latlng: {
        lat: 0,
        lng: 0,
      },
    },
  },
});

export const pickupDetailOpenState = atom({
  key: "pickupDetailOpenState",
  default: true,
});
