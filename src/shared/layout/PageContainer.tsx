import React from "react";
import Navbar from "../navbar/Navbar";
import * as styles from "./pageContainer.styles";

interface PageContainerProps {
  children: React.ReactNode;
  showSearch?: boolean;
  menuEnabled?: boolean;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  showSearch,
  menuEnabled,
}) => {
  return (
    <div className={styles.pageRoot}>
      <Navbar showSearch={showSearch} menuEnabled={menuEnabled} />
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default PageContainer;
