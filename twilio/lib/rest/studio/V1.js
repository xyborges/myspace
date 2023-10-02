"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Studio
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Version_1 = __importDefault(require("../../base/Version"));
const flow_1 = require("./v1/flow");
class V1 extends Version_1.default {
    /**
     * Initialize the V1 version of Studio
     *
     * @param domain - The Twilio (Twilio.Studio) domain
     */
    constructor(domain) {
        super(domain, "v1");
    }
    /** Getter for flows resource */
    get flows() {
        this._flows = this._flows || (0, flow_1.FlowListInstance)(this);
        return this._flows;
    }
}
exports.default = V1;