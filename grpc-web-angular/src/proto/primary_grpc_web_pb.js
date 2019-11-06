/**
 * @fileoverview gRPC-Web generated client stub for primary
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.primary = require('./primary_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.primary.PrimaryClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.primary.PrimaryPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.primary.AddRequest,
 *   !proto.primary.AddResponse>}
 */
const methodDescriptor_Primary_SumNumber = new grpc.web.MethodDescriptor(
  '/primary.Primary/SumNumber',
  grpc.web.MethodType.UNARY,
  proto.primary.AddRequest,
  proto.primary.AddResponse,
  /** @param {!proto.primary.AddRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.primary.AddResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.primary.AddRequest,
 *   !proto.primary.AddResponse>}
 */
const methodInfo_Primary_SumNumber = new grpc.web.AbstractClientBase.MethodInfo(
  proto.primary.AddResponse,
  /** @param {!proto.primary.AddRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.primary.AddResponse.deserializeBinary
);


/**
 * @param {!proto.primary.AddRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.primary.AddResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.primary.AddResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.primary.PrimaryClient.prototype.sumNumber =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/primary.Primary/SumNumber',
      request,
      metadata || {},
      methodDescriptor_Primary_SumNumber,
      callback);
};


/**
 * @param {!proto.primary.AddRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.primary.AddResponse>}
 *     A native promise that resolves to the response
 */
proto.primary.PrimaryPromiseClient.prototype.sumNumber =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/primary.Primary/SumNumber',
      request,
      metadata || {},
      methodDescriptor_Primary_SumNumber);
};


module.exports = proto.primary;

