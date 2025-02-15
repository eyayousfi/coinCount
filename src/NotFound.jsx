import { Box, Typography, useTheme } from "@mui/material";

const NotFound = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography color={theme.palette.error.main} variant="h5">
        There is no design yet
        <br />
        <
// @ts-ignore
        br />
        Please try again later..
      </Typography>
    </Box>
  );
};

export default NotFound;