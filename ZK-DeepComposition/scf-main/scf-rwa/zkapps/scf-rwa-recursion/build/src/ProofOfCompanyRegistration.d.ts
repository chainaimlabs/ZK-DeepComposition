import { Signature, SmartContract, PublicKey } from 'o1js';
import { CorporateRegistrationData } from './ProofOfCompanyRegistration.utils.js';
declare const CompanyRegistrationPublicOutput_base: (new (value: {
    corporateComplianceToProve: import("o1js/dist/node/lib/provable/field.js").Field;
    currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field.js").Field;
    creatorPublicKey: PublicKey;
}) => {
    corporateComplianceToProve: import("o1js/dist/node/lib/provable/field.js").Field;
    currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field.js").Field;
    creatorPublicKey: PublicKey;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    corporateComplianceToProve: import("o1js/dist/node/lib/provable/field.js").Field;
    currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field.js").Field;
    creatorPublicKey: PublicKey;
}, {
    corporateComplianceToProve: bigint;
    currCompanyComplianceStatusCode: bigint;
    creatorPublicKey: {
        x: bigint;
        isOdd: boolean;
    };
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        corporateComplianceToProve: import("o1js/dist/node/lib/provable/field.js").Field;
        currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field.js").Field;
        creatorPublicKey: PublicKey;
    };
} & {
    fromValue: (value: {
        corporateComplianceToProve: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        currCompanyComplianceStatusCode: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        creatorPublicKey: PublicKey | {
            x: bigint | import("o1js/dist/node/lib/provable/field.js").Field;
            isOdd: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        };
    }) => {
        corporateComplianceToProve: import("o1js/dist/node/lib/provable/field.js").Field;
        currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field.js").Field;
        creatorPublicKey: PublicKey;
    };
    toInput: (x: {
        corporateComplianceToProve: import("o1js/dist/node/lib/provable/field.js").Field;
        currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field.js").Field;
        creatorPublicKey: PublicKey;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        corporateComplianceToProve: import("o1js/dist/node/lib/provable/field.js").Field;
        currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field.js").Field;
        creatorPublicKey: PublicKey;
    }) => {
        corporateComplianceToProve: string;
        currCompanyComplianceStatusCode: string;
        creatorPublicKey: string;
    };
    fromJSON: (x: {
        corporateComplianceToProve: string;
        currCompanyComplianceStatusCode: string;
        creatorPublicKey: string;
    }) => {
        corporateComplianceToProve: import("o1js/dist/node/lib/provable/field.js").Field;
        currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field.js").Field;
        creatorPublicKey: PublicKey;
    };
    empty: () => {
        corporateComplianceToProve: import("o1js/dist/node/lib/provable/field.js").Field;
        currCompanyComplianceStatusCode: import("o1js/dist/node/lib/provable/field.js").Field;
        creatorPublicKey: PublicKey;
    };
};
export declare class CompanyRegistrationPublicOutput extends CompanyRegistrationPublicOutput_base {
}
export declare const proofOfCompliance: {
    name: string;
    compile: (options?: {
        cache?: import("o1js/dist/node/lib/proof-system/cache.js").Cache | undefined;
        forceRecompile?: boolean | undefined;
    } | undefined) => Promise<{
        verificationKey: {
            data: string;
            hash: import("o1js/dist/node/lib/provable/field.js").Field;
        };
    }>;
    verify: (proof: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, CompanyRegistrationPublicOutput>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        proveCompliance: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    publicOutputType: typeof CompanyRegistrationPublicOutput;
    privateInputTypes: {
        proveCompliance: [typeof CorporateRegistrationData, typeof Signature, typeof Signature, typeof PublicKey];
    };
    rawMethods: {
        proveCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [CorporateRegistrationData, Signature, Signature, PublicKey] & any[]) => Promise<CompanyRegistrationPublicOutput>;
    };
} & {
    proveCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [CorporateRegistrationData, Signature, Signature, PublicKey] & any[]) => Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, CompanyRegistrationPublicOutput>>;
};
export declare const ProofOfCompliance_: {
    new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
        proof: unknown;
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: CompanyRegistrationPublicOutput;
        maxProofsVerified: 0 | 2 | 1;
    }): {
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: CompanyRegistrationPublicOutput;
        proof: unknown;
        maxProofsVerified: 0 | 2 | 1;
        shouldVerify: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verify(): void;
        verifyIf(condition: import("o1js/dist/node/lib/provable/bool.js").Bool): void;
        toJSON(): import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof;
    };
    publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    publicOutputType: typeof CompanyRegistrationPublicOutput;
    tag: () => {
        name: string;
        publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
        publicOutputType: typeof CompanyRegistrationPublicOutput;
    };
    fromJSON<S extends (new (...args: any) => import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<unknown, unknown>) & {
        prototype: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<any, any>;
        publicInputType: import("o1js/dist/node/lib/provable/types/struct.js").FlexibleProvablePure<any>;
        publicOutputType: import("o1js/dist/node/lib/provable/types/struct.js").FlexibleProvablePure<any>;
        tag: () => {
            name: string;
        };
        fromJSON: typeof import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof.fromJSON;
        dummy: typeof import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof.dummy;
    } & {
        prototype: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<unknown, unknown>;
    }>(this: S, { maxProofsVerified, proof: proofString, publicInput: publicInputJson, publicOutput: publicOutputJson, }: import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof): Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/bindings/lib/provable-generic.js").InferProvable<S["publicInputType"], import("o1js/dist/node/lib/provable/field.js").Field>, import("o1js/dist/node/bindings/lib/provable-generic.js").InferProvable<S["publicOutputType"], import("o1js/dist/node/lib/provable/field.js").Field>>>;
    dummy<Input, OutPut>(publicInput: Input, publicOutput: OutPut, maxProofsVerified: 0 | 2 | 1, domainLog2?: number | undefined): Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<Input, OutPut>>;
};
export declare class ProofOfCompliance extends ProofOfCompliance_ {
}
declare const ProofOfCompanyRegistrationProof_base: {
    new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
        proof: unknown;
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: CompanyRegistrationPublicOutput;
        maxProofsVerified: 0 | 2 | 1;
    }): {
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: CompanyRegistrationPublicOutput;
        proof: unknown;
        maxProofsVerified: 0 | 2 | 1;
        shouldVerify: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verify(): void;
        verifyIf(condition: import("o1js/dist/node/lib/provable/bool.js").Bool): void;
        toJSON(): import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof;
    };
    publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    publicOutputType: typeof CompanyRegistrationPublicOutput;
    tag: () => {
        name: string;
        publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
        publicOutputType: typeof CompanyRegistrationPublicOutput;
    };
    fromJSON<S extends (new (...args: any) => import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<unknown, unknown>) & {
        prototype: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<any, any>;
        publicInputType: import("o1js/dist/node/lib/provable/types/struct.js").FlexibleProvablePure<any>;
        publicOutputType: import("o1js/dist/node/lib/provable/types/struct.js").FlexibleProvablePure<any>;
        tag: () => {
            name: string;
        };
        fromJSON: typeof import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof.fromJSON;
        dummy: typeof import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof.dummy;
    } & {
        prototype: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<unknown, unknown>;
    }>(this: S, { maxProofsVerified, proof: proofString, publicInput: publicInputJson, publicOutput: publicOutputJson, }: import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof): Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/bindings/lib/provable-generic.js").InferProvable<S["publicInputType"], import("o1js/dist/node/lib/provable/field.js").Field>, import("o1js/dist/node/bindings/lib/provable-generic.js").InferProvable<S["publicOutputType"], import("o1js/dist/node/lib/provable/field.js").Field>>>;
    dummy<Input, OutPut>(publicInput: Input, publicOutput: OutPut, maxProofsVerified: 0 | 2 | 1, domainLog2?: number | undefined): Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<Input, OutPut>>;
};
export declare class ProofOfCompanyRegistrationProof extends ProofOfCompanyRegistrationProof_base {
}
export declare class ProofOfCompanyRegistration extends SmartContract {
    events: {
        'provided-valid-proof': typeof CompanyRegistrationPublicOutput;
    };
    init(): void;
    verifyProof(proof: ProofOfCompliance): Promise<void>;
}
export {};
