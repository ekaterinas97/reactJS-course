import styles from './App.module.css';
import {Message} from './components/Message';

const text = "Message Component text";

function App() {
  return (
    <div className={styles.app}>
      <Message textMessage={text}></Message>
    </div>
  );
}

export default App;
