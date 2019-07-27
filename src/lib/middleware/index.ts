import { handleBodyRequestParsing, allowCors, reqConsoleLogger,handleCompression, requestLimiter, graphQl } from "./common.middleware";

export default [handleBodyRequestParsing, allowCors, reqConsoleLogger, handleCompression, requestLimiter, graphQl];
