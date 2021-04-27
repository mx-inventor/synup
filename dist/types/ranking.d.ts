export type KeywordsPermormance = {
    locationId?: string;
    fromDate?: any;
    toDate?: any;
}

export type KeywordsByLocationId = {
    id?: string;
    databaseId?: String;
    name?: string;
    sites?: Sites;
}

export type Sites = {
    name?: string;
    rankings?: Rankings;
}

export type Rankings = {
    rank?: number;
    rankeAt?: any;
    matchUrl?: string;
}
