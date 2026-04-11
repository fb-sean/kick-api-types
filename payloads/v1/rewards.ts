/**
 * Reward information in webhook events
 * NOTE: This is a simplified version of ChannelReward without some fields
 * that are not provided in event payloads.
 */
export interface EventChannelReward {
    /**
     * Unique identifier for the reward (ULID format)
     */
    id: string;

    /**
     * Display name of the reward
     */
    title: string;

    /**
     * Cost of the reward in channel points
     */
    cost: number;

    /**
     * Description of the reward
     */
    description: string;
}
