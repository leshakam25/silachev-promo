import { SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

const SwiperCard = ({ title, img, link, text }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
          bgcolor: "#E0E1DD",
          boxShadow: 6,
          opacity: 0.7,
          width: "100%",
          minHeight: "104px",
        }}
      >
        <CardActionArea
          onClick={handleOpen}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Typography
            component="div"
            lineHeight="140%"
            fontFamily="BarcadeBrawlRegular"
            fontSize={{ xs: 16, sm: 20 }}
            sx={{
              p: "24px 8px",
            }}
          >
            {title}
          </Typography>
        </CardActionArea>
      </Card>{" "}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "80vw", xl: "80vw" },
            height: { xs: "70vh", xl: "90vh" },
            bgcolor: "#778DA9",
            p: 2,
            overflow: "auto",
            borderRadius: "4px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              image={img}
              alt="На это месте должна быть картинка :)"
              sx={{
                height: "300px",
                width: "auto",
                my: 3,
              }}
            />
            <Typography
              textAlign="left"
              component="div"
              lineHeight="140%"
              fontFamily="BarcadeBrawlRegular"
              fontSize={{ xs: 16, sm: 36 }}
              sx={{
                opacity: 0.7,
                marginY: { xs: 1, md: 4 },
              }}
            >
              {title}
            </Typography>
          </Box>
          <Typography
            textAlign="left"
            variant="body2"
            id="modal-modal-description"
            fontFamily="BarcadeBrawlRegular"
            fontSize={{ xs: 7, sm: 16 }}
            lineHeight="160%"
            sx={{ mt: 2 }}
            color="#415A77"
            marginY={3}
          >
            {text}
          </Typography>
          <Button
            href={link}
            target="_blank"
            marginY={3}
            variant="contained"
            sx={{
              color: "black",
              opacity: 0.6,
              fontFamily: "BarcadeBrawlRegular",
              fontSize: { xs: 12, sm: 24 },
            }}
          >
            Перейти
          </Button>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
            }}
            aria-label="delete"
          >
            <CloseIcon />
          </IconButton>{" "}
        </Box>
      </Modal>
    </>
  );
};

export default SwiperCard;
