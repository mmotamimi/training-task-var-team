import React from "react";
import PageContainer from "../../shared/layout/PageContainer";
import NewsContainer from "./Containers/NewsContainer";

const NewsPage: React.FC = () => {
  return (
    <PageContainer menuEnabled>
      <NewsContainer/>
    </PageContainer>
  );
};

export default NewsPage;