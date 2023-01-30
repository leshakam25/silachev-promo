import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { squareMenu } from "../../images/servicesIcons/squareMenu.svg";

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
          border: "5px dotted white",
          px: 4,
          ":hover": { border: "5px solid black", color: "black" },
        }}
      >
        О СЕБЕ
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
            width: { xs: "80vw", xl: "50vw" },
            height: { xs: "60vh", xl: "50vh" },
            overflow: "auto",
            bgcolor: "#778DA9",
            p: 5,
          }}
        >
          <Typography
            id="modal-modal-title"
            textAlign="left"
            fontFamily="BarcadeBrawlRegular"
            fontSize={{ xs: 8, sm: 12 }}
            lineHeight="200%"
            color="#1B263B"
          >
            С 2010 года занимаюсь маркетингом.
            <br /> Эксперт в сферах HoReCa, Event, B2B и E-Commerce.
            <br /> Удалось поработать во всех направлениях Маркетинга, PR,
            таргетированной рекламы, дизайна, а также разработки сайтов.{" "}
          </Typography>
          <Typography
            textAlign="left"
            id="modal-modal-description"
            fontFamily="BarcadeBrawlRegular"
            fontSize={{ xs: 8, sm: 12 }}
            lineHeight="200%"
            color="#415A77"
            mt={5}
          >
            Все это дало мне компетенции директора по маркетингу и опыт работы
            более чем в 50 проектах.
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
