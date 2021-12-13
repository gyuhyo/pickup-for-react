import { yupResolver } from "@hookform/resolvers/yup/dist/yup.umd";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/dist/client/router";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { userState } from "../../atoms/Users";
import { LoginfrmYup } from "../../yups/LoginfrmYup";
import LoginModal from "../login/LoginModal";

function Login() {
  const router = useRouter();
  const { enqueueSnackbar: snack } = useSnackbar();

  const [modalMsg, setModalMsg] = useState("");
  const users = useRecoilValue(userState);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginfrmYup),
  });

  const handleLoginCheck = handleSubmit((data) => {
    const user = users.filter((key) => key.email === data.email);

    if (user.length === 0) {
      snack("가입된 정보가 없습니다.", { variant: "error" });
      return;
    }

    if (user[0].password !== data.password) {
      snack("비밀번호가 일치하지 않습니다.", { variant: "error" });
      return;
    }

    router.push("/passenger/pickup");
  });

  return (
    <Box component="form" autoComplete="off" onSubmit={handleLoginCheck}>
      <Controller
        type="text"
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            error={!!errors.email}
            helperText={errors.email ? errors.email?.message : ""}
            size="small"
            sx={{ width: "100%", mt: 2 }}
            label="이메일"
          />
        )}
      />

      <Controller
        type="password"
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            type="password"
            error={!!errors.password}
            helperText={errors.password ? errors.password?.message : ""}
            size="small"
            sx={{ width: "100%", mt: 2 }}
            label="비밀번호"
            autoComplete="off"
          />
        )}
      />
      <Button type="submit" variant="contained" sx={{ width: "100%", mt: 2 }}>
        로그인
      </Button>
      <LoginModal msg={modalMsg} />
    </Box>
  );
}

export default Login;
