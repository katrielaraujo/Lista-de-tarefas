import './App.css';
import LogoFree from './components/LogoFree';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='application-tasks'>
        <LogoFree/>
        <div className='main-list-tasks'>
          <h1>Minhas Tarefas</h1>
          <TaskList/>
        </div>
    </div>
  );
}

export default App;
