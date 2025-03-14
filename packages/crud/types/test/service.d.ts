declare class TestService {
    page(params: any): Promise<unknown>;
    update(params: {
        id: any;
        [key: string]: any;
    }): Promise<void>;
    add(params: any): Promise<string>;
    info(params: {
        id: any;
    }): Promise<{
        id: number;
        name: string;
        createTime: string;
        wages: number;
        status: number;
        account: string;
        occupation: number;
        phone: number;
    }>;
    delete(params: {
        ids: any[];
    }): Promise<void>;
    list(): Promise<{
        id: number;
        name: string;
        createTime: string;
        wages: number;
        status: number;
        account: string;
        occupation: number;
        phone: number;
    }[]>;
    search: {
        fieldEq: {
            propertyName: string;
            comment: string;
            source: string;
        }[];
        fieldLike: {
            propertyName: string;
            comment: string;
            dict: string[];
            source: string;
        }[];
        keyWordLikeFields: {
            propertyName: string;
            comment: string;
            source: string;
        }[];
    };
}
export { TestService };
