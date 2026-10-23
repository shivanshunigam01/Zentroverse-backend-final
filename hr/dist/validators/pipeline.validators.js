import { z } from "zod";
import { PIPELINE_STAGES } from "../constants/pipeline.js";
import { listControlFields } from "./list-query.js";
import { objectIdSchema } from "./organization.validators.js";
export const pipelineListQuerySchema = z.object({
    mandateId: objectIdSchema.optional(),
    recruiterId: objectIdSchema.optional(),
    stage: z.enum(PIPELINE_STAGES).optional(),
    ...listControlFields(["createdAt"], 50, 200),
});
export const pipelineTransitionSchema = z.object({
    candidateId: objectIdSchema,
    mandateId: objectIdSchema,
    targetStage: z.enum(PIPELINE_STAGES),
});
//# sourceMappingURL=pipeline.validators.js.map