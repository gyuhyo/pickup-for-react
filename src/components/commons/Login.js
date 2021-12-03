import { Button, FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/dist/client/router";
import React, { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../atoms/Modal";
import LoginModal from "../login/LoginModal";

function Login() {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalMsg, setModalMsg] = useState("");
  const [loginValue, setLoginValue] = useState({ email: null, password: null });
  const [validation, setValidation] = useState({
    email: { check: false, msg: "" },
    password: { check: false, msg: "" },
  });

  const handlerLoginValueChange = useCallback((event) => {
    const { name, value } = event.target;
    setLoginValue((data) => ({ ...data, [name]: value }));
  });

  const handlerLoginCheck = useCallback(() => {
    setValidation({
      email: { check: false, msg: "" },
      password: { check: false, msg: "" },
    });

    if (!loginValue.email) {
      setValidation({
        email: { check: true, msg: "이메일을 입력해주세요." },
        password: { check: false, msg: "" },
      });
      return;
    }

    const reg_email =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!reg_email.test(loginValue.email)) {
      setValidation({
        email: { check: true, msg: "이메일형식이 올바르지 않습니다." },
        password: { check: false, msg: "" },
      });
      return;
    }

    if (!loginValue.password) {
      setValidation({
        password: { check: true, msg: "비밀번호를 입력해주세요." },
        password: { check: false, msg: "" },
      });
      return;
    }

    if (loginValue.password.length < 8) {
      setValidation({
        email: { check: false, msg: "" },
        password: { check: true, msg: "비밀번호는 8자리 이상이어야 합니다." },
      });
      return;
    }

    if (loginValue.email !== "editplus@kakao.com") {
      setModalMsg("가입된 정보가 없습니다.");
      setModalOpen(true);
      return;
    }

    if (loginValue.password !== "123123") {
      setModalMsg("비밀번호가 일치하지 않습니다.");
      setModalOpen(true);
      return;
    }

    if (
      loginValue.email === "editplus@kakao.com" &&
      loginValue.password === "123123123"
    ) {
      router.push("/passenger/pickup");
    } else {
    }
  });

  return (
    <Box component="form" autoComplete={false}>
      <TextField
        error={validation.email.check}
        helperText={validation.email.msg}
        size="small"
        sx={{ width: "100%", mt: 2 }}
        label="이메일"
        name="email"
        required
        onChange={handlerLoginValueChange}
      />
      <TextField
        error={validation.password.check}
        helperText={validation.password.msg}
        type="password"
        sx={{ width: "100%", mt: 2 }}
        size="small"
        label="비밀번호"
        name="password"
        required
        onChange={handlerLoginValueChange}
      />
      <Button
        variant="contained"
        sx={{ width: "100%", mt: 2 }}
        onClick={handlerLoginCheck}
      >
        로그인
      </Button>
      <LoginModal msg={modalMsg} />
    </Box>
  );
}

export default Login;
