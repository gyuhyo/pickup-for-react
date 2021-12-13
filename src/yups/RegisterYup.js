import * as yup from "yup";

export const RegisterYup = yup.object({
  email: yup
    .string()
    .required("이메일을 입력해주세요.")
    .email("이메일 형식이 일치하지 않습니다."),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "대문자, 소문자, 특수문자, 숫자 하나 이상씩 필요합니다."
    ),
  confirm_password: yup
    .string()
    .required("비밀번호 확인을 입력해주세요.")
    .oneOf([yup.ref("password"), null], "비밀번호와 일치하지 않습니다."),
  sosok: yup.string(),
  name: yup.string().required("이름을 입력해주세요."),
  phone: yup
    .string()
    .length(11, "휴대폰번호 11자리 (-) 제외하고 입력해주세요."),
  access_number: yup.string().length(5, "인증번호 5자리를 입력해주세요."),
  chk1: yup
    .boolean()
    .required("서비스 이용약관에 동의해주세요.")
    .oneOf([true], "서비스 이용약관에 동의해주세요."),
  chk2: yup
    .boolean()
    .required("개인정보 수집에 동의해주세요.")
    .oneOf([true], "개인정보 수집에 동의해주세요."),
});
