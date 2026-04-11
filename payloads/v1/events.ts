import type {Emote} from './emote';
import type {EventChannelReward} from './rewards';

/**
 * @see {@link https://docs.kick.com/events/event-types}
 */
export type EventNames
    = 'chat.message.sent'
        | 'channel.followed'
        | 'channel.subscription.renewal'
        | 'channel.subscription.gifts'
        | 'channel.subscription.new'
        | 'channel.reward.redemption.updated'
        | 'livestream.status.updated'
        | 'livestream.metadata.updated'
        | 'moderation.banned'
        | 'kicks.gifted';

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

/**
 * Represents a user in the context of most of Kick's Event events,
 * specifically those that include the is_anonymous field.
 *
 * @see EventBaseUser
 */
export interface EventUser extends EventBaseUser {
    is_anonymous: boolean;
}

export interface EventBadge {
    text: string;
    type: string;
    count?: number;
}

export interface EventBaseUser {
    user_id?: number;
    username?: string;
    is_verified?: boolean;
    profile_picture?: string;
    channel_slug?: string;
}

export interface EventIdentity {
    username_color: string;
    badges: EventBadge[];
}

export interface EventUserWithIdentity extends EventUser {
    identity: EventIdentity;
}

/**
 * Represents a user in the context of a "kicks gifted" Event event. Kick's
 * API does not provide the is_anonymous field that other Event events have.
 *
 * @see EventBaseUser
 */
export interface KicksGiftedEventUser extends EventBaseUser {
}

export interface EventRepliesTo {
    message_id: string;
    content: string;
    sender: EventUser;
}

export interface ChatMessageEvent {
    eventType: 'chat.message.sent';
    eventVersion: '1';
    message_id: string;
    replies_to: EventRepliesTo;
    broadcaster: EventUser;
    sender: EventUserWithIdentity;
    content: string;
    emotes: Emote[];
    created_at: string;
}

export interface ChannelFollowEvent {
    eventType: 'channel.followed';
    eventVersion: '1';
    broadcaster: EventUser;
    follower: EventUser;
}

export interface SubscriptionRenewalEvent {
    eventType: 'channel.subscription.renewal';
    eventVersion: '1';
    broadcaster: EventUser;
    subscriber: EventUser;
    duration: number;
    created_at: string;
    expires_at: string;
}

export interface SubscriptionGiftEvent {
    eventType: 'channel.subscription.gifts';
    eventVersion: '1';
    broadcaster: EventUser;
    gifter: EventUser;
    giftees: EventUser[];
    created_at: string;
    expires_at: string;
}

export interface NewSubscriptionEvent {
    eventType: 'channel.subscription.new';
    eventVersion: '1';
    broadcaster: EventUser;
    subscriber: EventUser;
    duration: number;
    created_at: string;
    expires_at: string;
}

export interface ChannelRewardRedemptionEvent {
    eventType: 'channel.reward.redemption.updated';
    eventVersion: '1';
    id: string;
    user_input: string;
    status: 'pending' | 'accepted' | 'rejected';
    redeemed_at: string;
    reward: EventChannelReward;
    redeemer: EventBaseUser;
    broadcaster: EventBaseUser;
}

export interface LivestreamStatusUpdatedEvent {
    eventType: 'livestream.status.updated';
    eventVersion: '1';
    broadcaster: EventUser;
    is_live: boolean;
    title: string;
    started_at: string;
    ended_at?: string | null;
}

export interface LivestreamMetadataUpdatedEvent {
    eventType: 'livestream.metadata.updated';
    eventVersion: '1';
    broadcaster: EventUser;
    metadata: {
        title: string;
        language: string;
        has_mature_content: boolean;
        category: {
            id: number;
            name: string;
            thumbnail: string;
        };
        // 'Category' (capitalized) is not included here as it's deprecated
        // See https://github.com/KickEngineering/KickDevDocs/issues/238
    };
}

export interface ModerationBannedEventMetadata {
    reason: string;
    created_at: string;
    expires_at: string;
}

export interface ModerationBannedEvent {
    eventType: 'moderation.banned';
    eventVersion: '1';
    broadcaster: EventUser;
    moderator: EventUser;
    banned_user: EventUser;
    metadata: ModerationBannedEventMetadata;
}

export interface KicksGiftedEvent {
    eventType: 'kicks.gifted';
    eventVersion: '1';
    broadcaster: KicksGiftedEventUser;
    sender: KicksGiftedEventUser;
    gift: {
        amount: number;
        name: string;
        type: string;
        tier: string;
        message: string;
    };
    created_at: string;
}
