import React, { useState } from 'react';
import { sendMessage } from './watsonService';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { from: 'user', text: input };
      setMessages([...messages, userMessage]);

      const response = await sendMessage(input);
      const assistantMessage = { from: 'assistant', text: response.output.text.join('\n') };

      setMessages([...messages, userMessage, assistantMessage]);
      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.from}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
