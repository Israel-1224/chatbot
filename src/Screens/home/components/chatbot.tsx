import ChatBot from "react-chatbotify";

export const Chatbot = () => {
  const id = "my-chatbot-id" // if not specified, will auto-generate uuidv4

  const flow = {
    "start": {
        message: "Hello there!",
        path: "end"
    },
    "end": {
        message: "See you, goodbye!"
    }
  }

  const settings = {
    // general: {
    //   embedded: true
    // },
    chatHistory: {
      storageKey: "conversations_summary"
    }
  }

  const styles = {
    headerStyle: {
      background: '#42b0c5',
      color: '#ffffff',
      padding: '10px',
    },
    chatWindowStyle: {
      backgroundColor: '#f2f2f2',
    },
    tooltipStyle:{
        display: "none"
    }
   
  };

  return (
    <ChatBot id={id} flow={flow} styles={styles} settings={settings}/>
  );
};