import type { PerformanceRating } from "./performance.js";
/** Default annual increment % suggested from the latest submitted review rating. */
export declare const RATING_INCREMENT_PERCENT: Record<PerformanceRating, number>;
export declare function suggestedIncrementPercent(rating: number | null | undefined): number;
