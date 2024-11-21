import 'dotenv/config';
import { Field, CircuitString } from 'o1js';
declare const CorporateRegistrationData_base: (new (value: {
    companyID: CircuitString;
    companyName: CircuitString;
    mcaID: CircuitString;
    businessPANID: CircuitString;
    currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
}) => {
    companyID: CircuitString;
    companyName: CircuitString;
    mcaID: CircuitString;
    businessPANID: CircuitString;
    currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf").Provable<{
    companyID: CircuitString;
    companyName: CircuitString;
    mcaID: CircuitString;
    businessPANID: CircuitString;
    currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
}, {
    companyID: string;
    companyName: string;
    mcaID: string;
    businessPANID: string;
    currCompanyComplianceStatusCode: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field").Field[]) => {
        companyID: CircuitString;
        companyName: CircuitString;
        mcaID: CircuitString;
        businessPANID: CircuitString;
        currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
} & {
    fromValue: (value: {
        companyID: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        companyName: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        mcaID: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        businessPANID: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        currCompanyComplianceStatusCode: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        companyID: CircuitString;
        companyName: CircuitString;
        mcaID: CircuitString;
        businessPANID: CircuitString;
        currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
    toInput: (x: {
        companyID: CircuitString;
        companyName: CircuitString;
        mcaID: CircuitString;
        businessPANID: CircuitString;
        currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        companyID: CircuitString;
        companyName: CircuitString;
        mcaID: CircuitString;
        businessPANID: CircuitString;
        currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
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
        mcaID: {
            values: {
                value: string;
            }[];
        };
        businessPANID: {
            values: {
                value: string;
            }[];
        };
        currCompanyComplianceStatusCode: string;
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
        mcaID: {
            values: {
                value: string;
            }[];
        };
        businessPANID: {
            values: {
                value: string;
            }[];
        };
        currCompanyComplianceStatusCode: string;
    }) => {
        companyID: CircuitString;
        companyName: CircuitString;
        mcaID: CircuitString;
        businessPANID: CircuitString;
        currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
    empty: () => {
        companyID: CircuitString;
        companyName: CircuitString;
        mcaID: CircuitString;
        businessPANID: CircuitString;
        currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
};
declare class CorporateRegistrationData extends CorporateRegistrationData_base {
}
declare const zkOracleResponseMock: () => {
    data: {
        companyID: string;
        companyName: string;
        mcaID: string;
        businessPANID: string;
        currCompanyComplianceStatusCode: string;
    };
    signature: any;
    publicKey: string;
};
declare const evalCorporateCompliance: (currCompanyComplianceStatusCode: Field) => Field;
export { CorporateRegistrationData, evalCorporateCompliance, zkOracleResponseMock };
