export * from './categories';
export * from './channels';
export * from './chat';
export * from './events';
export * from './global';
export * from './livestreams';
export * from './moderation';
export * from './oauth2';
export * from './public-key';
export * from './users';

export const APIVersion = 'v1';

export const APIBasePath = `/public/${APIVersion}`;

export const Routes = {
    /**
     * Route for:
     * - GET `/oauth/authorize`
     */
    OAuthAuthorize() {
        return '/oauth/authorize' as const;
    },
    /**
     * Route for:
     * - POST `/oauth/token`
     */
    OAuthToken() {
        return '/oauth/token' as const;
    },
    /**
     * Route for:
     * - POST `/oauth/token`
     */
    OAuthRefresh() {
        return '/oauth/token' as const;
    },
    /**
     * Route for:
     * - POST `/oauth/token`
     */
    OAuthRevoke() {
        return '/oauth/revoke' as const;
    },

    /**
     * Route for:
     * - GET `/categories`
     */
    Categories() {
        return '/categories' as const;
    },
    /**
     * Route for:
     * - GET `/categories/{categorie.id}`
     */
    Category(id: number) {
        return `/categories/${id}` as const;
    },

    /**
     * Route for:
     * - POST `/token/introspect`
     */
    TokenIntrospect() {
        return `/token/introspect` as const;
    },
    /**
     * Route for:
     * - POST `/users`
     */
    Users() {
        return `/users` as const;
    },

    /**
     * Route for:
     * - GET `/channels`
     * - PATCH `/channels`
     */
    Channels() {
        return `/channels` as const;
    },

    /**
     * Route for:
     * - POST `/chat`
     */
    Chat() {
        return `/chat` as const;
    },

    /**
     * Route for:
     * - GET `/public-key`
     */
    PublicKey() {
        return `/public-key` as const;
    },

    /**
     * Route for:
     * - GET `/events/subscriptions`
     * - POST `/events/subscriptions`
     * - DELETE `/events/subscriptions`
     */
    EventsSubscriptions() {
        return `/events/subscriptions` as const;
    },
};
