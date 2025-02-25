export declare const data: ({
    key: string;
    title: string;
    extraInfo?: undefined;
    unreleased?: undefined;
} | {
    extraInfo: {
        author: string;
        rating: number;
        releaseDate: string;
    };
    key: string;
    title: string;
    unreleased?: undefined;
} | {
    key: string;
    title: string;
    unreleased: boolean;
    extraInfo?: undefined;
})[];
