export * from './oauth2';
export * from './categories';

export const APIVersion = 'v1';

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
}