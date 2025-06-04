/**
 * @see {@link https://docs.kick.com/events/event-types}
 */
export type EventNames =
    'chat.message.sent' |
    'channel.followed' |
    'channel.subscription.renewal' |
    'channel.subscription.gifts' |
    'channel.subscription.new' |
    'livestream.status.updated' |
    'livestream.status.updated' |
    'livestream.metadata.updated' |
    'moderation.banned';

export interface EventSubscription {
    app_id: string;
    broadcaster_user_id: number;
    created_at: string;
    event: EventNames;
    id: string;
    method: string;
    updated_at: string;
    version: number;
}

export type EventSubscriptions = EventSubscription[];

export interface EventSubscriptionResult {
    error?: string;
    name: EventNames;
    subscription_id?: string;
    version: number;
}

export type EventSubscriptionResults = EventSubscriptionResult[];
