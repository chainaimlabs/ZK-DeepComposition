var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Field, method, Signature, SmartContract, Permissions, PublicKey, Struct, ZkProgram, } from 'o1js';
import { InternationalTradeComplianceData, evalInternationalTradeCompliance } from './ProofOfInternationalTradeCompliance.utils.js';
export class TradeCompliancePublicOutput extends Struct({
    internationalTradeComplianceToProve: Field,
    currEXIMComplianceStatusCode: Field,
    creatorPublicKey: PublicKey,
}) {
}
export const proofOfComplianceEXIM = ZkProgram({
    name: 'ZkProofOfComplianceEXIM',
    publicInput: Field,
    publicOutput: TradeCompliancePublicOutput,
    methods: {
        proveCompliance: {
            privateInputs: [
                InternationalTradeComplianceData,
                Signature,
                Signature,
                PublicKey, // creator wallet public key
            ],
            async method(internationalTradeComplianceToProve, internationalTradeComplianceData, oracleSignature, creatorSignature, creatorPublicKey) {
                /*
                  Verify zk-oracle signature
        
                  Purpose: verify the zk-oracle signature, ensuring that the data remains
                  untampered with and aligns precisely with the information provided by
                  the KYC/digital ID provider.
                */
                const validSignature = oracleSignature.verify(PublicKey.fromBase58('B62qmXFNvz2sfYZDuHaY5htPGkx1u2E2Hn3rWuDWkE11mxRmpijYzWN'
                // TO DO INJECT KEY from docs2 for current purposes.. 
                ), InternationalTradeComplianceData.toFields(internationalTradeComplianceData));
                validSignature.assertTrue();
                /*
                  Verify creatorSignature
        
                  Purpose: This section validates the creatorSignature to embed the public key
                  of the proof creator into the proof output. The rationale behind this inclusion
                  is to enable the party consuming the proof to optionally request the user to
                  confirm possession of the same address. This confirmation can be achieved by
                  prompting the user to sign a superficial message and provide evidence of ownership
                  of the corresponding account.
                */
                const validSignature_ = creatorSignature.verify(creatorPublicKey, InternationalTradeComplianceData.toFields(internationalTradeComplianceData));
                validSignature_.assertTrue();
                // evalute corporate compliance
                const internationalTradeCompliance = evalInternationalTradeCompliance(internationalTradeComplianceData.currEXIMComplianceStatusCode);
                // verify corporateCompliance to prove is NOT 0 - BAD
                internationalTradeComplianceData.currEXIMComplianceStatusCode.greaterThan(Field(0)).assertTrue();
                const internationalTradeComplianceToProve1 = internationalTradeComplianceData.currEXIMComplianceStatusCode
                    .greaterThan(Field(0));
                internationalTradeComplianceToProve1.assertTrue();
                return new TradeCompliancePublicOutput({
                    internationalTradeComplianceToProve: internationalTradeComplianceToProve,
                    currEXIMComplianceStatusCode: internationalTradeComplianceData.currEXIMComplianceStatusCode,
                    creatorPublicKey: creatorPublicKey,
                });
            },
        },
    },
});
/*
Use the zkPragram defined above to create an on-chain smart contract that
consume the proof created by the program above and thus 'put' the proof on chain
*/
//export class ProofOfCompanyRegistration extends ZkProgram.Proof(proofOfCompliance) {}
export const ProofOfComplianceEXIM_ = ZkProgram.Proof(proofOfComplianceEXIM);
class ProofOfComplianceEXIM extends ProofOfComplianceEXIM_ {
}
export class ProofOfInternationalTradeComplianceProof extends ZkProgram.Proof(proofOfComplianceEXIM) {
}
export class ProofOfInternationalTradeCompliance extends SmartContract {
    constructor() {
        super(...arguments);
        this.events = {
            'provided-valid-proof': TradeCompliancePublicOutput,
        };
    }
    init() {
        super.init();
        // https://docs.minaprotocol.com/zkapps/o1js/permissions#types-of-permissions
        this.account.permissions.set({
            ...Permissions.default(),
        });
    }
    async verifyProof(proof) {
        // if the proof is invalid, this will fail
        // its impossible to run past this withought a valid proof
        proof.verify();
        // the above is enough to be able to check if an address has a proof
        // emit an event 
        this.emitEvent('provided-valid-proof', proof.publicOutput);
    }
}
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProofOfComplianceEXIM]),
    __metadata("design:returntype", Promise)
], ProofOfInternationalTradeCompliance.prototype, "verifyProof", null);
//# sourceMappingURL=ProofOfInternationalTradeCompliance.js.map