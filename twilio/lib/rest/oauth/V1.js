"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Oauth
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
const deviceCode_1 = require("./v1/deviceCode");
const oauth_1 = require("./v1/oauth");
const openidDiscovery_1 = require("./v1/openidDiscovery");
const token_1 = require("./v1/token");
const userInfo_1 = require("./v1/userInfo");
class V1 extends Version_1.default {
    /**
     * Initialize the V1 version of Oauth
     *
     * @param domain - The Twilio (Twilio.Oauth) domain
     */
    constructor(domain) {
        super(domain, "v1");
    }
    /** Getter for deviceCode resource */
    get deviceCode() {
        this._deviceCode = this._deviceCode || (0, deviceCode_1.DeviceCodeListInstance)(this);
        return this._deviceCode;
    }
    /** Getter for oauth resource */
    get oauth() {
        this._oauth = this._oauth || (0, oauth_1.OauthListInstance)(this);
        return this._oauth;
    }
    /** Getter for openidDiscovery resource */
    get openidDiscovery() {
        this._openidDiscovery =
            this._openidDiscovery || (0, openidDiscovery_1.OpenidDiscoveryListInstance)(this);
        return this._openidDiscovery;
    }
    /** Getter for token resource */
    get token() {
        this._token = this._token || (0, token_1.TokenListInstance)(this);
        return this._token;
    }
    /** Getter for userInfo resource */
    get userInfo() {
        this._userInfo = this._userInfo || (0, userInfo_1.UserInfoListInstance)(this);
        return this._userInfo;
    }
}
exports.default = V1;
