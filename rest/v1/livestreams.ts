import type {Livestreams} from '../../payloads/v1/livestream';
import type {RESTResult} from './global';

/**
 * @see {@link https://docs.kick.com/apis/livestreams#get-livestreams}
 */
export interface RESTGetLivestreamsQuery {
    /**
     * Filter livestreams by the ID of the broadcaster's channel.
     */
    broadcaster_user_id?: number;

    /**
     * Filter livestreams by the ID of the category.
     */
    category_id?: number;

    /**
     * Filter livestreams by their language
     */
    language?: string;

    /**
     * The maximum number of livestreams to return.
     *
     * Minimum value: `1`, maximum value: `100`.
     */
    limit?: number;

    /**
     * The field to order the results by.
     */
    sort?: 'viewer_count' | 'started_at';
}

/**
 * @see {@link https://docs.kick.com/apis/livestreams#get-livestreams}
 */
export type RESTGetLivestreamsResult = RESTResult<Livestreams>;
