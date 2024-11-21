import { Field, SelfProof, ZkProgram } from 'o1js';
const Add = ZkProgram({
    name: 'add-example',
    publicInput: Field,
    methods: {
        init: {
            privateInputs: [],
            async method(state) {
                state.assertEquals(Field(0));
            },
        },
        addNumber: {
            privateInputs: [SelfProof, Field],
            async method(newState, earlierProof, numberToAdd) {
                earlierProof.verify();
                newState.assertEquals(earlierProof.publicInput.add(numberToAdd));
            },
        },
        add: {
            privateInputs: [SelfProof, SelfProof],
            async method(newState, earlierProof1, earlierProof2) {
                earlierProof1.verify();
                earlierProof2.verify();
                newState.assertEquals(earlierProof1.publicInput.add(earlierProof2.publicInput));
            },
        },
    },
});
//const proof1 = await ProofOfCompanyRegistration.compile();
const main = async () => {
    console.log('compiling...');
    const { verificationKey } = await Add.compile();
    console.log('making proof 0');
    const proof0 = await Add.init(Field(0));
    console.log('making proof 1');
    //console.log('making proof 2');
    //const proof2 = await Add.add(Field(4), proof1, proof0);
    //console.log('verifying proof 2');
    //console.log('proof 2 data', proof2.publicInput.toString());
    //const ok = await verify(proof2.toJSON(), verificationKey);
    // console.log('ok', ok);
};
main();
//# sourceMappingURL=Add.js.map