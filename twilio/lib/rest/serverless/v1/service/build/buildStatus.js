"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Serverless
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildStatusListInstance = exports.BuildStatusInstance = exports.BuildStatusContextImpl = void 0;
const util_1 = require("util");
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
class BuildStatusContextImpl {
    constructor(_version, serviceSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(serviceSid)) {
            throw new Error("Parameter 'serviceSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { serviceSid, sid };
        this._uri = `/Services/${serviceSid}/Builds/${sid}/Status`;
    }
    fetch(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new BuildStatusInstance(operationVersion, payload, instance._solution.serviceSid, instance._solution.sid));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return this._solution;
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.BuildStatusContextImpl = BuildStatusContextImpl;
class BuildStatusInstance {
    constructor(_version, payload, serviceSid, sid) {
        this._version = _version;
        this.sid = payload.sid;
        this.accountSid = payload.account_sid;
        this.serviceSid = payload.service_sid;
        this.status = payload.status;
        this.url = payload.url;
        this._solution = { serviceSid, sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new BuildStatusContextImpl(this._version, this._solution.serviceSid, this._solution.sid);
        return this._context;
    }
    /**
     * Fetch a BuildStatusInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed BuildStatusInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            sid: this.sid,
            accountSid: this.accountSid,
            serviceSid: this.serviceSid,
            status: this.status,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.BuildStatusInstance = BuildStatusInstance;
function BuildStatusListInstance(version, serviceSid, sid) {
    if (!(0, utility_1.isValidPathParam)(serviceSid)) {
        throw new Error("Parameter 'serviceSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(sid)) {
        throw new Error("Parameter 'sid' is not valid.");
    }
    const instance = (() => instance.get());
    instance.get = function get() {
        return new BuildStatusContextImpl(version, serviceSid, sid);
    };
    instance._version = version;
    instance._solution = { serviceSid, sid };
    instance._uri = ``;
    instance.toJSON = function toJSON() {
        return instance._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(instance.toJSON(), options);
    };
    return instance;
}
exports.BuildStatusListInstance = BuildStatusListInstance;
