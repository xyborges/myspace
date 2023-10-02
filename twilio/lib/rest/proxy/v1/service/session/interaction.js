"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Proxy
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
exports.InteractionPage = exports.InteractionListInstance = exports.InteractionInstance = exports.InteractionContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../../base/Page"));
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
class InteractionContextImpl {
    constructor(_version, serviceSid, sessionSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(serviceSid)) {
            throw new Error("Parameter 'serviceSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sessionSid)) {
            throw new Error("Parameter 'sessionSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { serviceSid, sessionSid, sid };
        this._uri = `/Services/${serviceSid}/Sessions/${sessionSid}/Interactions/${sid}`;
    }
    remove(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.remove({
            uri: instance._uri,
            method: "delete",
        });
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    fetch(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new InteractionInstance(operationVersion, payload, instance._solution.serviceSid, instance._solution.sessionSid, instance._solution.sid));
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
exports.InteractionContextImpl = InteractionContextImpl;
class InteractionInstance {
    constructor(_version, payload, serviceSid, sessionSid, sid) {
        this._version = _version;
        this.sid = payload.sid;
        this.sessionSid = payload.session_sid;
        this.serviceSid = payload.service_sid;
        this.accountSid = payload.account_sid;
        this.data = payload.data;
        this.type = payload.type;
        this.inboundParticipantSid = payload.inbound_participant_sid;
        this.inboundResourceSid = payload.inbound_resource_sid;
        this.inboundResourceStatus = payload.inbound_resource_status;
        this.inboundResourceType = payload.inbound_resource_type;
        this.inboundResourceUrl = payload.inbound_resource_url;
        this.outboundParticipantSid = payload.outbound_participant_sid;
        this.outboundResourceSid = payload.outbound_resource_sid;
        this.outboundResourceStatus = payload.outbound_resource_status;
        this.outboundResourceType = payload.outbound_resource_type;
        this.outboundResourceUrl = payload.outbound_resource_url;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.url = payload.url;
        this._solution = { serviceSid, sessionSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new InteractionContextImpl(this._version, this._solution.serviceSid, this._solution.sessionSid, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a InteractionInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a InteractionInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed InteractionInstance
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
            sessionSid: this.sessionSid,
            serviceSid: this.serviceSid,
            accountSid: this.accountSid,
            data: this.data,
            type: this.type,
            inboundParticipantSid: this.inboundParticipantSid,
            inboundResourceSid: this.inboundResourceSid,
            inboundResourceStatus: this.inboundResourceStatus,
            inboundResourceType: this.inboundResourceType,
            inboundResourceUrl: this.inboundResourceUrl,
            outboundParticipantSid: this.outboundParticipantSid,
            outboundResourceSid: this.outboundResourceSid,
            outboundResourceStatus: this.outboundResourceStatus,
            outboundResourceType: this.outboundResourceType,
            outboundResourceUrl: this.outboundResourceUrl,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.InteractionInstance = InteractionInstance;
function InteractionListInstance(version, serviceSid, sessionSid) {
    if (!(0, utility_1.isValidPathParam)(serviceSid)) {
        throw new Error("Parameter 'serviceSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(sessionSid)) {
        throw new Error("Parameter 'sessionSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new InteractionContextImpl(version, serviceSid, sessionSid, sid);
    };
    instance._version = version;
    instance._solution = { serviceSid, sessionSid };
    instance._uri = `/Services/${serviceSid}/Sessions/${sessionSid}/Interactions`;
    instance.page = function page(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["pageSize"] !== undefined)
            data["PageSize"] = params["pageSize"];
        if (params.pageNumber !== undefined)
            data["Page"] = params.pageNumber;
        if (params.pageToken !== undefined)
            data["PageToken"] = params.pageToken;
        const headers = {};
        let operationVersion = version, operationPromise = operationVersion.page({
            uri: instance._uri,
            method: "get",
            params: data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new InteractionPage(operationVersion, payload, instance._solution));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    };
    instance.each = instance._version.each;
    instance.list = instance._version.list;
    instance.getPage = function getPage(targetUrl, callback) {
        const operationPromise = instance._version._domain.twilio.request({
            method: "get",
            uri: targetUrl,
        });
        let pagePromise = operationPromise.then((payload) => new InteractionPage(instance._version, payload, instance._solution));
        pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
        return pagePromise;
    };
    instance.toJSON = function toJSON() {
        return instance._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(instance.toJSON(), options);
    };
    return instance;
}
exports.InteractionListInstance = InteractionListInstance;
class InteractionPage extends Page_1.default {
    /**
     * Initialize the InteractionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of InteractionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new InteractionInstance(this._version, payload, this._solution.serviceSid, this._solution.sessionSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.InteractionPage = InteractionPage;