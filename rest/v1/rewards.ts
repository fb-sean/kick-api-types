import type {RESTResult} from './global';

/**
 * A Kick channel reward
 *
 * @see {@link https://docs.kick.com/apis/channel-rewards}
 */
export interface ChannelReward {
    /**
     * Unique identifier for the reward (ULID format)
     */
    id: string;

    /**
     * Display name of the reward (max 50 characters)
     */
    title: string;

    /**
     * Description of the reward (max 200 characters)
     */
    description: string;

    /**
     * Cost of the reward in channel points
     */
    cost: number;

    /**
     * Hex color code for the reward background
     */
    background_color: string;

    /**
     * Whether this reward is enabled
     */
    is_enabled: boolean;

    /**
     * Whether this reward requires user input
     */
    is_user_input_required: boolean;

    /**
     * Whether redemptions of this reward should skip the request queue
     */
    should_redemptions_skip_request_queue: boolean;
}

/**
 * Request body for creating a channel reward
 *
 * @see {@link https://docs.kick.com/apis/channel-rewards#post-channels-rewards}
 */
export interface ChannelRewardCreateRequest {
    /**
     * Display name of the reward (required, max 50 characters)
     */
    title: string;

    /**
     * Cost of the reward in channel points (required, min 1)
     */
    cost: number;

    /**
     * Description of the reward (optional, max 200 characters)
     */
    description?: string;

    /**
     * Hex color code for the reward background (optional, default #00e701)
     */
    background_color?: string;

    /**
     * Whether this reward is enabled (optional, default true)
     */
    is_enabled?: boolean;

    /**
     * Whether this reward requires user input (optional, default false)
     */
    is_user_input_required?: boolean;

    /**
     * Whether redemptions of this reward should skip the request queue (optional, default false)
     */
    should_redemptions_skip_request_queue?: boolean;
}

/**
 * Request body for updating a channel reward
 *
 * All fields are optional
 *
 * @see {@link https://docs.kick.com/apis/channel-rewards#patch-channels-rewards-id}
 */
export interface ChannelRewardUpdateRequest {
    /**
     * Display name of the reward (max 50 characters)
     */
    title?: string;

    /**
     * Cost of the reward in channel points (min 1)
     */
    cost?: number;

    /**
     * Description of the reward (max 200 characters)
     */
    description?: string;

    /**
     * Hex color code for the reward background
     */
    background_color?: string;

    /**
     * Whether this reward is enabled
     */
    is_enabled?: boolean;

    /**
     * Whether this reward requires user input
     */
    is_user_input_required?: boolean;

    /**
     * Whether redemptions of this reward should skip the request queue
     */
    should_redemptions_skip_request_queue?: boolean;
}

/**
 * Response from getting channel rewards
 *
 * @see {@link https://docs.kick.com/apis/channel-rewards#get-channels-rewards}
 */
export type RESTGetChannelRewardsResult = RESTResult<ChannelReward[]>;

/**
 * Response from creating a channel reward
 *
 * @see {@link https://docs.kick.com/apis/channel-rewards#post-channels-rewards}
 */
export type RESTCreateChannelRewardResult = RESTResult<ChannelReward>;

/**
 * Response from updating a channel reward
 *
 * Returns 204 No Content on success
 *
 * @see {@link https://docs.kick.com/apis/channel-rewards#patch-channels-rewards-id}
 */
export type RESTUpdateChannelRewardResult = never;

/**
 * Response from deleting a channel reward
 *
 * Returns 204 No Content on success
 *
 * @see {@link https://docs.kick.com/apis/channel-rewards#delete-channels-rewards-id}
 */
export type RESTDeleteChannelRewardResult = never;
