import { Box, Paper, Typography, IconButton } from "@mui/material";
import "./Home.css";
import React, { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";

const Home = () => {
  const [mydata, setmydata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3200/mydata")
      .then((response) => response.json())
      .then((data) => setmydata(data));
  }, []);

   const handleDelete = (item) => {
    fetch(`http://localhost:3200/mydata/${item.id}`, {
      method: "DELETE",
    });

    const newArr = mydata.filter((myObject) => {
      return myObject.id !== item.id;
    });

    setmydata(newArr);
  }

  let totalPrice = 0;
  return (
    <Box>
      {mydata.map((item) => {
        totalPrice += item.price;
        return (
          <Paper
            key={item.id}
            sx={{
              position: "relative",
              width: "366px",
              display: "flex",
              justifyContent: "space-between",
              mt: "22px",
              pt: "27px",
              pb: "7px",
            }}
          >
            <Typography sx={{ ml: "16px", fontSize: "1.3em" }} variant="h6">
              {item.title}
            </Typography>

            <Typography
              sx={{
                mr: "33px",
                fontWeight: 500,
                fontSize: "1em",
                opacity: "0.8",
              }}
              variant="h6"
            >
              {item.price} DT
            </Typography>

              <IconButton
              onClick={() => {
                handleDelete(item)
              }}
              sx={{ position: "absolute", top: "0", right: "0" }}
            >
              <Close sx={{ fontSize: "20px" }} />
            </IconButton>
          </Paper>
        );
      })}

      <Typography mt="55px" textAlign="center" variant="h6">
        👉 You Spend {totalPrice} DT
      </Typography>
    </Box>
  );
};

export default Home;