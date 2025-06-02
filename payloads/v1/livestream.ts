import type {Category} from './categories';

export interface Livestream {
    broadcaster_user_id: number;
    category: Category;
    channel_id: number;
    has_mature_content: boolean;
    language: string;
    slug: string;
    started_at: string;
    stream_title: string;
    thumbnail: string;
    viewer_count: number;
}

export type Livestreams = Livestream[];
