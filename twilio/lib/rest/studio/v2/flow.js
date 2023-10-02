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
exports.FlowPage = exports.FlowListInstance = exports.FlowInstance = exports.FlowContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../base/Page"));
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
const utility_1 = require("../../../base/utility");
const execution_1 = require("./flow/execution");
const flowRevision_1 = require("./flow/flowRevision");
const flowTestUser_1 = require("./flow/flowTestUser");
class FlowContextImpl {
    constructor(_version, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { sid };
        this._uri = `/Flows/${sid}`;
    }
    get executions() {
        this._executions =
            this._executions ||
                (0, execution_1.ExecutionListInstance)(this._version, this._solution.sid);
        return this._executions;
    }
    get revisions() {
        this._revisions =
            this._revisions ||
                (0, flowRevision_1.FlowRevisionListInstance)(this._version, this._solution.sid);
        return this._revisions;
    }
    get testUsers() {
        this._testUsers =
            this._testUsers ||
                (0, flowTestUser_1.FlowTestUserListInstance)(this._version, this._solution.sid);
        return this._testUsers;
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
        operationPromise = operationPromise.then((payload) => new FlowInstance(operationVersion, payload, instance._solution.sid));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    update(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["status"] === null || params["status"] === undefined) {
            throw new Error("Required parameter \"params['status']\" missing.");
        }
        let data = {};
        data["Status"] = params["status"];
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["definition"] !== undefined)
            data["Definition"] = serialize.object(params["definition"]);
        if (params["commitMessage"] !== undefined)
            data["CommitMessage"] = params["commitMessage"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new FlowInstance(operationVersion, payload, instance._solution.sid));
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
exports.FlowContextImpl = FlowContextImpl;
class FlowInstance {
    constructor(_version, payload, sid) {
        this._version = _version;
        this.sid = payload.sid;
        this.accountSid = payload.account_sid;
        this.friendlyName = payload.friendly_name;
        this.definition = payload.definition;
        this.status = payload.status;
        this.revision = deserialize.integer(payload.revision);
        this.commitMessage = payload.commit_message;
        this.valid = payload.valid;
        this.errors = payload.errors;
        this.warnings = payload.warnings;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.webhookUrl = payload.webhook_url;
        this.url = payload.url;
        this.links = payload.links;
        this._solution = { sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context || new FlowContextImpl(this._version, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a FlowInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a FlowInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FlowInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    update(params, callback) {
        return this._proxy.update(params, callback);
    }
    /**
     * Access the executions.
     */
    executions() {
        return this._proxy.executions;
    }
    /**
     * Access the revisions.
     */
    revisions() {
        return this._proxy.revisions;
    }
    /**
     * Access the testUsers.
     */
    testUsers() {
        return this._proxy.testUsers;
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
            friendlyName: this.friendlyName,
            definition: this.definition,
            status: this.status,
            revision: this.revision,
            commitMessage: this.commitMessage,
            valid: this.valid,
            errors: this.errors,
            warnings: this.warnings,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            webhookUrl: this.webhookUrl,
            url: this.url,
            links: this.links,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.FlowInstance = FlowInstance;
function FlowListInstance(version) {
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new FlowContextImpl(version, sid);
    };
    instance._version = version;
    instance._solution = {};
    instance._uri = `/Flows`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["friendlyName"] === null ||
            params["friendlyName"] === undefined) {
            throw new Error("Required parameter \"params['friendlyName']\" missing.");
        }
        if (params["status"] === null || params["status"] === undefined) {
            throw new Error("Required parameter \"params['status']\" missing.");
        }
        if (params["definition"] === null || params["definition"] === undefined) {
            throw new Error("Required parameter \"params['definition']\" missing.");
        }
        let data = {};
        data["FriendlyName"] = params["friendlyName"];
        data["Status"] = params["status"];
        data["Definition"] = serialize.object(params["definition"]);
        if (params["commitMessage"] !== undefined)
            data["CommitMessage"] = params["commitMessage"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new FlowInstance(operationVersion, payload));
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
        operationPromise = operationPromise.then((payload) => new FlowPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new FlowPage(instance._version, payload, instance._solution));
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
exports.FlowListInstance = FlowListInstance;
class FlowPage extends Page_1.default {
    /**
     * Initialize the FlowPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of FlowInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new FlowInstance(this._version, payload);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.FlowPage = FlowPage;
