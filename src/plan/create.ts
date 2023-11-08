/**
 * @author WMXPY
 * @namespace Plan
 * @description Create
 */

import { generatePubIdentifier } from "../identifier/generate";
import { PUB_PLAN_TYPE, PubPlan, PubPlanPayloadSwitch } from "./definition/plan";

export const createPubPlan = <T extends PUB_PLAN_TYPE>(
    type: T,
    taskIdentifier: string,
    payload: PubPlanPayloadSwitch<T>,
): PubPlan<T> => {

    const identifier: string = generatePubIdentifier();

    return {
        planIdentifier: identifier,
        taskIdentifier,
        type,
        payload,
        timestamp: new Date(),
    };
};
