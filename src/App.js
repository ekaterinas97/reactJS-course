import styles from './App.module.css';
import {Message} from './components/Message';
import {Counter} from "./components/Counter";

const text = "Message Component text";

function App() {
  return (
    <div className={styles.app}>
      <Message textMessage={text}></Message>
        <Counter/>
        <Counter></Counter>
    </div>
  );
}

export default App;
