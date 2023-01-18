import logo from "./logo.svg";
import "./App.css";
import { FetchDB, SelectDBWrapper, Table, UserForm } from "./table/table";

function App() {
  return (
    <>
      <SelectDBWrapper>
        {({ db }) => (
          <>
            <FetchDB db={db}>{({ data }) => <Table data={data} />}</FetchDB>
            <UserForm db={db} />
          </>
        )}
      </SelectDBWrapper>
    </>
  );
}

export default App;
