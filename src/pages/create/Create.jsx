import { Box, Button, InputAdornment, styled, TextField } from "@mui/material";
import "./Create.css"
import React, { useState } from 'react';
import { purple } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));


const Create = () => {

  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const navigate = useNavigate();
  return (
    <Box sx={{ width: "380px" }} component="form">
      <TextField
      autoComplete="false"
        onChange={(eo) => {
          settitle((eo.target.value));
        }}
        fullWidth={true}
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
      />

      <TextField
      
        onChange={(eo) => {
          setprice(Number(eo.target.value));
        }}
        fullWidth={true}
          autoComplete="false"
        label="Amount"
        id="filled-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />

      <ColorButton
      onClick={(params) => {
        fetch("http://localhost:3200/mydata", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ price, title }),
        }).then(() => { navigate("/") })

        
      }}  sx={{ mt: "22px" }} variant="contained">
        Submit <ChevronRight />
      </ColorButton>
    </Box>
  );
};

export default Create;