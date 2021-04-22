export type Location = {
  id?: string;
  name?: string;
  storeId?: string;
  street?: string;
  city?: string;
  postalCode?: string;
  phone?: string;
  stateIso?: string; //TODO: consider enum
  countryIso?: string; //TODO: consider enum
  ownerEmail?: string;
  subCategoryId?: number; //TODO: consider enum
  subCategoryName?: string;
  description?: string;
  bizUrl?: string;
  latitude?: string;
  longitude?: string;
  locationPhotos?: any; //TODO: define this
  ownerName?: string;
  facebookUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  tagline?: string;
  paymentMethods?: Array<string>;
  yearOfIncorporation?: number;
  hideAddress?: boolean;
  businessHours?: any; //TODO: define this
  additionalCategoryIds?: Array<number>;
  videos?: Array<string>;
  archivalScheduledAt?: any; //TODO: timestamp
  archivedAt?: any; //TODO: timestamp
  tenure?: string; //TODO: consider enum
  databaseId?: number;
};

export type GetAllLocationsParams = {
  after?: any; //TODO: define
  before?: any; //TODO: define
  first?: any;
  last?: any;
};

export type CreateLocationParams = {
  input?: Location;
};

export type AddPhoto = {
  locationId:string;
  photos:Array<string>;
};

export type DeletePhoto = {
  locationId:string;
  photosIds: Array<string>; 
};

export type UpdateLocation = {
  input:Location;
};

export type StartPhoto = {
  locationId:string;
  mediaIds:[string];
  starred:Boolean;
};
