import {useState} from 'react'
import './App.css'
import {useSubscription} from "react-stomp-hooks";

interface UnlockNotification {
  lockGroupId: string
}

function App() {
  const [messageHistory, setMessageHistory] = useState<UnlockNotification[]>([]);
  useSubscription('/topic/unlocked', (message) => {
    const messageBody = JSON.parse(message.body) as UnlockNotification;

    setMessageHistory((prevMessages) => [...prevMessages, messageBody]);
  });

  return (
    <>
      Messages: ({messageHistory.length})
      <ul>
        {messageHistory.map((message, index) => (
            <li key={index}>{message.lockGroupId}</li>
        ))}
      </ul>
    </>
  )
}

export default App
