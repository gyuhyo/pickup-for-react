import * as yup from "yup";

export const LoginfrmYup = yup.object({
  email: yup
    .string()
    .required("이메일을 입력해주세요.")
    .email("이메일형식이 일치하지 않습니다."),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .min(8, "비밀번호는 8자리 이상이여야 합니다."),
});
