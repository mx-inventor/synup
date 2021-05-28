export type InteractionParams = {
  locationId?: string;
  siteUrls?: Array<string>;
  startDate?: any;
  endDate?: any;
  category?: any;
  ratingFilters?: any;
  before?: any;
  after?: any;
  first?: any;
  last?: any;
  categories?: string; // this is required by ISSUES in the api
};

export type Interactions = {
  pageInfo?: PageInfo;
  edges?: Array<Node>;
  totalCount?: number;
};

export type PageInfo = {
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
};

export type Node = {
  id?: string;
  source?: string;
  title?: string;
  content?: string;
  authorName?: string;
  authorAvatar?: string;
  authorUrl?: string;
  rating?: number;
  date?: string;
  permalink?: string;
  category?: string;
  type?: string;
  phtoUrl?: string;
  photoThumbnailUrl?: string;
  responded?: boolean;
  notes?: string;
  responses?: Array<Responses>;
  totalResponses?: number;
  canRespond?: boolean;
};

export type Responses = {
  id?: string;
  title?: string;
  authorName?: string;
  authorAvatar?: string;
  authorUrl?: string;
  authorInfo?: string;
  date?: string;
  permalink?: string;
  photoUrl?: string;
  photoThumbnailUrl?: string;
  respondedWith?: number;
  respondedBy?: number;
  responseStatus?: string;
};

//type to respond to an interaction
export type Interaction = {
  interactionId?: string;
  source?: string;
  content?: string;
  authorName?: string;
  authorAvatar?: string;
  date?: string;
  interactionStatus?: string;
};

export type Site = {
  name?: string;
  url?: string;
};
