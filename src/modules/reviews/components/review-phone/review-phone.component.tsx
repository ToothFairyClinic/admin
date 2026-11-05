import { useState } from "react";
import { Labeled, useRecordContext } from "react-admin";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { maskPhone } from "../../mask-phone";

/** Телефон у списку: завжди під зірочками. */
export const MaskedPhoneField = (_props: { label?: string }) => {
  const record = useRecordContext();
  return <Typography variant="body2">{maskPhone(record?.client_phone)}</Typography>;
};

/** Телефон у формі відгуку: під зірочками, повний номер лише після натискання на око. */
export const RevealPhoneField = () => {
  const record = useRecordContext();
  const [visible, setVisible] = useState(false);
  if (!record?.client_phone) return null;
  return (
    <Labeled label="Номер телефона">
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography variant="body1">{visible ? record.client_phone : maskPhone(record.client_phone)}</Typography>
        <Tooltip title={visible ? "Сховати номер" : "Показати номер"}>
          <IconButton size="small" onClick={() => setVisible(!visible)}>
            {visible ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
          </IconButton>
        </Tooltip>
      </Box>
    </Labeled>
  );
};
