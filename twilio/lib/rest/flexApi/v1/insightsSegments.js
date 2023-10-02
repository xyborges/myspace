"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Flex
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
exports.InsightsSegmentsPage = exports.InsightsSegmentsInstance = exports.InsightsSegmentsListInstance = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../base/Page"));
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
function InsightsSegmentsListInstance(version) {
    const instance = {};
    instance._version = version;
    instance._solution = {};
    instance._uri = `/Insights/Segments`;
    instance.page = function page(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["segmentId"] !== undefined)
            data["SegmentId"] = params["segmentId"];
        if (params["reservationId"] !== undefined)
            data["ReservationId"] = serialize.map(params["reservationId"], (e) => e);
        if (params["pageSize"] !== undefined)
            data["PageSize"] = params["pageSize"];
        if (params.pageNumber !== undefined)
            data["Page"] = params.pageNumber;
        if (params.pageToken !== undefined)
            data["PageToken"] = params.pageToken;
        const headers = {};
        if (params["authorization"] !== undefined)
            headers["Authorization"] = params["authorization"];
        let operationVersion = version, operationPromise = operationVersion.page({
            uri: instance._uri,
            method: "get",
            params: data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new InsightsSegmentsPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new InsightsSegmentsPage(instance._version, payload, instance._solution));
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
exports.InsightsSegmentsListInstance = InsightsSegmentsListInstance;
class InsightsSegmentsInstance {
    constructor(_version, payload) {
        this._version = _version;
        this.segmentId = payload.segment_id;
        this.externalId = payload.external_id;
        this.queue = payload.queue;
        this.externalContact = payload.external_contact;
        this.externalSegmentLinkId = payload.external_segment_link_id;
        this.date = payload.date;
        this.accountId = payload.account_id;
        this.externalSegmentLink = payload.external_segment_link;
        this.agentId = payload.agent_id;
        this.agentPhone = payload.agent_phone;
        this.agentName = payload.agent_name;
        this.agentTeamName = payload.agent_team_name;
        this.agentTeamNameInHierarchy = payload.agent_team_name_in_hierarchy;
        this.agentLink = payload.agent_link;
        this.customerPhone = payload.customer_phone;
        this.customerName = payload.customer_name;
        this.customerLink = payload.customer_link;
        this.segmentRecordingOffset = payload.segment_recording_offset;
        this.media = payload.media;
        this.assessmentType = payload.assessment_type;
        this.assessmentPercentage = payload.assessment_percentage;
        this.url = payload.url;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            segmentId: this.segmentId,
            externalId: this.externalId,
            queue: this.queue,
            externalContact: this.externalContact,
            externalSegmentLinkId: this.externalSegmentLinkId,
            date: this.date,
            accountId: this.accountId,
            externalSegmentLink: this.externalSegmentLink,
            agentId: this.agentId,
            agentPhone: this.agentPhone,
            agentName: this.agentName,
            agentTeamName: this.agentTeamName,
            agentTeamNameInHierarchy: this.agentTeamNameInHierarchy,
            agentLink: this.agentLink,
            customerPhone: this.customerPhone,
            customerName: this.customerName,
            customerLink: this.customerLink,
            segmentRecordingOffset: this.segmentRecordingOffset,
            media: this.media,
            assessmentType: this.assessmentType,
            assessmentPercentage: this.assessmentPercentage,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.InsightsSegmentsInstance = InsightsSegmentsInstance;
class InsightsSegmentsPage extends Page_1.default {
    /**
     * Initialize the InsightsSegmentsPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of InsightsSegmentsInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new InsightsSegmentsInstance(this._version, payload);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.InsightsSegmentsPage = InsightsSegmentsPage;
