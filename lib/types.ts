export type Store = {
    id: string;
    name: string;
    description: string | null;
    type: string;
    createdAt: Date;
    updatedAt: Date;
};

export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string | null;
    address: string | null;
    passwordHash: string;
    createdAt: Date;
    updatedAt: Date;
    active: boolean;
    storeId: string;
    store: Store;
    permissions: UserPermission[];
};

export type Permission = {
    id: string;
    name: string;
    description: string | null;
}

export type UserPermission = {
    permission: Permission;
}
