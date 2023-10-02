"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
const BaseTwilio_1 = require("../base/BaseTwilio");
/* jshint ignore:start */
/**
 * Twilio Client to interact with the Rest API
 */
/* jshint ignore:end */
class Twilio extends BaseTwilio_1.Client {
    /* jshint ignore:start */
    /**
     * Creates a new instance of Twilio Client
     *
     * @param username -
     *          The username used for authentication. This is normally account sid, but if using key/secret auth will be the api key sid.
     * @param password -
     *          The password used for authentication. This is normally auth token, but if using key/secret auth will be the secret.
     * @param opts - The options argument
     *
     * @returns A new instance of Twilio client
     */
    /* jshint ignore:end */
    constructor(username, password, opts) {
        super(username, password, opts);
        if (this.opts?.lazyLoading === false) {
            this.accounts;
            this.api;
            this.autopilot;
            this.bulkexports;
            this.chat;
            this.content;
            this.conversations;
            this.events;
            this.flexApi;
            this.frontlineApi;
            this.insights;
            this.intelligence;
            this.ipMessaging;
            this.lookups;
            this.media;
            this.messaging;
            this.microvisor;
            this.monitor;
            this.notify;
            this.numbers;
            this.oauth;
            this.preview;
            this.pricing;
            this.proxy;
            this.routes;
            this.serverless;
            this.studio;
            this.supersim;
            this.sync;
            this.taskrouter;
            this.trunking;
            this.trusthub;
            this.verify;
            this.video;
            this.voice;
            this.wireless;
        }
    }
    //Domains
    /** Getter for (Twilio.Accounts) domain */
    get accounts() {
        return (this._accounts ?? (this._accounts = new (require("./Accounts"))(this)));
    }
    /** Getter for (Twilio.Api) domain */
    get api() {
        return this._api ?? (this._api = new (require("./Api"))(this));
    }
    /** Getter for (Twilio.Autopilot) domain */
    get autopilot() {
        return (this._autopilot ?? (this._autopilot = new (require("./Autopilot"))(this)));
    }
    /** Getter for (Twilio.Bulkexports) domain */
    get bulkexports() {
        return (this._bulkexports ??
            (this._bulkexports = new (require("./Bulkexports"))(this)));
    }
    /** Getter for (Twilio.Chat) domain */
    get chat() {
        return this._chat ?? (this._chat = new (require("./Chat"))(this));
    }
    /** Getter for (Twilio.Content) domain */
    get content() {
        return this._content ?? (this._content = new (require("./Content"))(this));
    }
    /** Getter for (Twilio.Conversations) domain */
    get conversations() {
        return (this._conversations ??
            (this._conversations = new (require("./Conversations"))(this)));
    }
    /** Getter for (Twilio.Events) domain */
    get events() {
        return this._events ?? (this._events = new (require("./Events"))(this));
    }
    /** Getter for (Twilio.FlexApi) domain */
    get flexApi() {
        return this._flexApi ?? (this._flexApi = new (require("./FlexApi"))(this));
    }
    /** Getter for (Twilio.FrontlineApi) domain */
    get frontlineApi() {
        return (this._frontlineApi ??
            (this._frontlineApi = new (require("./FrontlineApi"))(this)));
    }
    /** Getter for (Twilio.Insights) domain */
    get insights() {
        return (this._insights ?? (this._insights = new (require("./Insights"))(this)));
    }
    /** Getter for (Twilio.Intelligence) domain */
    get intelligence() {
        return (this._intelligence ??
            (this._intelligence = new (require("./Intelligence"))(this)));
    }
    /** Getter for (Twilio.IpMessaging) domain */
    get ipMessaging() {
        return (this._ipMessaging ??
            (this._ipMessaging = new (require("./IpMessaging"))(this)));
    }
    /** Getter for (Twilio.Lookups) domain */
    get lookups() {
        return this._lookups ?? (this._lookups = new (require("./Lookups"))(this));
    }
    /** Getter for (Twilio.Media) domain */
    get media() {
        return this._media ?? (this._media = new (require("./Media"))(this));
    }
    /** Getter for (Twilio.Messaging) domain */
    get messaging() {
        return (this._messaging ?? (this._messaging = new (require("./Messaging"))(this)));
    }
    /** Getter for (Twilio.Microvisor) domain */
    get microvisor() {
        return (this._microvisor ??
            (this._microvisor = new (require("./Microvisor"))(this)));
    }
    /** Getter for (Twilio.Monitor) domain */
    get monitor() {
        return this._monitor ?? (this._monitor = new (require("./Monitor"))(this));
    }
    /** Getter for (Twilio.Notify) domain */
    get notify() {
        return this._notify ?? (this._notify = new (require("./Notify"))(this));
    }
    /** Getter for (Twilio.Numbers) domain */
    get numbers() {
        return this._numbers ?? (this._numbers = new (require("./Numbers"))(this));
    }
    /** Getter for (Twilio.Oauth) domain */
    get oauth() {
        return this._oauth ?? (this._oauth = new (require("./Oauth"))(this));
    }
    /** Getter for (Twilio.Preview) domain */
    get preview() {
        return this._preview ?? (this._preview = new (require("./Preview"))(this));
    }
    /** Getter for (Twilio.Pricing) domain */
    get pricing() {
        return this._pricing ?? (this._pricing = new (require("./Pricing"))(this));
    }
    /** Getter for (Twilio.Proxy) domain */
    get proxy() {
        return this._proxy ?? (this._proxy = new (require("./Proxy"))(this));
    }
    /** Getter for (Twilio.Routes) domain */
    get routes() {
        return this._routes ?? (this._routes = new (require("./Routes"))(this));
    }
    /** Getter for (Twilio.Serverless) domain */
    get serverless() {
        return (this._serverless ??
            (this._serverless = new (require("./Serverless"))(this)));
    }
    /** Getter for (Twilio.Studio) domain */
    get studio() {
        return this._studio ?? (this._studio = new (require("./Studio"))(this));
    }
    /** Getter for (Twilio.Supersim) domain */
    get supersim() {
        return (this._supersim ?? (this._supersim = new (require("./Supersim"))(this)));
    }
    /** Getter for (Twilio.Sync) domain */
    get sync() {
        return this._sync ?? (this._sync = new (require("./Sync"))(this));
    }
    /** Getter for (Twilio.Taskrouter) domain */
    get taskrouter() {
        return (this._taskrouter ??
            (this._taskrouter = new (require("./Taskrouter"))(this)));
    }
    /** Getter for (Twilio.Trunking) domain */
    get trunking() {
        return (this._trunking ?? (this._trunking = new (require("./Trunking"))(this)));
    }
    /** Getter for (Twilio.Trusthub) domain */
    get trusthub() {
        return (this._trusthub ?? (this._trusthub = new (require("./Trusthub"))(this)));
    }
    /** Getter for (Twilio.Verify) domain */
    get verify() {
        return this._verify ?? (this._verify = new (require("./Verify"))(this));
    }
    /** Getter for (Twilio.Video) domain */
    get video() {
        return this._video ?? (this._video = new (require("./Video"))(this));
    }
    /** Getter for (Twilio.Voice) domain */
    get voice() {
        return this._voice ?? (this._voice = new (require("./Voice"))(this));
    }
    /** Getter for (Twilio.Wireless) domain */
    get wireless() {
        return (this._wireless ?? (this._wireless = new (require("./Wireless"))(this)));
    }
    /** Getter for (Twilio.Api.V2010.AccountContext.AddressListInstance) addresses resource */
    get addresses() {
        return this.api.v2010.account.addresses;
    }
    /** Getter for (Twilio.Api.V2010.AccountContext.ApplicationListInstance) applications resource */
    get applications() {
        return this.api.v2010.account.applications;
    }
    /** Getter for (Twilio.Api.V2010.AccountContext.AuthorizedConnectAppListInstance) authorizedConnectApps resource */
    get authorizedConnectApps() {
        return this.api.v2010.account.authorizedConnectApps;
    }
    /** Getter for (Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryListInstance) availablePhoneNumbers resource */
    get availablePhoneNumbers() {
        return this.api.v2010.account.availablePhoneNumbers;
    }
    /** Getter for (Twilio.Api.V2010.AccountContext.BalanceListInstance) balance resource */
    get balance() {
        return this.api.v2010.account.balance;
    }
    /** Getter for (Twilio.Api.V2010.AccountContext.CallListInstance) calls resource */
    get calls() {
        return this.api.v2010.account.calls;
    }
    /** Getter for (Twilio.Api.V2010.AccountContext.ConferenceListInstance) conferences resource */
    get conferences() {
        return this.api.v2010.account.conferences;
    }
    /** Getter for (Twilio.Api.V2010.AccountContext.ConnectAppListInstance) connectApps resource */
    get connectApps() {
        return this.api.v2010.account.connectApps;
    }
    /** Getter for (Twilio.Api.V2010.AccountContext.IncomingPhoneNumberListInstance) incomingPhoneNumbers resource */
    get incomingPhoneNumbers() {
        return this.api.v2010.account.incomingPhoneNumbers;
    }
    /** Getter for (Twilio.Api.V2010.AccountContext.KeyListInstance) keys resource */
    get keys() {
        return this.api.v2010.account.keys;
    }
    /** Getter for (Twilio.Api.V2010.AccountContext.MessageListInstance) messages resource */
    get messages() {
        return this.api.v2010.account.messages;
    }
    /** Getter for (Twilio.Api.V2010.AccountContext.NewKeyListInstance) newKeys resource */
    get newKeys() {
        return this.api.v2010.account.newKeys;
    }
    /** Getter for (Twilio.Api.V2010.AccountContext.NewSigningKeyListInstance) newSigningKeys resource */
    get newSigningKeys() {
        return this.api.v2010.account.newSigningKeys;
    }
    /** Getter for (Twilio.Api.V2010.AccountContext.NotificationListInstance) notifications resource */
    get notifications() {
        return this.api.v2010.account.notifications;
    }
    /** Getter for (Twilio.Api.V2010.AccountContext.OutgoingCallerIdListInstance) outgoingCallerIds resource */
    get outgoingCallerIds() {
        return this.api.v2010.account.outgoingCallerIds;
    }
    /** Getter for (Twilio.Api.V2010.AccountContext.QueueListInstance) queues resource */
    get queues() {
        return this.api.v2010.account.queues;
    }
    /** Getter for (Twilio.Api.V2010.AccountContext.RecordingListInstance) recordings resource */
    get recordings() {
        return this.api.v2010.account.recordings;
    }
    /** Getter for (Twilio.Api.V2010.AccountContext.ShortCodeListInstance) shortCodes resource */
    get shortCodes() {
        return this.api.v2010.account.shortCodes;
    }
    /** Getter for (Twilio.Api.V2010.AccountContext.SigningKeyListInstance) signingKeys resource */
    get signingKeys() {
        return this.api.v2010.account.signingKeys;
    }
    /** Getter for (Twilio.Api.V2010.AccountContext.SipListInstance) sip resource */
    get sip() {
        return this.api.v2010.account.sip;
    }
    /** Getter for (Twilio.Api.V2010.AccountContext.TokenListInstance) tokens resource */
    get tokens() {
        return this.api.v2010.account.tokens;
    }
    /** Getter for (Twilio.Api.V2010.AccountContext.TranscriptionListInstance) transcriptions resource */
    get transcriptions() {
        return this.api.v2010.account.transcriptions;
    }
    /** Getter for (Twilio.Api.V2010.AccountContext.UsageListInstance) usage resource */
    get usage() {
        return this.api.v2010.account.usage;
    }
    /** Getter for (Twilio.Api.V2010.AccountContext.ValidationRequestListInstance) validationRequests resource */
    get validationRequests() {
        return this.api.v2010.account.validationRequests;
    }
}
module.exports = Twilio;
