export type User = {
    id?: string;
    email?: string;
    roleId?: string;
    firstName?: string;
    lastName?: string;
    inviteStatus?: boolean;
    customRole?: CustomRole;
    customRoleId?: string;
    customRoleName?: string;
    directCustomer?: boolean;
    accountId?: string;
    locationId?: string;
    folderId: string;
    phone?: number;
    archived?: boolean;
};

export type CustomRole = {
    id?: string;
    name?: string;
}

export type CreateUserWithRole = {
    input: User ;
};

export type InputLocationUser = {
    userId?: string;
    locationsIds?: Array<string>;
};

export type LocationUser = {
    input: InputLocationUser;
};

export type InputFolderUser = {
    userId?: string;
    foldersIds?: Array<string>;
}

export type FolderUser = {
    input: InputFolderUser;
}

