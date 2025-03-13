import type {Emote} from "./emote";

export interface WebhookUser {
    is_anonymous: boolean;
    user_id?: number;
    username?: string;
    is_verified?: boolean;
    profile_picture?: string;
    channel_slug?: string;
}

export interface ChatMessageEvent {
    eventType: "chat.message.sent";
    eventVersion: "1";
    message_id: string;
    broadcaster: WebhookUser;
    sender: WebhookUser;
    content: string;
    emotes: Emote[];
}

export interface ChannelFollowEvent {
    eventType: "channel.followed";
    eventVersion: "1";
    broadcaster: WebhookUser;
    follower: WebhookUser;
}

export interface SubscriptionRenewalEvent {
    eventType: "channel.subscription.renewal";
    eventVersion: "1";
    broadcaster: WebhookUser;
    subscriber: WebhookUser;
    duration: number;
    created_at: string;
}

export interface SubscriptionGiftEvent {
    eventType: "channel.subscription.gifts";
    eventVersion: "1";
    broadcaster: WebhookUser;
    gifter: WebhookUser;
    giftees: WebhookUser[];
    created_at: string;
}

export interface NewSubscriptionEvent {
    eventType: "channel.subscription.new";
    eventVersion: "1";
    broadcaster: WebhookUser;
    subscriber: WebhookUser;
    duration: number;
    created_at: string;
}

export interface LivestreamStatusUpdatedEvent {
    eventType: "livestream.status.updated";
    eventVersion: "1";
    broadcaster: WebhookUser;
    is_live: boolean;
    title: string;
    started_at: string;
    ended_at?: string | null;
}