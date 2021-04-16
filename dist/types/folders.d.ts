export type AddLocations ={
    name:string,
    locationIds:Array<string>
}

export type AddLocationsPropierties={
    input:AddLocations
}

export type Rename={
    name:string
    id:Array<string>
}

export type RenameParams={
    input:Rename
}

export type RemoveLocations={
    input:{
        locationIds:Array<string>
    }
}

export type DeleteFolder={
    input:{
        name:string
    }
}
