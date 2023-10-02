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
exports.DependentHostedNumberOrderPage = exports.DependentHostedNumberOrderInstance = exports.DependentHostedNumberOrderListInstance = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../base/Page"));
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
function DependentHostedNumberOrderListInstance(version, signingDocumentSid) {
    if (!(0, utility_1.isValidPathParam)(signingDocumentSid)) {
        throw new Error("Parameter 'signingDocumentSid' is not valid.");
    }
    const instance = {};
    instance._version = version;
    instance._solution = { signingDocumentSid };
    instance._uri = `/AuthorizationDocuments/${signingDocumentSid}/DependentHostedNumberOrders`;
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
        if (params["phoneNumber"] !== undefined)
            data["PhoneNumber"] = params["phoneNumber"];
        if (params["incomingPhoneNumberSid"] !== undefined)
            data["IncomingPhoneNumberSid"] = params["incomingPhoneNumberSid"];
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["uniqueName"] !== undefined)
            data["UniqueName"] = params["uniqueName"];
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
        operationPromise = operationPromise.then((payload) => new DependentHostedNumberOrderPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new DependentHostedNumberOrderPage(instance._version, payload, instance._solution));
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
exports.DependentHostedNumberOrderListInstance = DependentHostedNumberOrderListInstance;
class DependentHostedNumberOrderInstance {
    constructor(_version, payload, signingDocumentSid) {
        this._version = _version;
        this.sid = payload.sid;
        this.accountSid = payload.account_sid;
        this.incomingPhoneNumberSid = payload.incoming_phone_number_sid;
        this.addressSid = payload.address_sid;
        this.signingDocumentSid = payload.signing_document_sid;
        this.phoneNumber = payload.phone_number;
        this.capabilities = payload.capabilities;
        this.friendlyName = payload.friendly_name;
        this.uniqueName = payload.unique_name;
        this.status = payload.status;
        this.failureReason = payload.failure_reason;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.verificationAttempts = deserialize.integer(payload.verification_attempts);
        this.email = payload.email;
        this.ccEmails = payload.cc_emails;
        this.verificationType = payload.verification_type;
        this.verificationDocumentSid = payload.verification_document_sid;
        this.extension = payload.extension;
        this.callDelay = deserialize.integer(payload.call_delay);
        this.verificationCode = payload.verification_code;
        this.verificationCallSids = payload.verification_call_sids;
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
            incomingPhoneNumberSid: this.incomingPhoneNumberSid,
            addressSid: this.addressSid,
            signingDocumentSid: this.signingDocumentSid,
            phoneNumber: this.phoneNumber,
            capabilities: this.capabilities,
            friendlyName: this.friendlyName,
            uniqueName: this.uniqueName,
            status: this.status,
            failureReason: this.failureReason,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            verificationAttempts: this.verificationAttempts,
            email: this.email,
            ccEmails: this.ccEmails,
            verificationType: this.verificationType,
            verificationDocumentSid: this.verificationDocumentSid,
            extension: this.extension,
            callDelay: this.callDelay,
            verificationCode: this.verificationCode,
            verificationCallSids: this.verificationCallSids,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.DependentHostedNumberOrderInstance = DependentHostedNumberOrderInstance;
class DependentHostedNumberOrderPage extends Page_1.default {
    /**
     * Initialize the DependentHostedNumberOrderPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of DependentHostedNumberOrderInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new DependentHostedNumberOrderInstance(this._version, payload, this._solution.signingDocumentSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.DependentHostedNumberOrderPage = DependentHostedNumberOrderPage;
