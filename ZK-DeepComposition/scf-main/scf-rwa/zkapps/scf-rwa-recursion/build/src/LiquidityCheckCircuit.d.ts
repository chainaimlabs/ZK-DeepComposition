import { SmartContract, State, CircuitString } from 'o1js';
declare const ACTUSData_base: (new (value: {
    scenarioID: CircuitString;
    scenarioName: string;
    riskEvaluated: import("o1js/dist/node/lib/provable/field").Field;
    cashInflows: number[];
    cashOutflows: number[];
    newInvoiceAmount: number;
    newInvoiceEvaluationMonth: number;
    liquidityThreshold: number;
}) => {
    scenarioID: CircuitString;
    scenarioName: string;
    riskEvaluated: import("o1js/dist/node/lib/provable/field").Field;
    cashInflows: number[];
    cashOutflows: number[];
    newInvoiceAmount: number;
    newInvoiceEvaluationMonth: number;
    liquidityThreshold: number;
}) & {
    _isStruct: true;
} & import("o1js/dist/node/lib/provable/provable").Provable<{
    scenarioID: CircuitString;
    scenarioName: string;
    riskEvaluated: import("o1js/dist/node/lib/provable/field").Field;
    cashInflows: number[];
    cashOutflows: number[];
    newInvoiceAmount: number;
    newInvoiceEvaluationMonth: number;
    liquidityThreshold: number;
}, {
    scenarioID: string;
    scenarioName: string;
    riskEvaluated: bigint;
    cashInflows: number[];
    cashOutflows: number[];
    newInvoiceAmount: number;
    newInvoiceEvaluationMonth: number;
    liquidityThreshold: number;
}> & {
    fromValue: (value: {
        scenarioID: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        scenarioName: string;
        riskEvaluated: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
        cashInflows: number[];
        cashOutflows: number[];
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
    }) => {
        scenarioID: CircuitString;
        scenarioName: string;
        riskEvaluated: import("o1js/dist/node/lib/provable/field").Field;
        cashInflows: number[];
        cashOutflows: number[];
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
    };
    toInput: (x: {
        scenarioID: CircuitString;
        scenarioName: string;
        riskEvaluated: import("o1js/dist/node/lib/provable/field").Field;
        cashInflows: number[];
        cashOutflows: number[];
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        scenarioID: CircuitString;
        scenarioName: string;
        riskEvaluated: import("o1js/dist/node/lib/provable/field").Field;
        cashInflows: number[];
        cashOutflows: number[];
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
    }) => {
        scenarioID: {
            values: {
                value: string;
            }[];
        };
        scenarioName: string;
        riskEvaluated: string;
        cashInflows: number[];
        cashOutflows: number[];
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
    };
    fromJSON: (x: {
        scenarioID: {
            values: {
                value: string;
            }[];
        };
        scenarioName: string;
        riskEvaluated: string;
        cashInflows: number[];
        cashOutflows: number[];
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
    }) => {
        scenarioID: CircuitString;
        scenarioName: string;
        riskEvaluated: import("o1js/dist/node/lib/provable/field").Field;
        cashInflows: number[];
        cashOutflows: number[];
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
    };
    empty: () => {
        scenarioID: CircuitString;
        scenarioName: string;
        riskEvaluated: import("o1js/dist/node/lib/provable/field").Field;
        cashInflows: number[];
        cashOutflows: number[];
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
    };
};
export declare class ACTUSData extends ACTUSData_base {
}
export declare class LiquidityCheckCircuit extends SmartContract {
    accepted: State<import("o1js/dist/node/lib/provable/bool").Bool>;
    init(): void;
    verifyTrace(trace: ACTUSData): Promise<void>;
}
export declare function verifyCashFlows(input: ACTUSData): import("o1js/dist/node/lib/provable/bool").Bool;
export {};
