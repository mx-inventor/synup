export type Create ={
    input?:{
        locationId?:string,
        name?: string,
        locationCostumer?: Array<Customer>,
    }
}

export type listParams ={
    locationId?:string,
    startDate?: any,
    endDate?: any
}

export type AddCustomer ={
    reviewCampaignId?: string,
    locationCustomers?: Array<Customer>,
}

export type Customer ={
    name?:string,
    email?:string
    phone?:string,
}