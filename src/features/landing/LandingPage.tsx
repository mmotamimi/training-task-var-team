import React from "react";
import PageContainer from "../../shared/layout/PageContainer";
import { IconButton } from "@mui/material";
import { Link } from "@tanstack/react-router";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { createStyles } from "../../shared/layout/pageContainer.styles";

const LandingPage: React.FC = () => {
  const styles = createStyles();

  return (
    <PageContainer>
      <section className={styles.hero}>
        <div className={styles.actions}>
          <IconButton component={Link} to="/weather">
            <TiWeatherPartlySunny />
          </IconButton>
          <IconButton component={Link} to="/currency">
            <MdOutlineCurrencyExchange />
          </IconButton>
          <IconButton component={Link} to="/news">
            <CiGlobe />
          </IconButton>
        </div>
      </section>
    </PageContainer>
  );
};

export default LandingPage;
