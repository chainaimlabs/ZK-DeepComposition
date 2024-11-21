declare const CorporateRegistrationPublicOutput_base: (new (value: {
    corporateComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
    currCorporateComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
}) => {
    corporateComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
    currCorporateComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf").Provable<{
    corporateComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
    currCorporateComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
}, {
    corporateComplianceToProve: bigint;
    currCorporateComplianceStatusCode: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field").Field[]) => {
        corporateComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        currCorporateComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
} & {
    fromValue: (value: {
        corporateComplianceToProve: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
        currCorporateComplianceStatusCode: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        corporateComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        currCorporateComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
    toInput: (x: {
        corporateComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        currCorporateComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        corporateComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        currCorporateComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        corporateComplianceToProve: string;
        currCorporateComplianceStatusCode: string;
    };
    fromJSON: (x: {
        corporateComplianceToProve: string;
        currCorporateComplianceStatusCode: string;
    }) => {
        corporateComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        currCorporateComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
    empty: () => {
        corporateComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        currCorporateComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
};
export declare class CorporateRegistrationPublicOutput extends CorporateRegistrationPublicOutput_base {
}
declare const InternationalTradeCompliancePublicOutput_base: (new (value: {
    internationalTradeComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
    currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
}) => {
    internationalTradeComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
    currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf").Provable<{
    internationalTradeComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
    currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
}, {
    internationalTradeComplianceToProve: bigint;
    currEXIMComplianceStatusCode: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field").Field[]) => {
        internationalTradeComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
} & {
    fromValue: (value: {
        internationalTradeComplianceToProve: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
        currEXIMComplianceStatusCode: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        internationalTradeComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
    toInput: (x: {
        internationalTradeComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        internationalTradeComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        internationalTradeComplianceToProve: string;
        currEXIMComplianceStatusCode: string;
    };
    fromJSON: (x: {
        internationalTradeComplianceToProve: string;
        currEXIMComplianceStatusCode: string;
    }) => {
        internationalTradeComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
    empty: () => {
        internationalTradeComplianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
};
export declare class InternationalTradeCompliancePublicOutput extends InternationalTradeCompliancePublicOutput_base {
}
export {};
