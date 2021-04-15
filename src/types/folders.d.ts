export type AddLocations ={
    name:string,
    locationIds:Array<string>
}

export type AddLocationsPropierties={
    input:AddLocations
}

export type rename={
    name:string
    id:Array<string>
}

export type renameParams={
    input:rename
}