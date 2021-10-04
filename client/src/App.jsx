import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from 'stream-chat-react';
// import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer } from "./components/";


const apiKey = 'psenbfjvk464';
const client = StreamChat.getInstance(apiKey);

const App = () => {
    return (
        <div className="app_wrapper">
            <Chat client={client} theme="team light">
                <ChannelContainer />

                <ChannelListContainer />
            </Chat>
        </div>
    )
}
export default App;