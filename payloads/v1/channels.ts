import type {Category} from './categories';

export interface Channel {
    banner_picture: string;
    broadcaster_user_id: number;
    category: Category;
    channel_description: string;
    slug: string;
    stream: {
        is_live: true;
        is_mature: true;
        key: string;
        language: string;
        start_time: string;
        url: string;
        viewer_count: number;
    };
    stream_title: string;
}
