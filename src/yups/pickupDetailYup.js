import * as yup from "yup";

export const pickupDetailYup = yup.object({
  startAddr: yup.string(),
  startLat: yup.string(),
  startLng: yup.string(),
  endAddr: yup.string(),
  endLat: yup.string(),
  endLng: yup.string(),
  play_times: yup.string().required(),
  sosok: yup.string(),
  person_name: yup.string().required("탑승객 성함을 입력해주세요."),
  person_count: yup
    .number("탑승객 인원수는 숫자만 입력가능합니다.")
    .typeError("탑승객 인원수를 제대로 입력해주세요.")
    .required("탑승객 인원수를 입력해주세요.")
    .moreThan(0, "탑승객 인원수는 0보다 커야합니다."),
  plain_name: yup.string(),
  payment: yup.string().required("결제수단을 선택해주세요."),
  car_type: yup.string().required("차량타입을 선택해주세요."),
  pls_more: yup.string(),
});
