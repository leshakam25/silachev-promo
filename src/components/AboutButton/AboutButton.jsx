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
    <div>
      <Button
        variant="outlined"
        onClick={handleOpen}
        sx={{
          border: "0.5px solid white",
          color: "white",
          borderRadius: "16px",
          px: 4,
          fontFamily: "Sofia Sans",
          fontWeight: 700,
          letterSpacing: "6px",
          ":hover": { border: "0.5px solid white" },
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
            width: { xs: "70vw", md: "40vw" },
            height: { xs: "86vh", md: "40vh" },
            bgcolor: "background.paper",
            borderRadius: "16px",
            p: 4,
            overflow: "auto",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            textAlign="left"
            component="h2"
            fontFamily="Sofia Sans"
            fontSize={{ xs: 16, sm: 20 }}
          >
            С 2010 года занимаюсь маркетингом. Эксперт в сферах HoReCa, Event,
            B2B и E-Commerce. Удалось поработать во всех направлениях
            Маркетинга, PR, таргетированной рекламы, дизайна, а также разработки
            сайтов.{" "}
          </Typography>
          <Typography
            textAlign="right"
            id="modal-modal-description"
            fontSize={{ xs: 14, sm: 18 }}
            fontFamily="Sofia Sans"
            sx={{ mt: 2 }}
          >
            Это дало мне компетенции директора по маркетингу и опыт работы в
            более 50 проектах. Преподавал маркетинг в МИТРО и являюсь спикером
            Российского общества Знания. Обучил множество специалистов, с
            которыми успешно реализовал более 100 кейсов в разных сферах.
            Выступаю консультантом по маркетингу в крупных брендах и спикером на
            отраслевых учебных курсах. Специализируюсь на интересных креативных
            проектах, в которых необходим нестандартный подход и системность. В
            моём портфолио есть кейсы по организации мероприятий в сферах,
            недоступных для рекламы, а также интеграции в российский рынок
            нового, никому неизвестного товара со стимулированием спроса и
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
    </div>
  );
}
