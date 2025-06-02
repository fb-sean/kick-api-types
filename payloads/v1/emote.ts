export interface EmotePosition {
    s: number;
    e: number;
}

export interface Emote {
    emote_id: string;
    positions: EmotePosition[];
}
