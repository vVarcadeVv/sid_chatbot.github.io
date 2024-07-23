import React from 'react';
import { WebChatContainer, setEnableDebug } from '@ibm-watson/assistant-web-chat-react';

const webChatOptions = {
  integrationID: 'f803ead3-5dcc-4776-9d7d-359e8077bf5a',
  region: 'us-east',
  serviceInstanceID: '18982a6c-7095-417b-bd96-2d855e174cdd',
  // subscriptionID: 'only on enterprise plans',
  // Note that there is no onLoad property here. The WebChatContainer component will override it.
  // Use the onBeforeRender or onAfterRender prop instead.
};

// Include this if you want to get debugging information from this library. Note this is different than
// the web chat "debug: true" configuration option which enables debugging within web chat.
setEnableDebug(true);

function App() {
  return <WebChatContainer config={webChatOptions} />;
}
export default App;
 