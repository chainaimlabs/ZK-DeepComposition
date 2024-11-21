import 'dotenv/config';
import { Field, PrivateKey, Signature, CircuitString, Struct, } from 'o1js';
class InternationalTradeComplianceData extends Struct({
    companyID: CircuitString,
    companyName: CircuitString,
    dgftID: CircuitString,
    businessPANID: CircuitString,
    currEXIMComplianceStatusCode: Field,
    //currentDate: Field,
}) {
}
const zkOracleResponseMock = () => {
    const TESTING_PRIVATE_KEY = process.env.TESTING_PRIVATE_KEY;
    const privateKey = PrivateKey.fromBase58(TESTING_PRIVATE_KEY);
    const publicKey = privateKey.toPublicKey();
    const data = {
        companyID: '101',
        companyName: 'India Exports 1',
        dgftID: '301',
        businessPANID: '1001',
        currEXIMComplianceStatusCode: Field(1),
    };
    const internationalTradeComplianceData = new InternationalTradeComplianceData({
        companyID: CircuitString.fromString(data.companyID),
        companyName: CircuitString.fromString(data.companyName),
        dgftID: CircuitString.fromString(data.dgftID),
        businessPANID: CircuitString.fromString(data.businessPANID),
        currEXIMComplianceStatusCode: Field(data.currEXIMComplianceStatusCode),
    });
    const signature = Signature.create(privateKey, InternationalTradeComplianceData.toFields(internationalTradeComplianceData));
    return {
        data: data,
        signature: signature.toJSON(),
        publicKey: publicKey.toBase58(),
    };
};
const evalInternationalTradeCompliance = (currEXIMComplianceStatusCode) => {
    const eximCompliance = currEXIMComplianceStatusCode
        .mul(Field(100));
    return eximCompliance;
};
export { InternationalTradeComplianceData, evalInternationalTradeCompliance, zkOracleResponseMock };
//# sourceMappingURL=ProofOfInternationalTradeCompliance.utils.js.map