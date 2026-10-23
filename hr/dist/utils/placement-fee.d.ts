import { type AgreementFeeType } from "../constants/agreements.js";
export type GstSplitMode = "CGST_SGST" | "IGST" | "NONE";
export type PlacementFeeInput = {
    feeType: AgreementFeeType | string;
    recruitmentFee: number;
    offeredAnnualCtc: number;
    gstRatePercent?: number;
    /** When true (or mode IGST), full GST is IGST; otherwise split equally CGST/SGST. */
    gstSplitMode?: GstSplitMode;
    invoiceDate?: Date;
    paymentTermsDays?: number;
};
export type PlacementFeeResult = {
    professionalFee: number;
    gstRatePercent: number;
    cgst: number;
    sgst: number;
    igst: number;
    gstAmount: number;
    totalAmount: number;
    dueDate: Date;
    paymentTermsDays: number;
};
export declare function roundMoney(value: number): number;
/**
 * Calculate professional fee + GST for a placement invoice.
 *
 * FIXED: professionalFee = recruitmentFee
 * PERCENTAGE (Percentage of CTC): professionalFee = offeredAnnualCtc × recruitmentFee / 100
 */
export declare function calculatePlacementFee(input: PlacementFeeInput): PlacementFeeResult;
