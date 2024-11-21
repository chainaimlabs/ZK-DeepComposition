import {
  Field,
  Signature,
  SmartContract,
  PublicKey,
  Struct,
  ZkProgram,
  Proof,
  SelfProof,
  CircuitString,
  method,
  Permissions,
  Circuit
} from 'o1js';
import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';//keccak256 for generating cryptographic hashes.

// Define the Public Output Structure
export class CompliancePublicOutput extends Struct({
  complianceToProve: Field,
  complianceStatusCode: Field,
}) {}

class ComplianceData extends Struct({
  companyID: CircuitString,
  companyName: CircuitString,
  complianceStatusCode: Field,
}) {}

// zk-SNARK Program for Compliance
const Compliance = ZkProgram({
  name: 'Compliance',

  publicInput: Field,
  publicOutput: CompliancePublicOutput,

  methods: {
    init: {
      privateInputs: [],
      async method(state: Field): Promise<CompliancePublicOutput> {
        state.assertEquals(Field(1));

        return new CompliancePublicOutput({
          complianceToProve: Field(1),
          complianceStatusCode: Field(1),
        });
      },
    },

    compliance: {
      privateInputs: [SelfProof, SelfProof],

      async method(
        newState: Field,
        earlierProof1: SelfProof<Field, CompliancePublicOutput>,
        earlierProof2: SelfProof<Field, CompliancePublicOutput>
      ): Promise<CompliancePublicOutput> {
        earlierProof1.verify();
        earlierProof2.verify();

        newState.assertEquals(
          Field(earlierProof1.publicOutput.complianceStatusCode).mul(Field(earlierProof2.publicOutput.complianceStatusCode))
        );

        return new CompliancePublicOutput({
          complianceToProve: Field(1),
          complianceStatusCode: Field(1),
        });
      },
    },

    proveCompliance: {
      privateInputs: [ComplianceData],

      async method(
        complianceToProve: Field,
        complianceData: ComplianceData
      ): Promise<CompliancePublicOutput> {
        complianceData.complianceStatusCode.assertEquals(Field(1));

        return new CompliancePublicOutput({
          complianceToProve: Field(1),
          complianceStatusCode: Field(1),
        });
      },
    },
  },
});

// Create a Merkle Tree from an array of data
const createMerkleTree = (dataArray: string[]): MerkleTree => {
  const leaves = dataArray.map(x => keccak256(x));
  return new MerkleTree(leaves, keccak256, { sortPairs: true });
};

