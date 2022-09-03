import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import ComponenteA from './components/container/componente_A';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx */}
        {/* <TaskListComponent></TaskListComponent> */}
        <ComponenteA></ComponenteA>
      </header>
    </div>
  );
}

export default App;
