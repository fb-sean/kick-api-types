import type {Emote} from './emote';

/**
 * Represents a user in the context of most of Kick's webhook events,
 * specifically those that include the is_anonymous field.
 *
 * @see WebhookBaseUser
 */
export interface WebhookUser extends WebhookBaseUser {
    is_anonymous: boolean;
}

export interface WebhookBadge {
    text: string;
    type: string;
    count?: number;
}

export interface WebhookBaseUser {
    user_id?: number;
    username?: string;
    is_verified?: boolean;
    profile_picture?: string;
    channel_slug?: string;
}

export interface WebhookIdentity {
    username_color: string;
    badges: WebhookBadge[];
}

export interface WebhookUserWithIdentity extends WebhookUser {
    identity: WebhookIdentity;
}

/**
 * Represents a user in the context of a "kicks gifted" webhook event. Kick's
 * API does not provide the is_anonymous field that other webhook events have.
 *
 * @see WebhookBaseUser
 */
export interface KicksGiftedWebhookUser extends WebhookBaseUser {}

export interface WebhookRepliesTo {
    message_id: string;
    content: string;
    sender: WebhookUser;
}

export interface ChatMessageEvent {
    eventType: 'chat.message.sent';
    eventVersion: '1';
    message_id: string;
    replies_to: WebhookRepliesTo;
    broadcaster: WebhookUser;
    sender: WebhookUserWithIdentity;
    content: string;
    emotes: Emote[];
    created_at: string;
}

export interface ChannelFollowEvent {
    eventType: 'channel.followed';
    eventVersion: '1';
    broadcaster: WebhookUser;
    follower: WebhookUser;
}

export interface SubscriptionRenewalEvent {
    eventType: 'channel.subscription.renewal';
    eventVersion: '1';
    broadcaster: WebhookUser;
    subscriber: WebhookUser;
    duration: number;
    created_at: string;
    expires_at: string;
}

export interface SubscriptionGiftEvent {
    eventType: 'channel.subscription.gifts';
    eventVersion: '1';
    broadcaster: WebhookUser;
    gifter: WebhookUser;
    giftees: WebhookUser[];
    created_at: string;
    expires_at: string;
}

export interface NewSubscriptionEvent {
    eventType: 'channel.subscription.new';
    eventVersion: '1';
    broadcaster: WebhookUser;
    subscriber: WebhookUser;
    duration: number;
    created_at: string;
    expires_at: string;
}

export interface LivestreamStatusUpdatedEvent {
    eventType: 'livestream.status.updated';
    eventVersion: '1';
    broadcaster: WebhookUser;
    is_live: boolean;
    title: string;
    started_at: string;
    ended_at?: string | null;
}

export interface ModerationBannedEventMetadata {
    reason: string;
    created_at: string;
    expires_at: string;
}

export interface ModerationBannedEvent {
    eventType: 'moderation.banned';
    eventVersion: '1';
    broadcaster: WebhookUser;
    moderator: WebhookUser;
    banned_user: WebhookUser;
    metadata: ModerationBannedEventMetadata;
}

export interface KicksGiftedEvent {
    eventType: 'kicks.gifted';
    eventVersion: '1';
    broadcaster: KicksGiftedWebhookUser;
    sender: KicksGiftedWebhookUser;
    gift: {
        amount: number;
        name: string;
        type: string;
        tier: string;
        message: string;
    };
    created_at: string;
}
