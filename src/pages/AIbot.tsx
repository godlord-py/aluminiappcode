import React, { useState, useRef, useEffect } from 'react';
import { FaPaperPlane, FaRobot, FaUser } from 'react-icons/fa';

const AIAssistant = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! I'm your AI Assistant. How can I help you today?", sender: 'bot' }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (inputMessage.trim() === '') return;

        const newMessage = { id: messages.length + 1, text: inputMessage, sender: 'user' };
        setMessages([...messages, newMessage]);
        setInputMessage('');
        
        setTimeout(() => {
            const aiResponse = { id: messages.length + 2, text: "Thank you for your question. I'm processing it and will respond shortly.", sender: 'bot' };
            setMessages(prevMessages => [...prevMessages, aiResponse]);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">AI Assistant</h1>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-blue-600 text-white p-4 flex items-center">
                        <FaRobot className="text-2xl mr-2" />
                        <span className="font-semibold">Technical Education Department AI</span>
                    </div>
                    
                    <div className="h-96 overflow-y-auto p-4 space-y-4">
                        {messages.map((message) => (
                            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                                    <div className="flex items-center mb-1">
                                        {message.sender === 'user' ? <FaUser className="mr-2" /> : <FaRobot className="mr-2" />}
                                        <span className="font-semibold">{message.sender === 'user' ? 'You' : 'AI Assistant'}</span>
                                    </div>
                                    <p>{message.text}</p>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    
                    <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4">
                        <div className="flex items-center">
                            <input 
                                type="text" 
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Type your message here..."
                                className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button 
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300"
                            >
                                <FaPaperPlane />
                            </button>
                        </div>
                    </form>
                </div>

                <div className="mt-8 text-center text-gray-600">
                    <p>This AI Assistant is designed to help you with questions about the Technical Education Department, career guidance, and more.</p>
                    <p className="mt-2">For complex inquiries, please consider reaching out to a human advisor or mentor.</p>
                </div>
            </div>
        </div>
    );
};

export default AIAssistant;