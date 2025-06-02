import type {Users} from '../../payloads';
import type {RESTResult} from './global';

/**
 * If no IDs are supplied, information for the currently authorised user will be returned in the array
 *
 * @see {@link https://docs.kick.com/apis/users#get-users}
 */
export interface RESTGetUsersQuery {

    /**
     * Array of user IDs to query
     */
    id?: number[];
}

/**
 * @see {@link https://docs.kick.com/apis/users#get-users}
 */
export type RESTGetUsersResult = RESTResult<Users>;
