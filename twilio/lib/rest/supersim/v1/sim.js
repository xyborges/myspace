"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Supersim
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
exports.SimPage = exports.SimListInstance = exports.SimInstance = exports.SimContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../base/Page"));
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
const utility_1 = require("../../../base/utility");
const billingPeriod_1 = require("./sim/billingPeriod");
const simIpAddress_1 = require("./sim/simIpAddress");
class SimContextImpl {
    constructor(_version, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { sid };
        this._uri = `/Sims/${sid}`;
    }
    get billingPeriods() {
        this._billingPeriods =
            this._billingPeriods ||
                (0, billingPeriod_1.BillingPeriodListInstance)(this._version, this._solution.sid);
        return this._billingPeriods;
    }
    get simIpAddresses() {
        this._simIpAddresses =
            this._simIpAddresses ||
                (0, simIpAddress_1.SimIpAddressListInstance)(this._version, this._solution.sid);
        return this._simIpAddresses;
    }
    fetch(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new SimInstance(operationVersion, payload, instance._solution.sid));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    update(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["uniqueName"] !== undefined)
            data["UniqueName"] = params["uniqueName"];
        if (params["status"] !== undefined)
            data["Status"] = params["status"];
        if (params["fleet"] !== undefined)
            data["Fleet"] = params["fleet"];
        if (params["callbackUrl"] !== undefined)
            data["CallbackUrl"] = params["callbackUrl"];
        if (params["callbackMethod"] !== undefined)
            data["CallbackMethod"] = params["callbackMethod"];
        if (params["accountSid"] !== undefined)
            data["AccountSid"] = params["accountSid"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new SimInstance(operationVersion, payload, instance._solution.sid));
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
exports.SimContextImpl = SimContextImpl;
class SimInstance {
    constructor(_version, payload, sid) {
        this._version = _version;
        this.sid = payload.sid;
        this.uniqueName = payload.unique_name;
        this.accountSid = payload.account_sid;
        this.iccid = payload.iccid;
        this.status = payload.status;
        this.fleetSid = payload.fleet_sid;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.url = payload.url;
        this.links = payload.links;
        this._solution = { sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context || new SimContextImpl(this._version, this._solution.sid);
        return this._context;
    }
    /**
     * Fetch a SimInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed SimInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    update(params, callback) {
        return this._proxy.update(params, callback);
    }
    /**
     * Access the billingPeriods.
     */
    billingPeriods() {
        return this._proxy.billingPeriods;
    }
    /**
     * Access the simIpAddresses.
     */
    simIpAddresses() {
        return this._proxy.simIpAddresses;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            sid: this.sid,
            uniqueName: this.uniqueName,
            accountSid: this.accountSid,
            iccid: this.iccid,
            status: this.status,
            fleetSid: this.fleetSid,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            url: this.url,
            links: this.links,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.SimInstance = SimInstance;
function SimListInstance(version) {
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new SimContextImpl(version, sid);
    };
    instance._version = version;
    instance._solution = {};
    instance._uri = `/Sims`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["iccid"] === null || params["iccid"] === undefined) {
            throw new Error("Required parameter \"params['iccid']\" missing.");
        }
        if (params["registrationCode"] === null ||
            params["registrationCode"] === undefined) {
            throw new Error("Required parameter \"params['registrationCode']\" missing.");
        }
        let data = {};
        data["Iccid"] = params["iccid"];
        data["RegistrationCode"] = params["registrationCode"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new SimInstance(operationVersion, payload));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    };
    instance.page = function page(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["status"] !== undefined)
            data["Status"] = params["status"];
        if (params["fleet"] !== undefined)
            data["Fleet"] = params["fleet"];
        if (params["iccid"] !== undefined)
            data["Iccid"] = params["iccid"];
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
        operationPromise = operationPromise.then((payload) => new SimPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new SimPage(instance._version, payload, instance._solution));
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
exports.SimListInstance = SimListInstance;
class SimPage extends Page_1.default {
    /**
     * Initialize the SimPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of SimInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new SimInstance(this._version, payload);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.SimPage = SimPage;
