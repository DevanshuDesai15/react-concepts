import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Inline from './components/Inline';
import Stylesheets from './components/Stylesheets';
import Form from './components/Form';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';



function App() {
  return (
    <div className="App">
      {/*<Greet name='Bruce' heroname='Batman'>
        <button>Batrange</button>
        </Greet>
      <Greet name='Clark' heroname='Superman'>
        <button>Heat Vision</button>
      </Greet>
      <Greet name='Diana' heroname='Wonder Woman'>
        <button>Lasso of Truth</button>
      </Greet>
      <Welcome name='Bruce' heroname='Batman'/>
      <Welcome name='Clark' heroname='Superman'/>
      <Welcome name='Diana' heroname='Wonder Woman'/>
      <Message/>
      <Counter/> */}
      {/* <FunctionClick/> 
      <EventBind/>
      <ParentComponent/>
      <UserGreeting/>
      <NameList/>
      <Stylesheets primary={true}/>
      <Inline/> */}
      {/* <Form/> */}
      <HookCounterTwo/>
    </div>
  );
}

export default App;
