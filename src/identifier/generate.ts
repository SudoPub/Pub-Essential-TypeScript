/**
 * @author WMXPY
 * @namespace Identifier
 * @description Generate
 */

import { UUIDVersion1 } from "@sudoo/uuid";

export const generatePubIdentifier = (): string => {

    return UUIDVersion1.generateString();
};
