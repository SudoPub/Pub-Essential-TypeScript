/**
 * @author WMXPY
 * @namespace Action
 * @description Create
 */

import { generatePubIdentifier } from "../identifier/generate";
import { PUB_ACTION_TYPE, PubAction, PubActionPayloadSwitch } from "./definition/action";

export const createPubAction = <T extends PUB_ACTION_TYPE>(
    type: T,
    payload: PubActionPayloadSwitch<T>,
): PubAction<T> => {

    const identifier: string = generatePubIdentifier();

    return {
        identifier,
        type,
        payload,
        timestamp: new Date(),
    };
};
