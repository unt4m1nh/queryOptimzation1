export type TProducts = {
    _id: string,
    name: string,
    main_category: string,
    sub_category: string,
    image: string,
    link: string,
    ratings: number,
    no_of_ratings: number,
    discount_price: string,
    actual_price: string,
}

export type TExecStats = {
    executionSuccess: boolean;
    nReturned: number;
    executionTimeMillis: number;
}