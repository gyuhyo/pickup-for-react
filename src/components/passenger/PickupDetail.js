import { yupResolver } from "@hookform/resolvers/yup/dist/yup.umd";
import SearchIcon from "@mui/icons-material/Search";
import { LocalizationProvider, MobileDateTimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {
  Button,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { okLocationState } from "../../atoms/MapOpen";
import { pickupDetailYup } from "../../yups/pickupDetailYup";
import ControllerField from "../commons/ControllerField";

function PickupDetail() {
  const [value, setValue] = useState(new Date());
  const { start, end } = useRecoilValue(okLocationState);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(pickupDetailYup),
  });

  const handleCallService = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Container
      sx={{ pt: 2, boxSizing: "border-box", overflowY: "auto" }}
      component="form"
      onSubmit={handleCallService}
    >
      <Typography
        sx={{
          fontWeight: "bold",
        }}
      >
        From → To
      </Typography>
      <Paper sx={{ p: 2, mt: 1 }} elevation={4}>
        <Typography>○ 김해공항</Typography>
        <ControllerField
          name="startAddr"
          control={control}
          type="hidden"
          defaultValue={start.addr}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: 0,
              },
            },
          }}
        />
        <ControllerField
          name="startLat"
          control={control}
          type="hidden"
          defaultValue={start.latlng.lat}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: 0,
              },
            },
          }}
        />
        <ControllerField
          name="startLng"
          control={control}
          type="hidden"
          defaultValue={start.latlng.lng}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: 0,
              },
            },
          }}
        />
        <Divider
          orientation="vertical"
          sx={{ height: 40, writingMode: "vertical-lr", ml: 0.5 }}
        />
        <Typography>○ 해운대</Typography>
        <ControllerField
          name="endAddr"
          control={control}
          type="hidden"
          defaultValue={end.addr}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: 0,
                display: "none",
              },
            },
          }}
        />
        <ControllerField
          name="endLat"
          control={control}
          type="hidden"
          defaultValue={end.latlng.lat}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: 0,
                display: "none",
              },
            },
          }}
        />
        <ControllerField
          name="endLng"
          control={control}
          type="hidden"
          defaultValue={end.latlng.lng}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: 0,
                display: "none",
              },
            },
          }}
        />
      </Paper>
      <Typography sx={{ fontWeight: "bold", mt: 3 }}>이용시간</Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDateTimePicker
          value={value}
          inputFormat="yyyy-MM-dd HH:mm"
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => (
            <Controller
              name="play_times"
              control={control}
              error={errors.play_times}
              defaultValue={value}
              render={() => (
                <TextField {...params} sx={{ mt: 1, width: "100%" }} />
              )}
            />
          )}
        />
      </LocalizationProvider>
      <ControllerField
        name="sosok"
        control={control}
        error={errors.sosok}
        label="소속"
        sx={{ width: "100%", mt: 2 }}
      />
      <ControllerField
        name="person_name"
        control={control}
        error={errors.person_name}
        label="탑승객"
        sx={{ width: "100%", mt: 2 }}
        autoFocus={true}
      />
      <ControllerField
        name="person_count"
        type="number"
        control={control}
        error={errors.person_count}
        label="탑승객 수"
        sx={{ width: "100%", mt: 2 }}
      />
      <ControllerField
        name="plain_name"
        control={control}
        error={errors.plain_name}
        label="비행기 편명 입력(선택)"
        sx={{ width: "100%", mt: 2 }}
      />
      <FormControl sx={{ width: "100%", mt: 2 }}>
        <InputLabel id="demo-simple-select-filled-label">결제수단</InputLabel>
        <Controller
          name="payment"
          control={control}
          error={errors.payment}
          defaultValue=""
          render={({ field }) => (
            <Select
              {...field}
              labelId="demo-simple-select-filled-label"
              label="결제수단"
              IconComponent={() => <SearchIcon sx={{ mr: 1 }} />}
            >
              <MenuItem value="card">카드</MenuItem>
              <MenuItem value="money">현금</MenuItem>
            </Select>
          )}
        />
        <FormHelperText sx={{ color: "#d32f2f" }}>
          {errors.payment ? errors.payment?.message : ""}
        </FormHelperText>
      </FormControl>
      <FormControl sx={{ width: "100%", mt: 2 }}>
        <InputLabel id="demo-simple-select-filled-label">차량타입</InputLabel>
        <Controller
          name="car_type"
          control={control}
          defaultValue=""
          error={errors.car_type}
          render={({ field }) => (
            <Select
              {...field}
              labelId="demo-simple-select-filled-label"
              label="차량타입"
              IconComponent={() => <SearchIcon sx={{ mr: 1 }} />}
            >
              <MenuItem value="sedan">SEDAN</MenuItem>
              <MenuItem value="suv">SUV</MenuItem>
            </Select>
          )}
        />
        <FormHelperText sx={{ color: "#d32f2f" }}>
          {errors.car_type ? errors.car_type?.message : ""}
        </FormHelperText>
      </FormControl>
      <ControllerField
        name="pls_more"
        control={control}
        label="요청사항(선택)"
        sx={{ width: "100%", mt: 2 }}
        rows={5}
        multiline={true}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 2, mb: 2, width: "100%" }}
      >
        서비스 신청하기
      </Button>
    </Container>
  );
}

export default PickupDetail;
