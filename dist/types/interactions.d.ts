export type InteractionParams ={
    locationId?: any,
    siteUrls?: any,
    startDate?: any,
    endDate?:any,
    category?: any,
    ratingFilters?: any,
    before?: any,
    after?: any,
    first?: any,
    last?: any
}

export type Interactions ={
    pageInfo?: PageInfo,
    edges?: Array<Node>,// ask type of this
    totalCount?: number
}

export type PageInfo ={
    hasNextPage?: boolean,
    hasPreviousPage?: boolean
}

export type Node ={
    id?: string, //interaction Id
    source?: string,
    title?: string,
    content?: string,
    authorName?: string,
    authorAvatar?: string,
    authorUrl?: string,
    rating?: number,
    date?: string,
    permalink?: string,
    category?: string,
    type?: string,
    phtoUrl?: string,
    photoThumbnailUrl?: string,
    responded?: boolean,
    notes?: string,
    responses?: Array<Responses>, // ask type of this
    totalResponses?: number,
    canRespond?: boolean
}

export type Responses ={
    id?: string,
    title?: string,
    authorName?: string,
    authorAvatar?: string,
    authorUrl?: string,
    authorInfo?: string,
    date?: string,
    permalink?: string,
    photoUrl?: string,
    photoThumbnailUrl?: string,
    respondedWith?: number,
    respondedBy?: number,
    responseStatus?: string
}

// export type ListInteractions ={
//     data: Interactions,
// }