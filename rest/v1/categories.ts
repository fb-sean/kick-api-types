import type {Category, Categrories} from '../../payloads';
import type {RESTError, RESTResponse} from './global';

/**
 * @see {@link https://docs.kick.com/apis/categories#get-categories}
 */
export interface RESTGetCategoriesQuery {
    /**
     * Search query
     */
    q: string;

    /**
     *  Page number, defaults to `1` if not provided
     */
    page?: number;
}

/**
 * @see {@link https://docs.kick.com/apis/categories#get-categories}
 */
export type RESTGetCategoriesResult = RESTResponse<Categrories>;

/**
 * @see {@link https://docs.kick.com/apis/categories#get-categories}
 */
export type RESTGetCategoriesError = RESTError;

/**
 * @see {@link https://docs.kick.com/apis/categories#get-categories-category_id}
 */
export interface RESTGetCategoryQuery {
    categoryId: number;
}

/**
 * @see {@link https://docs.kick.com/apis/categories#get-categories-category_id}
 */
export type RESTGetCategoryResult = RESTResponse<Category>;
