/**
 * https://docs.kick.com/getting-started/generating-tokens-oauth2-flow#authorization-endpoint
 */
export interface RESTOAuth2AuthorizationQuery {
    /*
     * Your application's client ID
     */
    client_id: string;
    response_type: 'code';
    /*
     * The URI to redirect users to after authorization
     */
    redirect_uri: string;
    /*
     * A random string to maintain state between the request and callback
     * !!Only at the moment required for the authorization, can be changed in the future.!!
     */
    state: string;
    /*
     * Scopes for request
     */
    scope: string;
    /*
     * OAuth code challenge
     */
    code_challenge: string;
    /*
     * S256
     */
    code_challenge_method: string;
}

/**
 * https://docs.kick.com/getting-started/generating-tokens-oauth2-flow#token-endpoint
 */
export interface RESTPostOAuth2AccessTokenURLEncodedData {
    /*
     * Code received during the Authorization Flow
     */
    code: string;
    /*
     * Your application's client ID
     */
    client_id: string;
    /*
     * Your application's client secret
     */
    client_secret: string;
    /*
     * The URI to redirect users to after authorization
     */
    redirect_uri: string;
    grant_type: 'authorization_code';
    /*
     * To verify PKCE challenge code created
     */
    code_verifier: string;
}

/**
 * https://docs.kick.com/getting-started/generating-tokens-oauth2-flow#example-response-1
 */
export interface RESTPostOAuth2AccessTokenResult {
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_in: number;
    scope: string;
}

/**
 * https://docs.kick.com/getting-started/generating-tokens-oauth2-flow#refresh-token-endpoint
 */
export interface RESTPostOAuth2RefreshTokenURLEncodedData {
    /*
     * Code received during the Authorization Flow
     */
    refresh_token: string;
    /*
     * Your application's client ID
     */
    client_id: string;
    /*
     * Your application's client secret
     */
    client_secret: string;
    grant_type: 'refresh_token';
}

export type RESTPostOAuth2RefreshTokenResult = RESTPostOAuth2AccessTokenResult;

/**
 * https://docs.kick.com/getting-started/generating-tokens-oauth2-flow#revoke-token-endpoint
 */
export interface RESTPostOAuth2RevokeTokenURLEncodedData {
    /*
     * The token to be revoked
     */
    token: string;
    token_hint_type: 'access_token' | 'refresh_token';
}