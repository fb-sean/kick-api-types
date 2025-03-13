export enum OAuth2Scopes {
    /*
     * View user information in Kick including username, streamer ID, etc.
     */
    UserRead = 'user:read',
    /*
     * View channel information in Kick including channel description, category, etc.
     */
    ChannelRead = 'channel:read',
    /*
     * Update livestream metadata for a channel based on the channel ID
     */
    ChannelWrite = 'channel:write',
    /*
     * Send chat messages and allow chat bots to post in your chat
     */
    ChatWrite = 'chat:write',
    /*
     * Read a user's stream URL and stream key
     */
    StreamKeyRead = 'streamkey:read',
    /*
     * Subscribe to all channel events on Kick e.g. chat messages, follows, subscriptions
     */
    EventsSubscribe = 'events:subscribe',
}