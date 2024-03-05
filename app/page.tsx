import { CandleStickTable } from "./components/candlestick-table";
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
      <Container>
        <CandleStickTable />
      </Container>
  );
}
