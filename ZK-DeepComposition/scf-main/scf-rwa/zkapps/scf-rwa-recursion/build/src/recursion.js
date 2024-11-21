var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Field, Signature, SmartContract, PublicKey, Struct, ZkProgram, method, Permissions } from 'o1js';
import { CorporateRegistrationData, evalCorporateCompliance, } from './ProofOfCompanyRegistration.utils.js';
// Define the Public Output Structure
export class PublicOutput extends Struct({
    corporateComplianceToProve: Field,
    currCompanyComplianceStatusCode: Field,
    internationalTradeComplianceToProve: Field,
    currEXIMComplianceStatusCode: Field,
    creatorPublicKey: PublicKey,
}) {
}
// zk-SNARK Program for Compliance.. which verifies corporate registration and international trade compliance.
export const proofOfCompliance = ZkProgram({
    name: 'ZkProofOfCompliance',
    publicInput: Field,
    publicOutput: PublicOutput,
    methods: {
        proveCompliance: {
            privateInputs: [
                CorporateRegistrationData,
                Signature,
                Signature,
                PublicKey,
            ],
            async method(corporateComplianceToProve, corporateRegistrationData, oracleSignature, creatorSignature, creatorPublicKey) {
                const validSignature = oracleSignature.verify(PublicKey.fromBase58('B62qmXFNvz2sfYZDuHaY5htPGkx1u2E2Hn3rWuDWkE11mxRmpijYzWN'), CorporateRegistrationData.toFields(corporateRegistrationData));
                validSignature.assertTrue();
                const validSignature_ = creatorSignature.verify(creatorPublicKey, CorporateRegistrationData.toFields(corporateRegistrationData));
                validSignature_.assertTrue();
                const companyRegistration = evalCorporateCompliance(corporateRegistrationData.currCompanyComplianceStatusCode);
                corporateRegistrationData.currCompanyComplianceStatusCode.greaterThan(Field(0)).assertTrue();
                return new PublicOutput({
                    corporateComplianceToProve: corporateComplianceToProve,
                    currCompanyComplianceStatusCode: corporateRegistrationData.currCompanyComplianceStatusCode,
                    internationalTradeComplianceToProve: Field(0),
                    currEXIMComplianceStatusCode: Field(1),
                    creatorPublicKey: creatorPublicKey,
                });
            },
        },
    },
});
export const ProofOfCompliance_ = ZkProgram.Proof(proofOfCompliance);
export class ProofOfCompliance extends ProofOfCompliance_ {
}
export class ProofOfCompanyRegistrationProof extends ZkProgram.Proof(proofOfCompliance) {
}
// Define the ProofOfCompanyRegistration Smart Contract 
export class ProofOfCompanyRegistration extends SmartContract {
    constructor() {
        super(...arguments);
        this.events = {
            'provided-valid-proof': PublicOutput,
        };
    }
    init() {
        super.init();
        this.account.permissions.set({
            ...Permissions.default(),
        });
    }
    async verifyProof(proof) {
        proof.verify();
        this.emitEvent('provided-valid-proof', proof.publicOutput);
    }
}
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProofOfCompliance]),
    __metadata("design:returntype", Promise)
], ProofOfCompanyRegistration.prototype, "verifyProof", null);
// Main function to check proofs, perform multiplication, and generate new proof
const main = async () => {
    console.log('Compiling proofs...');
    // Compile ProofOfCompliance first
    let proofOfComplianceCompiled;
    try {
        proofOfComplianceCompiled = await proofOfCompliance.compile();
        console.log('Compiled ProofOfCompliance:', proofOfComplianceCompiled);
    }
    catch (error) {
        console.error('Error compiling ProofOfCompliance:', error);
        return;
    }
    // Now compile ProofOfCompanyRegistration
    let proofOfCompanyRegistrationCompiled;
    try {
        proofOfCompanyRegistrationCompiled = await ProofOfCompanyRegistration.compile();
        console.log('Compiled ProofOfCompanyRegistration:', proofOfCompanyRegistrationCompiled);
    }
    catch (error) {
        console.error('Error compiling ProofOfCompanyRegistration:', error);
        return;
    }
    // Check if proofs are generated
    const isCompanyRegistrationGenerated = !!proofOfCompanyRegistrationCompiled;
    const isInternationalTradeComplianceGenerated = !!proofOfComplianceCompiled;
    console.log('ProofOfCompanyRegistration:', isCompanyRegistrationGenerated ? 'Generated' : 'Not Generated');
    console.log('ProofOfInternationalTradeCompliance:', isInternationalTradeComplianceGenerated ? 'Generated' : 'Not Generated');
    // Perform multiplication of currEXIMComplianceStatusCode from both proofs
    if (isCompanyRegistrationGenerated && isInternationalTradeComplianceGenerated) {
        try {
            // Create proof instances with required arguments
            const proofOfComplianceInstance = new ProofOfCompliance({
                proof: proofOfComplianceCompiled,
                publicInput: Field(0),
                publicOutput: new PublicOutput({
                    corporateComplianceToProve: Field(0),
                    currCompanyComplianceStatusCode: Field(0),
                    internationalTradeComplianceToProve: Field(0),
                    currEXIMComplianceStatusCode: Field(1),
                    creatorPublicKey: PublicKey.fromBase58('B62qmXFNvz2sfYZDuHaY5htPGkx1u2E2Hn3rWuDWkE11mxRmpijYzWN')
                }),
                maxProofsVerified: 0
            });
            const proofOfCompanyRegistrationInstance = new ProofOfCompanyRegistrationProof({
                proof: proofOfCompanyRegistrationCompiled,
                publicInput: Field(0),
                publicOutput: new PublicOutput({
                    corporateComplianceToProve: Field(0),
                    currCompanyComplianceStatusCode: Field(0),
                    internationalTradeComplianceToProve: Field(0),
                    currEXIMComplianceStatusCode: Field(1),
                    creatorPublicKey: PublicKey.fromBase58('B62qmXFNvz2sfYZDuHaY5htPGkx1u2E2Hn3rWuDWkE11mxRmpijYzWN')
                }),
                maxProofsVerified: 0
            });
            let eximComplianceFromProofOfCompliance = proofOfComplianceInstance.publicOutput.currEXIMComplianceStatusCode;
            let eximComplianceFromProofOfCompanyRegistration = proofOfCompanyRegistrationInstance.publicOutput.currEXIMComplianceStatusCode;
            console.log('eximComplianceFromProofOfCompliance', eximComplianceFromProofOfCompliance.value[0]);
            console.log('eximComplianceFromProofOfCompanyRegistration ', eximComplianceFromProofOfCompanyRegistration.value[0]);
            const multipliedEXIMCompliance = eximComplianceFromProofOfCompliance.mul(eximComplianceFromProofOfCompanyRegistration);
            // Print the result as the third proof
            console.log('Multiplied EXIM Compliance Status Code:', multipliedEXIMCompliance.toString());
            //const newProof = await generateNewProof();
            //console.log('New Proof:', newProof);
        }
        catch (error) {
            console.error('Error during multiplication or new proof generation:', error);
        }
    }
    else {
        console.log('One or both proofs not generated, status: Inactive');
    }
};
// Define a function to generate a new proof (customize as needed)
//const generateNewProof = async () => {
// Implement the logic to generate a new proof
// This is a placeholder implementation
//  return '';
//};
main();
//# sourceMappingURL=recursion.js.map