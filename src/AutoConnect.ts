import { workspace } from 'vscode';

import { API } from './api/API';
import ChatClient from './chat/ChatClient';

export async function autoConnect(chatClient: ChatClient) {
  const shouldAutoConnect = workspace.getConfiguration('twitchThemer').get<boolean>('autoConnect') || false;
  if (shouldAutoConnect && await API.getStreamIsActive()) {
    chatClient.toggleChat.bind(chatClient)();
  }
}