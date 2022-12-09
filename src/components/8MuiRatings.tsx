import React, { useState } from "react";
import { Stack, Rating } from "@mui/material";
import FavouriteIcon from '@mui/icons-material/Favorite'
import FavouriteBorderIcon from '@mui/icons-material/FavoriteBorder'
const MuiRatings = () => {
  const [value, setValue] = useState<number | null>(4.5);
  console.log({ value });
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavouriteIcon fontSize='inherit' color="error" />}
        emptyIcon={<FavouriteBorderIcon fontSize="inherit" />}
        // readOnly
        highlightSelectedOnly
      />
    </Stack>
  );
};

export default MuiRatings;
