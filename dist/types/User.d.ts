export type User = {
    UserId?: string;
    email?: string;
    roleId?: string;
    firstName?: string;
    lastName?: string;
    inviteStatus?: boolean;
    customRole?: Object;
    customRoleId?: string;
    customRoleName?: string;
    directCustomer?: boolean;
    AccountId?: string;
    locationId?: string;
    folderId: string;
    phone?: number;
    archived?: boolean;

}

export type createUserWithRole = {
    input: User;
}