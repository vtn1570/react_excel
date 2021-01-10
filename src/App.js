import classes from './App.module.scss'
import { Formula } from './Components/Formula/Formula';
import { Header } from './Components/Header/Header';
import { Table } from './Components/Table/Table';
import { Toolbar } from './Components/Toolbar/Toolbar';

function App() {
  return (
    <div className={classes.excel}>
      <Header/>
      <Toolbar/>
      <Formula/>
      <Table/>
    </div>
  )
}

export default App;
