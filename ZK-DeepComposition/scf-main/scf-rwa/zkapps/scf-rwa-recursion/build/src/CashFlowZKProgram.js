import { Field, Struct, ZkProgram, SelfProof, CircuitString } from 'o1js';
//const { Field, ZKProgram, method } = require('o1js');
// Constants
const cashInflows = [15000, 20000, 10000]; // Monthly cash inflows
const cashOutflows = [8000, 10000, 20000]; // Monthly cash outflows
const newInvoiceAmount = 5000; // Amount of the new invoice
const liquidityThreshold = 1.5; // Required liquidity ratio
let cashFlowProjections = [];
let cumulativeCashFlow = 0;
// Define the Public Output Structure
export class CashFlowPublicOutput extends Struct({
    riskThresholdToProve: Field,
    riskEvaluated: Field,
    //creatorPublicKey: PublicKey,
}) {
}
class ACTUSData extends Struct({
    scenarioID: CircuitString,
    scenarioName: CircuitString,
    //mcaID: CircuitString,
    //businessPANID: CircuitString,
    riskEvaluated: Field,
    //currentDate: Field,
}) {
}
// zk-SNARK Program for Compliance.. which verifies corporate registration and international trade compliance.
//export const proofOfInternationalTradeCompliance = ZkProgram({
const CashFlowZKProgram = ZkProgram({
    name: 'CashFlowZKProgram',
    publicInput: Field,
    publicOutput: CashFlowPublicOutput,
    methods: {
        init: {
            privateInputs: [],
            async method(state) {
                //console.log(' in recurrsion  Add  :  init',Date.now());
                state.assertEquals(Field(1));
                return new CashFlowPublicOutput({
                    riskThresholdToProve: Field(1),
                    riskEvaluated: Field(1),
                    //creatorPublicKey: creatorPublicKey,
                });
            },
        },
        evaluate: {
            privateInputs: [SelfProof, SelfProof],
            async method(
            //complianceToProve: Field,
            //complianceData: ComplianceData,
            newState, earlierProof1, earlierProof2
            //oracleSignature: Signature,
            //creatorSignature: Signature,
            //creatorPublicKey: PublicKey
            ) {
                /*
                const validSignature = oracleSignature.verify(
                  PublicKey.fromBase58('B62qmXFNvz2sfYZDuHaY5htPGkx1u2E2Hn3rWuDWkE11mxRmpijYzWN'),
                  CorporateRegistrationData.toFields(corporateRegistrationData)
                );
                validSignature.assertTrue();
        
                const validSignature_ = creatorSignature.verify(
                  creatorPublicKey,
                  CorporateRegistrationData.toFields(corporateRegistrationData)
                );
                validSignature_.assertTrue();
                */
                earlierProof1.verify();
                earlierProof2.verify();
                let retRiskPublicOutput = new CashFlowPublicOutput({
                    riskThresholdToProve: Field(1),
                    riskEvaluated: Field(1),
                    //creatorPublicKey: creatorPublicKey,
                });
                newState.assertEquals(
                //Field(earlierProof1.publicOutput.complianceStatusCode.toJSON()).mul(Field(earlierProof2.publicOutput.complianceStatusCode.toJSON()))
                Field(earlierProof1.publicOutput.riskEvaluated).mul(Field(earlierProof2.publicOutput.riskEvaluated)));
                retRiskPublicOutput.riskEvaluated = Field(1);
                return retRiskPublicOutput;
            },
        },
        calculateCashFlows: {
            privateInputs: [
                ACTUSData,
                //Signature,
                //Signature,
                //PublicKey,
            ],
            async method(riskThresholdToProve, riskData) {
                let retCashFlowPublicOutput = new CashFlowPublicOutput({
                    riskThresholdToProve: Field(1),
                    riskEvaluated: Field(1),
                    //creatorPublicKey: creatorPublicKey,
                });
                for (let month = 0; month < cashInflows.length; month++) {
                    let inflow = cashInflows[month];
                    let outflow = cashOutflows[month] + (month === 2 ? newInvoiceAmount : 0); // Include invoice in month 3
                    let netCashFlow = inflow - outflow;
                    cumulativeCashFlow += netCashFlow;
                    let liquidityRatio = cumulativeCashFlow / (cashOutflows.reduce((acc, val) => acc + val, 0) + newInvoiceAmount);
                    cashFlowProjections.push({
                        month: month + 1,
                        cashInflow: inflow,
                        cashOutflow: outflow,
                        netCashFlow: netCashFlow,
                        cumulativeCashFlow: cumulativeCashFlow,
                        liquidityRatio: liquidityRatio
                    });
                }
                retCashFlowPublicOutput.riskEvaluated = Field(1);
                return retCashFlowPublicOutput;
            },
        },
        proveRiskAlignment: {
            privateInputs: [
                ACTUSData,
                //Signature,
                //Signature,
                //PublicKey,
            ],
            async method(riskThresholdToProve, riskData) {
                /*
                const validSignature = oracleSignature.verify(
                  PublicKey.fromBase58('B62qmXFNvz2sfYZDuHaY5htPGkx1u2E2Hn3rWuDWkE11mxRmpijYzWN'),
                  CorporateRegistrationData.toFields(corporateRegistrationData)
                );
                validSignature.assertTrue();
        
                const validSignature_ = creatorSignature.verify(
                  creatorPublicKey,
                  CorporateRegistrationData.toFields(corporateRegistrationData)
                );
                validSignature_.assertTrue();
                */
                //console.log(' data bef .. ',complianceData.complianceStatusCode)
                riskData.riskEvaluated.assertEquals(Field(1));
                return new CashFlowPublicOutput({
                    //corporateComplianceToProve: corporateComplianceToProve,
                    //currCompanyComplianceStatusCode: corporateRegistrationData.currCompanyComplianceStatusCode,
                    riskThresholdToProve: Field(1),
                    //complianceStatusCode: Field(1),
                    riskEvaluated: Field(1),
                    //creatorPublicKey: creatorPublicKey,
                });
            },
        },
    }
});
// Main function to check proofs, perform multiplication, and generate new proof
const main = async () => {
    console.log('Compiling proofs...');
};
// Define a function to generate a new proof (customize as needed)
//const generateNewProof = async () => {
// Implement the logic to generate a new proof
// This is a placeholder implementation
//  return '';
//};
main();
//# sourceMappingURL=CashFlowZKProgram.js.map