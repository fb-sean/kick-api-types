import type {RESTResult} from './global';

/**
 * @see {@link https://docs.kick.com/apis/moderation#post-moderation-bans}
 */
export interface RESTPostModerationBanBody {
    /**
     * The ID of the broadcaster's channel where the moderation action will be applied.
     */
    broadcaster_user_id: number;

    /**
     * The duration of the timeout in minutes.
     *
     * To permanently ban a user, omit this field.
     */
    duration?: number;

    /**
     * An optional reason for the ban or timeout.
     */
    reason?: string;

    /**
     * The ID of the user to ban or timeout.
     */
    user_id: number;
}

/**
 * @see {@link https://docs.kick.com/apis/moderation#post-moderation-bans}
 */
export type RESTPostModerationBanResult = RESTResult<object>;

/**
 * @see {@link https://docs.kick.com/apis/moderation#delete-moderation-bans}
 */
export interface RESTDeleteModerationBanBody {
    /**
     * The ID of the broadcaster's channel from which the ban or timeout will be removed.
     */
    broadcaster_user_id: number;

    /**
     * The ID of the user whose ban or timeout will be removed.
     */
    user_id: number;
}

/**
 * @see {@link https://docs.kick.com/apis/moderation#delete-moderation-bans}
 */
export type RESTDeleteModerationBanResult = RESTResult<object>;
