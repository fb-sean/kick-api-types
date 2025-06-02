import type { RESTResult } from './global'

/**
 * Post a chat message to a channel as a user or a bot. When sending as a user, the broadcaster_user_id is required. Whereas when sending as a bot, the broadcaster_user_id is not required and is ignored. As a bot, the message will always be sent to the channel attached to your token.
 * 
 * @see {@link https://docs.kick.com/apis/chat#post-chat}
 */
export interface RESTPostChatMessageBody {
  /**
   * The ID of the broadcaster to send the message to.
   */
  broadcaster_user_id?: number

  /**
   * The content of the chat message.
   * 
   * Maximum length is 500 characters.
   */
  content: string

  /**
   * The ID of the message to reply to, if applicable.
   */
  reply_to_message_id?: string

  /**
   * Specifies whether to send the message as the authorized user or a bot account linked to the Kick application.
   * 
   * If set to `'bot'`, the message will be sent to the currently authorized channel.
   */
  type: 'user' | 'bot'
}

/**
 * @see {@link https://docs.kick.com/apis/chat#post-chat}
 */
export type RESTPostChatMessageResult = RESTResult<{
  is_sent: boolean
  message_id: string
}>