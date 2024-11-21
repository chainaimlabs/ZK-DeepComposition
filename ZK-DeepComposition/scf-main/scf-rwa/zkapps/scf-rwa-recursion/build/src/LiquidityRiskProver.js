import { LiquidityCheckCircuit, ACTUSData } from './LiquidityCheckCircuit.js';
import { Field, Mina, PrivateKey, AccountUpdate, CircuitString } from 'o1js';
const useProof = false;
const Local = await Mina.LocalBlockchain({ proofsEnabled: useProof });
Mina.setActiveInstance(Local);
const deployerAccount = Local.testAccounts[0];
const deployerKey = deployerAccount.key;
const senderAccount = Local.testAccounts[1];
const senderKey = senderAccount.key;
// ----------------------------------------------------
// Create a public/private key pair. The public key is your address and where you deploy the zkApp to
const zkAppPrivateKey = PrivateKey.random();
const zkAppAddress = zkAppPrivateKey.toPublicKey();
// create an instance of Square - and deploy it to zkAppAddress
const zkAppInstance = new LiquidityCheckCircuit(zkAppAddress);
const deployTxn = await Mina.transaction(deployerAccount, async () => {
    AccountUpdate.fundNewAccount(deployerAccount);
    await zkAppInstance.deploy();
});
await deployTxn.sign([deployerKey, zkAppPrivateKey]).send();
// get the initial state of Square after deployment
const accepted = zkAppInstance.accepted.get();
console.log('state after init:', accepted.toBoolean());
const riskScenario1Data = {
    companyID: 'Financier 10001',
    companyName: 'Financier 1 - CashFlows RiskFree ',
    mcaID: '201',
    businessPANID: '1001',
    riskEvaluated: Field(1),
    cashInflows: [50000, 40000, 30000],
    cashOutflows: [5000, 10000, 15000],
    newInvoiceAmount: 5000,
    newInvoiceEvaluationMonth: 2,
    liquidityThreshold: 1.25, // Required liquidity ratio
    // Currently mocked up ACTUS data.. 
    // To be done .. The Risk Analysis program endpoint to be called for ACTUS Risk Service , with detailed Risk parameters.. 
    // Needs 1 contract with timeseries of 5 . 
    // For each of the epochs ( for now identified with an epoch id key) in the timeseries. need date  epochdate and a epoch amount as integer to be stored 
    // 
    // Needs 2 contracts . Each should have a timeseries of 5 . 
    // For each of the epochs ( for now identified with an epoch id key) in the timeseries. need date  epochdate and a epoch amount as integer to be stored 
    // 
    //---------------------
};
const risk1Data = new ACTUSData({
    scenarioID: CircuitString.fromString(riskScenario1Data.companyID),
    //scenarioName: CircuitString.fromString(riskScenario1Data .companyName),
    scenarioName: riskScenario1Data.companyName,
    //mcaID: CircuitString.fromString(corpData .mcaID),
    //businessPANID: CircuitString.fromString(corpData .businessPANID),
    riskEvaluated: Field(riskScenario1Data.riskEvaluated),
    cashInflows: riskScenario1Data.cashInflows,
    cashOutflows: riskScenario1Data.cashOutflows,
    newInvoiceAmount: riskScenario1Data.newInvoiceAmount,
    newInvoiceEvaluationMonth: riskScenario1Data.newInvoiceEvaluationMonth,
    liquidityThreshold: riskScenario1Data.liquidityThreshold,
});
console.log('scenario name ', risk1Data.scenarioName);
const txn1 = await Mina.transaction(senderAccount, async () => {
    await zkAppInstance.verifyTrace(risk1Data);
});
await txn1.prove();
await txn1.sign([senderKey]).send();
const t1 = zkAppInstance.accepted.get();
console.log('Risk scenario 1 trace', risk1Data.scenarioName, ' evaluation ', t1.toBoolean(), ' good to finance.. ');
const riskScenario2Data = {
    companyID: 'Financier 10001',
    companyName: 'Financier 1 - CashFlows at risk  ',
    mcaID: '201',
    businessPANID: '1001',
    riskEvaluated: Field(1),
    cashInflows: [50000, 40000, 30000],
    cashOutflows: [5000, 10000, 40000],
    newInvoiceAmount: 5000,
    newInvoiceEvaluationMonth: 2,
    liquidityThreshold: 1.25, // Required liquidity ratio
};
const risk2Data = new ACTUSData({
    scenarioID: CircuitString.fromString(riskScenario1Data.companyID),
    //scenarioName: CircuitString.fromString(riskScenario1Data .companyName),
    scenarioName: riskScenario2Data.companyName,
    //mcaID: CircuitString.fromString(corpData .mcaID),
    //businessPANID: CircuitString.fromString(corpData .businessPANID),
    riskEvaluated: Field(riskScenario2Data.riskEvaluated),
    cashInflows: riskScenario2Data.cashInflows,
    cashOutflows: riskScenario2Data.cashOutflows,
    newInvoiceAmount: riskScenario2Data.newInvoiceAmount,
    newInvoiceEvaluationMonth: riskScenario2Data.newInvoiceEvaluationMonth,
    liquidityThreshold: riskScenario2Data.liquidityThreshold,
});
console.log('Scenario name ', risk2Data.scenarioName);
const txn2 = await Mina.transaction(senderAccount, async () => {
    await zkAppInstance.verifyTrace(risk2Data);
});
await txn2.prove();
await txn2.sign([senderKey]).send();
const t2 = zkAppInstance.accepted.get();
console.log('Risk Scenario 2 trace', risk2Data.scenarioName, ' evaluation ', t2.toBoolean(), ' not so good to finance ');
//# sourceMappingURL=LiquidityRiskProver.js.map