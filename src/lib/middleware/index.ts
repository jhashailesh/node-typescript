import { handleBodyRequestParsing, allowCors, reqConsoleLogger,handleCompression, requestLimiter } from "./common.middleware";

export default [handleBodyRequestParsing, allowCors, reqConsoleLogger, handleCompression, requestLimiter];
