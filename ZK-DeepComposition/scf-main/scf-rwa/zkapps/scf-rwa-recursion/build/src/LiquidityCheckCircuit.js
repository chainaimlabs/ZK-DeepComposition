var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Bool, Field, SmartContract, state, State, method, Struct, CircuitString } from 'o1js';
export class ACTUSData extends Struct({
    scenarioID: CircuitString,
    scenarioName: String,
    riskEvaluated: Field,
    //currentDate: Field,
    cashInflows: [Number, Number, Number],
    cashOutflows: [Number, Number, Number],
    newInvoiceAmount: Number,
    newInvoiceEvaluationMonth: Number,
    liquidityThreshold: Number, // Required liquidity ratio
}) {
}
export class LiquidityCheckCircuit extends SmartContract {
    constructor() {
        super(...arguments);
        this.accepted = State();
    }
    init() {
        super.init();
        this.accepted.set(Bool(false));
    }
    async verifyTrace(trace) {
        let out = verifyCashFlows(trace);
        this.accepted.set(out);
    }
}
__decorate([
    state(Bool),
    __metadata("design:type", Object)
], LiquidityCheckCircuit.prototype, "accepted", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ACTUSData]),
    __metadata("design:returntype", Promise)
], LiquidityCheckCircuit.prototype, "verifyTrace", null);
export function verifyCashFlows(input) {
    const cashInflows = input.cashInflows; // Monthly cash inflows
    const cashOutflows = input.cashOutflows; // Monthly cash outflows
    const newInvoiceAmount = input.newInvoiceAmount; // Amount of the new invoice
    const newInvoiceEvaluationMonth = input.newInvoiceEvaluationMonth; // Include invoice in month 3
    const liquidityThreshold = input.liquidityThreshold; // Required liquidity ratio
    console.log('cash inflows start', cashInflows);
    console.log('cash outflows start', cashOutflows);
    //let liqRatio = cumulativeCashFlow / (cashOutflows.reduce((acc, val) => acc + val, 0) + newInvoiceAmount)
    // Cash flow projections
    let cashFlowProjections = [];
    let cumulativeCashFlow = 0;
    let out = Bool(false);
    // Simulate cash flows over 3 months
    for (let month = 0; month < 3; month++) {
        let inflow = cashInflows[month];
        let outflow = cashOutflows[month] + (month === newInvoiceEvaluationMonth ? newInvoiceAmount : 0); // Include invoice in month 3
        let netCashFlow = inflow - outflow;
        cumulativeCashFlow += netCashFlow;
        let reducedVal = cashOutflows.reduce((acc, val) => acc + val, 0);
        let liqRatio = cumulativeCashFlow / (reducedVal + newInvoiceAmount);
        cashFlowProjections.push({
            month: month + 1,
            cashInflow: inflow,
            cashOutflow: outflow,
            netCashFlow: netCashFlow,
            cumulativeCashFlow: cumulativeCashFlow,
            liquidityRatio: cumulativeCashFlow / (cashOutflows.reduce((acc, val) => acc + val, 0) + newInvoiceAmount)
        });
        if (liqRatio >= liquidityThreshold) {
            out = Bool(true);
        }
        else {
            out = Bool(false);
        }
        console.log(' inner   month ', month, 'reduced Val', reducedVal, 'net cash flow ', netCashFlow, 'cumulative cash flow ', cumulativeCashFlow, ' liq ratio', liqRatio);
    }
    //console.log('cumulative cash flow ', cumulativeCashFlow, ' out ',out.toJSON() );
    return out;
}
//# sourceMappingURL=LiquidityCheckCircuit.js.map