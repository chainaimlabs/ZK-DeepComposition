declare const RiskPublicOutput_base: (new (value: {
    riskThresholdToProve: import("o1js/dist/node/lib/provable/field").Field;
    riskEvaluated: import("o1js/dist/node/lib/provable/field").Field;
}) => {
    riskThresholdToProve: import("o1js/dist/node/lib/provable/field").Field;
    riskEvaluated: import("o1js/dist/node/lib/provable/field").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf").Provable<{
    riskThresholdToProve: import("o1js/dist/node/lib/provable/field").Field;
    riskEvaluated: import("o1js/dist/node/lib/provable/field").Field;
}, {
    riskThresholdToProve: bigint;
    riskEvaluated: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field").Field[]) => {
        riskThresholdToProve: import("o1js/dist/node/lib/provable/field").Field;
        riskEvaluated: import("o1js/dist/node/lib/provable/field").Field;
    };
} & {
    fromValue: (value: {
        riskThresholdToProve: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
        riskEvaluated: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        riskThresholdToProve: import("o1js/dist/node/lib/provable/field").Field;
        riskEvaluated: import("o1js/dist/node/lib/provable/field").Field;
    };
    toInput: (x: {
        riskThresholdToProve: import("o1js/dist/node/lib/provable/field").Field;
        riskEvaluated: import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        riskThresholdToProve: import("o1js/dist/node/lib/provable/field").Field;
        riskEvaluated: import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        riskThresholdToProve: string;
        riskEvaluated: string;
    };
    fromJSON: (x: {
        riskThresholdToProve: string;
        riskEvaluated: string;
    }) => {
        riskThresholdToProve: import("o1js/dist/node/lib/provable/field").Field;
        riskEvaluated: import("o1js/dist/node/lib/provable/field").Field;
    };
    empty: () => {
        riskThresholdToProve: import("o1js/dist/node/lib/provable/field").Field;
        riskEvaluated: import("o1js/dist/node/lib/provable/field").Field;
    };
};
export declare class RiskPublicOutput extends RiskPublicOutput_base {
}
export {};
