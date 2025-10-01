import React from "react";
import PageContainer from "../../shared/layout/PageContainer";
import { Typography } from "@mui/material";

const WeatherPage: React.FC = () => {
  return (
    <PageContainer showSearch menuEnabled>
      <Typography variant="h5">Weather Template</Typography>
    </PageContainer>
  );
};

export default WeatherPage;
