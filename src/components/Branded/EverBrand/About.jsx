import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { EverBrandStyles } from "../../Themes/EverBrandTheme";

const About = () => {
  // const classes = EverBrandStyles();

  return (
    <Box>
      <Box>
        <Typography variant="h2">About EverBrand</Typography>
        <Typography variant="h5">
          Creating High-End Fashion Clothing Since 2010
        </Typography>
        <br />
        <Typography variant="body1">
          EverBrand is a high-end fashion clothing company that specializes in
          creating unique and stylish clothing for men and women. We believe
          that fashion should be both functional and beautiful, and that's why
          we create clothing that not only looks great, but also feels great to
          wear.
        </Typography>
        <br />
        <Typography variant="body1">
          Since our inception in 2010, we have been committed to creating
          high-quality clothing that reflects the latest fashion trends. Our
          clothing is designed to make you feel confident and empowered, whether
          you're dressing up for a special occasion or simply running errands
          around town.
        </Typography>
        <br />
        <Typography variant="body1">
          At EverBrand, we are dedicated to sustainable and ethical practices.
          We use only the highest quality materials, and our clothing is made to
          last. We also believe in giving back, and a portion of our profits
          goes to charities that support causes we are passionate about.
        </Typography>
        <Button variant="contained" color="primary">
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};

export default About;
