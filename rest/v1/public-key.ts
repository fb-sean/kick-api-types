import type {RESTResult} from './global';

export type RESTGetPublicKeyResult = RESTResult<{
    public_key: string;
}>;
