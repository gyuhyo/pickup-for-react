import {
  Backdrop,
  Button,
  Container,
  Divider,
  Fade,
  Grid,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import ClearIcon from "@mui/icons-material/Clear";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { modalState } from "../../atoms/Modal";
import { LoadingButton } from "@mui/lab";
import CheckIcon from "@mui/icons-material/Check";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "90vw",
  width: "100%",
  height: "auto",
  bgcolor: "#fff",
  boxShadow: 48,
  borderRadius: 2,
  p: 3,
};

function CusModalHeader(props) {
  const setModalClose = useSetRecoilState(modalState);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={9}>
          <Typography variant="h7" component="h3">
            {props.children}
          </Typography>
        </Grid>
        <Grid
          item
          xs={1}
          sx={{
            textAlign: "right",
            color: "#aaa",
          }}
        >
          <CloseIcon
            onClick={() => setModalClose(false)}
            sx={{
              cursor: "pointer",
            }}
          />
        </Grid>
      </Grid>
      <Divider />
    </>
  );
}

function CusModalBody(props) {
  return (
    <Container
      sx={{
        textAlign: "left",
        mt: 2,
        p: "0px !important",
        width: "100%",
        maxHeight: 500,
        overflowY: "auto",
        boxSizing: "border-box",
      }}
    >
      {props.children}
    </Container>
  );
}

function CusModalTail(props) {
  const setModalClose = useSetRecoilState(modalState);

  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="flex-end"
      sx={{
        textAlign: "right",
        mt: 2,
      }}
    >
      <LoadingButton
        variant="contained"
        color="success"
        endIcon={<CheckIcon />}
        loading={props.loading}
        loadingPosition="end"
        onClick={props.clickSuccess}
      >
        확인
      </LoadingButton>
      <Button
        variant="outlined"
        color="error"
        endIcon={<ClearIcon />}
        onClick={() => setModalClose(false)}
        sx={{ visibility: props.cancelVisible ? "visible" : "hidden" }}
      >
        취소
      </Button>
    </Stack>
  );
}

function CusModal(props) {
  const modalIsOpened = useRecoilValue(modalState);
  return (
    <Modal open={modalIsOpened} closeAfterTransition>
      <Fade in={modalIsOpened}>
        <Box sx={style}>{props.children}</Box>
      </Fade>
    </Modal>
  );
}

export { CusModalHeader, CusModalBody, CusModalTail, CusModal };
