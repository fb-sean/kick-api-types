import type {EventNames, EventSubscriptionResults, EventSubscriptions} from '../../payloads';
import type {RESTResult} from './global';

/**
 * @see {@link https://docs.kick.com/events/subscribe-to-events#get-events-subscriptions}
 */
export type RESTGetEventSubscriptionsResult = RESTResult<EventSubscriptions>;

/**
 * @see {@link https://docs.kick.com/events/subscribe-to-events#post-events-subscriptions}
 */
export interface RESTPostEventSubscriptionsBody {
    /**
     * The ID of the broadcaster whose events you want to listen to.
     */
    broadcaster_user_id?: number;

    /**
     * An array of specific events to subscribe to.
     *
     * @see {@link https://docs.kick.com/events/event-types}
     */
    events: Array<{
        /**
         * The name of the event
         */
        name: EventNames;

        /**
         * The version of the event
         */
        version: number;
    }>;

    /**
     * The subscription method. Currently, only 'webhook' is supported.
     */
    method: 'webhook';
}

/**
 * @see {@link https://docs.kick.com/events/subscribe-to-events#post-events-subscriptions}
 */
export type RESTPostEventSubscriptionsResult = RESTResult<EventSubscriptionResults>;

/**
 * OK result returns 204
 *
 * @see {@link https://docs.kick.com/events/subscribe-to-events#delete-events-subscriptions}
 */
export type RESTDeleteEventSubscriptionsResult = never;
