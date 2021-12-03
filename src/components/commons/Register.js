import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import React from "react";

function Register() {
  return (
    <Box sx={{}}>
      <TextField
        error={false}
        helperText=""
        size="small"
        sx={{ width: "100%", mt: 2 }}
        label="이메일"
        name="email"
        required
        onChange={null}
        autoFocus
        autoComplete={false}
      />
      <TextField
        error={false}
        helperText=""
        size="small"
        type="password"
        sx={{ width: "100%", mt: 2 }}
        label="비밀번호"
        name="password"
        required
        onChange={null}
      />
      <TextField
        error={false}
        helperText=""
        size="small"
        type="password"
        sx={{ width: "100%", mt: 2 }}
        label="비밀번호 확인"
        name="conform_password"
        required
        onChange={null}
      />
      <Typography component="p" sx={{ fontSize: 12, mt: 1 }}>
        비밀번호는 영어 대문자, 숫자, 특수문자(
        <span style={{ color: "blue" }}>.!@#$%</span>)를 혼합하여 8~20자를
        입력해주세요.
      </Typography>
      <FormControl sx={{ width: "100%", mt: 2 }}>
        <InputLabel id="demo-simple-select-filled-label">소속</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          label="소속"
          name="sosok"
          IconComponent={() => <SearchIcon sx={{ mr: 1 }} />}
        >
          <MenuItem value="A">A소속</MenuItem>
          <MenuItem value="B">B소속</MenuItem>
          <MenuItem value="C">C소속</MenuItem>
        </Select>
        <FormControlLabel
          control={<Checkbox size="small" />}
          label="소속정보 없음"
          sx={{ "& .MuiFormControlLabel-label": { fontSize: 14 } }}
        />
      </FormControl>
      <TextField
        error={false}
        helperText=""
        size="small"
        sx={{ width: "100%", mt: 2 }}
        label="이름"
        name="name"
        required
        onChange={null}
      />
      <FormControl
        sx={{ width: "100%", mt: 2, display: "flex", flexDirection: "row" }}
      >
        <TextField
          error={false}
          helperText=""
          size="small"
          sx={{ width: "58%" }}
          label="휴대폰번호 입력"
          name="phone"
          required
          onChange={null}
        />
        <Button variant="contained" sx={{ width: "40%", ml: 1 }}>
          인증번호 받기
        </Button>
      </FormControl>
      <FormControl
        sx={{ width: "100%", mt: 1, display: "flex", flexDirection: "row" }}
      >
        <TextField
          error={false}
          helperText=""
          size="small"
          sx={{ width: "58%" }}
          label="인증번호 입력"
          name="access_number"
          required
          onChange={null}
        />
        <Button variant="contained" sx={{ width: "40%", ml: 1 }}>
          인증확인
        </Button>
      </FormControl>
      <Paper elevation={3} sx={{ p: 2, boxSizing: "border-box", mt: 2 }}>
        <FormControlLabel
          control={<Checkbox size="small" />}
          label="이용약관, 개인정보 수집에 모두 동의합니다."
          sx={{ "& .MuiFormControlLabel-label": { fontSize: 12 } }}
        />
        <Divider />
        <Box sx={{ pl: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="서비스 이용약관 동의 (필수)"
              sx={{
                "& .MuiFormControlLabel-label": { fontSize: 12 },
              }}
            />
            <ArrowForwardIosIcon
              sx={{ color: "#ababab", fontSize: 14, alignSelf: "center" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="개인정보 수집 동의 (필수)"
              sx={{
                "& .MuiFormControlLabel-label": { fontSize: 12 },
              }}
            />
            <ArrowForwardIosIcon
              sx={{ color: "#ababab", fontSize: 14, alignSelf: "center" }}
            />
          </Box>
        </Box>
      </Paper>
      <Button variant="contained" sx={{ mt: 2, width: "100%" }}>
        회원가입
      </Button>
    </Box>
  );
}

export default Register;
