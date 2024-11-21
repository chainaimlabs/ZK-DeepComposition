import 'dotenv/config';
import { Field, CircuitString } from 'o1js';
declare const InternationalTradeComplianceData_base: (new (value: {
    companyID: CircuitString;
    companyName: CircuitString;
    dgftID: CircuitString;
    businessPANID: CircuitString;
    currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
}) => {
    companyID: CircuitString;
    companyName: CircuitString;
    dgftID: CircuitString;
    businessPANID: CircuitString;
    currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf").Provable<{
    companyID: CircuitString;
    companyName: CircuitString;
    dgftID: CircuitString;
    businessPANID: CircuitString;
    currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
}, {
    companyID: string;
    companyName: string;
    dgftID: string;
    businessPANID: string;
    currEXIMComplianceStatusCode: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field").Field[]) => {
        companyID: CircuitString;
        companyName: CircuitString;
        dgftID: CircuitString;
        businessPANID: CircuitString;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
} & {
    fromValue: (value: {
        companyID: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        companyName: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        dgftID: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        businessPANID: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        currEXIMComplianceStatusCode: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        companyID: CircuitString;
        companyName: CircuitString;
        dgftID: CircuitString;
        businessPANID: CircuitString;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
    toInput: (x: {
        companyID: CircuitString;
        companyName: CircuitString;
        dgftID: CircuitString;
        businessPANID: CircuitString;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        companyID: CircuitString;
        companyName: CircuitString;
        dgftID: CircuitString;
        businessPANID: CircuitString;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        companyID: {
            values: {
                value: string;
            }[];
        };
        companyName: {
            values: {
                value: string;
            }[];
        };
        dgftID: {
            values: {
                value: string;
            }[];
        };
        businessPANID: {
            values: {
                value: string;
            }[];
        };
        currEXIMComplianceStatusCode: string;
    };
    fromJSON: (x: {
        companyID: {
            values: {
                value: string;
            }[];
        };
        companyName: {
            values: {
                value: string;
            }[];
        };
        dgftID: {
            values: {
                value: string;
            }[];
        };
        businessPANID: {
            values: {
                value: string;
            }[];
        };
        currEXIMComplianceStatusCode: string;
    }) => {
        companyID: CircuitString;
        companyName: CircuitString;
        dgftID: CircuitString;
        businessPANID: CircuitString;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
    empty: () => {
        companyID: CircuitString;
        companyName: CircuitString;
        dgftID: CircuitString;
        businessPANID: CircuitString;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
};
declare class InternationalTradeComplianceData extends InternationalTradeComplianceData_base {
}
declare const zkOracleResponseMock: () => {
    data: {
        companyID: string;
        companyName: string;
        dgftID: string;
        businessPANID: string;
        currEXIMComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
    signature: any;
    publicKey: string;
};
declare const evalInternationalTradeCompliance: (currEXIMComplianceStatusCode: Field) => Field;
export { InternationalTradeComplianceData, evalInternationalTradeCompliance, zkOracleResponseMock };
