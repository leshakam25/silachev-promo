import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function AboutButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleOpen}
        sx={{
          bgcolor: "transparent",
          fontSize: { xs: 18, md: 32 },
          fontFamily: "BarcadeBrawlRegular",
          letterSpacing: "6px",
          color: "white",
          border: "4px dotted white",
          px: 4,
          ":hover": { border: "5px dotted black", color: "black" },
        }}
      >
        ОБО МНЕ
      </Button>
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
            width: { xs: "80vw", xl: "40vw" },
            height: { xs: "90vh", xl: "40vh" },
            bgcolor: "background.paper",
            p: 2,
            overflow: "auto",
            opacity: 0.8,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            textAlign="left"
            component="h2"
            fontFamily="BarcadeBrawlRegular"
            fontSize={{ xs: 8, sm: 12 }}
            lineHeight="200%"
            color="#1B263B"
            marginTop={4}
          >
            С 2010 года занимаюсь маркетингом.
            <br /> Эксперт в сферах HoReCa, Event, B2B и E-Commerce.
            <br /> Удалось поработать во всех направлениях Маркетинга, PR,
            таргетированной рекламы, дизайна, а также разработки сайтов.{" "}
          </Typography>
          <Typography
            textAlign="left"
            variant="body2"
            id="modal-modal-description"
            fontFamily="BarcadeBrawlRegular"
            fontSize={{ xs: 7, sm: 10 }}
            lineHeight="200%"
            sx={{ mt: 2 }}
            color="#415A77"
          >
            Это дало мне компетенции директора по маркетингу и опыт работы в
            более 50 проектах.
            <br /> Преподавал маркетинг в МИТРО, на сегодня являюсь спикером
            Российского общества Знания.
            <br /> Обучил множество специалистов, с которыми успешно реализовал
            более 100 кейсов в разных сферах.
            <br />
            Выступаю консультантом по маркетингу в крупных брендах и спикером на
            отраслевых учебных курсах.
            <br /> Специализируюсь на интересных креативных проектах, в которых
            необходим нестандартный подход и системность.
            <br /> В моём портфолио есть кейсы по организации мероприятий в
            сферах, недоступных для рекламы, а также интеграции в российский
            рынок нового, никому неизвестного товара со стимулированием спроса и
            созданием дистрибьюторской сети.{" "}
          </Typography>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
            aria-label="delete"
          >
            <CloseIcon />
          </IconButton>{" "}
        </Box>
      </Modal>
    </>
  );
}
