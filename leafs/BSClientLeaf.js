/**
 *
 */
class BSClientLeaf {
    constructor() {
        /**
         *
         * @type {?CompositeBSClient}
         * @private
         */
        this._compositeBSClient = null;
    }

    // region getters & setters
    /**
     *
     * @return {?CompositeBSClient}
     */
    get bsClient() {
        return this._compositeBSClient;
    }

    // endregion
    // region register & deregister
    /**
     *
     * @param {CompositeBSClient} compositeBSClient
     */
    register(compositeBSClient) {
        this._compositeBSClient = compositeBSClient;
    }

    /**
     *
     */
    deregister() {
        this._compositeBSClient = null;
    }

    // endregion

    /**
     * Called by the `CompositeBSClient` before it tries to connect to the BotSocket server.
     *
     * @param {boolean} isReconnecting if `true`, the connection attempt is an attempt to re-connect.
     */
    preConnect(isReconnecting) {
        // nothing to do
    }

    /**
     * Called by the `CompositeBSClient` after it has successfully connected to the BotSocket server.
     */
    postConnect() {
        // nothing to do
    }

    /**
     * Called by the `CompositeBSClient` before it tries to disconnect from the BotSocket server.
     *
     * @param {number} disconnectCode the code that will be provided as the reason for disconnection.
     */
    preDisconnect(disconnectCode) {
        // nothing to do
    }

    /**
     * Called by the `CompositeBSClient` after it has been disconnected from the BotSocket server.
     *
     * @param {number} disconnectCode the code that was provided as the reason for disconnection.
     */
    postDisconnect(disconnectCode) {
        // nothing to do
    }

    /**
     * Called by the `CompositeBSClient` when the socket connection errors out.
     */
    errored() {
        // nothing to do
    }

    /**
     * Processes the data returned by the BotSocket server as part of it's handshaking.
     *
     * @param {BotSocket.Protocol.Messages.ServerHandshakeData} serverHandshake
     */
    processServerHandshake(serverHandshake) {
        // nothing to do
    }

    /**
     * Supplements the data that's going to be sent as part of a BotSocket `ClientHandshake`.
     *
     * The value returned by the method of this method on a `Leaf` called prior to this
     * one on the bush is passed as the last parameter, and can be accessed like so:
     *
     * ```
     * const lastResult = arguments[arguments.length - 1];
     * ```
     *
     * @param {BotSocket.Protocol.Messages.ClientHandshakeData} clientHandshake
     *
     * @return {BotSocket.Protocol.Messages.ClientHandshakeData}
     */
    supplementClientHandshake(clientHandshake) {
        return clientHandshake;
    }

    /**
     * Supplements a StaMP query message that's going to be sent to the BotSocket server.
     *
     * The value returned by the method of this method on a `Leaf` called prior to this
     * one on the bush is passed as the last parameter, and can be accessed like so:
     *
     * ```
     * const lastResult = arguments[arguments.length - 1];
     * ```
     *
     * @param {StaMP.Protocol.QueryMessage} query
     *
     * @return {StaMP.Protocol.QueryMessage}
     */
    supplementStaMPQuery(query) {
        return query;
    }

    /**
     * Processes a received `render-letter` BotSocket request message.
     *
     * @param {BotSocket.Protocol.Messages.RenderLetterData} renderLetterData
     */
    processRenderLetterRequest(renderLetterData) {
        // nothing to do
    }
}

module.exports = BSClientLeaf;
