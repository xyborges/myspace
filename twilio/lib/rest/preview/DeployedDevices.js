"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
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
const fleet_1 = require("./deployed_devices/fleet");
class DeployedDevices extends Version_1.default {
    /**
     * Initialize the DeployedDevices version of Preview
     *
     * @param domain - The Twilio (Twilio.Preview) domain
     */
    constructor(domain) {
        super(domain, "DeployedDevices");
    }
    /** Getter for fleets resource */
    get fleets() {
        this._fleets = this._fleets || (0, fleet_1.FleetListInstance)(this);
        return this._fleets;
    }
}
exports.default = DeployedDevices;
