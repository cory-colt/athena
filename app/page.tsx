import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import { CandleStickTable } from "./components/candlestick-table";

export default function Home() {
  return (
      <Container>
        <CandleStickTable />
      </Container>
  );
}
