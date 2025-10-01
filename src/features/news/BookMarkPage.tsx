import React from "react";
import PageContainer from "../../shared/layout/PageContainer";
import BookmarksContainer from "./Containers/BookmarksContainer";
const BookMarkNewsPage: React.FC = () => {
  return (
    <PageContainer menuEnabled>
      <BookmarksContainer/>
    </PageContainer>
  );
};

export default BookMarkNewsPage;