// Main function to check proofs, perform multiplication, and generate new proof
const main = async () => {
  console.log('Compiling proofs...');

  let compliance = await Compliance.compile();
  let complianceVerKey = compliance.verificationKey;

  const proof0 = await Compliance.init(Field(1));

  const corpData = {
    companyID: '101',
    companyName: 'India Exports 1',
    currCompanyComplianceStatusCode: Field(1),
  };

  const corpRegData = new ComplianceData({
    companyID: CircuitString.fromString(corpData.companyID),
    companyName: CircuitString.fromString(corpData.companyName),
    complianceStatusCode: Field(corpData.currCompanyComplianceStatusCode),
  });

  let corpRegProof = await Compliance.proveCompliance(Field(1), corpRegData);

  const tradeDGFTData = {
    companyID: '101',
    companyName: 'India Exports 1',
    complianceStatusCode: Field(1),
  };

  const internationalTradeComplianceData = new ComplianceData({
    companyID: CircuitString.fromString(tradeDGFTData.companyID),
    companyName: CircuitString.fromString(tradeDGFTData.companyName),
    complianceStatusCode: Field(tradeDGFTData.complianceStatusCode),
  });

  let tradeProof = await Compliance.proveCompliance(Field(1), internationalTradeComplianceData);

  let recurrsiveProof = await Compliance.compliance(Field(1), corpRegProof, tradeProof);
  let valRecurrsiveProof = recurrsiveProof.publicOutput.complianceStatusCode.toJSON();

  const globalLEIData = {
    companyID: '101',
    companyName: 'India Exports 1',
    globalLEIID: '1357890034578',
    complianceStatusCode: Field(1),
  };

  const globalLEIComplianceData = new ComplianceData({
    companyID: CircuitString.fromString(globalLEIData.companyID),
    companyName: CircuitString.fromString(globalLEIData.companyName),
    complianceStatusCode: Field(globalLEIData.complianceStatusCode),
  });

  let leiProof = await Compliance.proveCompliance(Field(1), globalLEIComplianceData);

  let recProof3 = await Compliance.compliance(Field(1), tradeProof, leiProof);
  let valrecProof3 = recProof3.publicOutput.complianceStatusCode.toJSON();

  const proof4Data = {
    companyID: '101',
    companyName: 'India Exports 1',
    StatusCode: Field(1),
  };

  const proof4ComplianceData = new ComplianceData({
    companyID: CircuitString.fromString(proof4Data.companyID),
    companyName: CircuitString.fromString(proof4Data.companyName),
    complianceStatusCode: Field(proof4Data.StatusCode),
  });

  let p4Proof = await Compliance.proveCompliance(Field(1), proof4ComplianceData);
  let recProof4 = await Compliance.compliance(Field(1), leiProof, p4Proof);
  let valrecProof4 = recProof4.publicOutput.complianceStatusCode.toJSON();

  const proof5Data = {
    companyID: '102',
    companyName: 'India Exports 1',
    StatusCode: Field(1),
  };

  const proof5ComplianceData = new ComplianceData({
    companyID: CircuitString.fromString(proof5Data.companyID),
    companyName: CircuitString.fromString(proof5Data.companyName),
    complianceStatusCode: Field(proof5Data.StatusCode),
  });

  let p5Proof = await Compliance.proveCompliance(Field(1), proof5ComplianceData);
  let recProof5 = await Compliance.compliance(Field(1), recProof4, p5Proof);
  let valrecProof5 = recProof5.publicOutput.complianceStatusCode.toJSON();

  const proof6Data = {
    companyID: '103',
    companyName: 'India Exports 1',
    StatusCode: Field(1),
  };

  const proof6ComplianceData = new ComplianceData({
    companyID: CircuitString.fromString(proof6Data.companyID),
    companyName: CircuitString.fromString(proof6Data.companyName),
    complianceStatusCode: Field(proof6Data.StatusCode),
  });

  let p6Proof = await Compliance.proveCompliance(Field(1), proof6ComplianceData);
  let recProof6 = await Compliance.compliance(Field(1), recProof5, p6Proof);
  let valrecProof6 = recProof6.publicOutput.complianceStatusCode.toJSON();

  console.log("Final Recursive Proof Value:", valrecProof6);

  //keccak256 is a cryptographic hash function used to hash data to generate Merkle leaves and proofs.
  // creating a Merkle Tree
  const dataToIncludeInMerkleTree = [
    JSON.stringify(corpData),
    JSON.stringify(tradeDGFTData),
    JSON.stringify(globalLEIData),
    JSON.stringify(proof4Data),
    JSON.stringify(proof5Data),
    JSON.stringify(proof6Data)

    // proofs or data ?
    // these are of type data integrity proofs.

    //JSON.stringify(POData),
    //JSON.stringify(InvoiceData),
    //JSON.stringify(PO2InoviceAlignmentData),
    //JSON.stringify(BLata),
    //JSON.stringify(PO2Invoice2BLAlignmentData)

     // these are of type business process proofs.
    //JSON.stringify(bpmnProcessData),
    //JSON.stringify(bpmnBusineesExecutionData),

     // these are of type risk alignment proofs.

    //JSON.stringify(riskDefinationData),
    //JSON.stringify(riskSimulationData),
    //JSON.stringify(riskAlignmentData)

  ];
  
  const merkleTree = createMerkleTree(dataToIncludeInMerkleTree);


// Define the function with explicit types
//A function createAndVerifyProof is defined to generate a Merkle Proof for a specific data entry and verify its validity against the Merkle Tree.
const createAndVerifyProof = (data: Record<string, any>, merkleTree: any) => {
  // Generate the leaf from the data
  const leaf = keccak256(JSON.stringify(data));
  
  // Generate the proof for the specific leaf
  const proof = merkleTree.getProof(leaf);
  
  // Get the Merkle Root
  const root = merkleTree.getRoot().toString('hex');
  
  // Verify the proof
  const isValid = merkleTree.verify(proof, leaf, root);
  
  return {
      leaf,
      proof,
      root,
      isValid
  };
};

// Example usage
const corpDataResult = createAndVerifyProof(corpData, merkleTree);
console.log('Merkle Root for corpData:', corpDataResult.root);
console.log('Proof for corpData:', corpDataResult.proof);
console.log('Is the proof valid for corpData?', corpDataResult.isValid);
//corpDataResult.leaf
const tradeDataResult = createAndVerifyProof(tradeDGFTData, merkleTree);
console.log('Merkle Root for tradeDGFTData:', tradeDataResult.root);
console.log('Proof for tradeDGFTData:', tradeDataResult.proof);
console.log('Is the proof valid for tradeDGFTData?', tradeDataResult.isValid);

//   1. Valid Proof
// The proof is valid when:

// The leaf node (data) being verified is part of the Merkle tree.
// The hashes in the proof correctly match the sibling nodes as expected when moving up from the leaf to the root.
// When recomputing the Merkle root using the provided leaf and proof, the computed root matches the actual root of the Merkle tree.

};

main().catch(err => console.error(err));
