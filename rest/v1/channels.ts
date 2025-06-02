import type {Channels} from '../../payloads';
import type {RESTResult} from './global';

/**
 * If no parameters are provided, information for the currently authenticated user is returned.
 *
 * Only one of the query parameters should be supplied. Providing multiple query parameters will result in a 400 error.
 *
 * @see {@link https://docs.kick.com/apis/channels#get-channels}
 */
export interface RESTGetChannelsQuery {
    /**
     * Array of broadcaster user IDs
     *
     * Max 50 entries
     */
    broadcaster_user_id?: number[];

    /**
     * Array of broadcaster channel slugs
     *
     * Max 50 entries, max 25 characters each
     */
    slug?: string[];
}

/**
 * @see {@link https://docs.kick.com/apis/channels#get-channels}
 */
export type RESTGetChannelsResult = RESTResult<Channels>;

/**
 * At least one of the query parameters should be supplied.
 *
 * @see {@link https://docs.kick.com/apis/channels#patch-channels}
 */
export interface RESTPatchChannelsBody {
    /**
     * Category ID to place livestream into
     */
    category_id?: number;

    /**
     * New livestream title
     */
    stream_title?: string;
}

/**
 * OK result returns 204
 *
 * @see {@link https://docs.kick.com/apis/channels#patch-channels}
 */
export type RESTPatchChannelResult = never;
