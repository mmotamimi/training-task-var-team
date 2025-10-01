import PageContainer from "../../../shared/layout/PageContainer";
import CurrencyContainer from "../containers/CurrencyContainer";



export default function CurrencyPage() {
  return (
    <PageContainer showSearch={false} menuEnabled={true}>
      <CurrencyContainer />
    </PageContainer>
  );
}
