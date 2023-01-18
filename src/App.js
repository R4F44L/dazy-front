import logo from './logo.svg';
import './App.css';
import { FetchDB, SelectDBWrapper, Table } from './table/table';

function App() {
  return <>
    <SelectDBWrapper>
      {({ db }) => <FetchDB db={db}>
        {({ data }) =>
          <Table data={data} />
        }
      </FetchDB>}
    </SelectDBWrapper>
  </>

}

export default App;
