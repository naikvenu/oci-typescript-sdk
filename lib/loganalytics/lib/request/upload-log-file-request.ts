/**
 *
 *
 * OpenAPI spec version: 20200601
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");
import stream = require("stream");
export interface UploadLogFileRequest extends common.BaseRequest {
  /**
   * The Log Analytics namespace used for the request.
   *
   */
  "namespaceName": string;
  /**
   * The name of the upload. This can be considered as a container name where different kind of logs will be collected and searched together. This upload name/id can further be used for retrieving the details of the upload, including its status or deleting the upload.
   *
   */
  "uploadName": string;
  /**
   * Name of the log source that will be used to process the files being uploaded.
   *
   */
  "logSourceName": string;
  /**
   * The name of the file being uploaded. The extension of the filename part will be used to detect the type of file (like zip, tar).
   *
   */
  "filename": string;
  /**
   * The log group OCID to which the log data in this upload will be mapped to.
   *   Example: `ocid1.loganalyticsloggroup.oc1..aaaaaaaad3q4sosi5i7z7onw2kgbwyk1581620537198`
   *
   */
  "opcMetaLoggrpid": string;
  /**
   * Log data
   */
  "uploadLogFileBody": Blob | stream.Readable | ReadableStream | string;
  /**
   * The entity OCID.
   *
   */
  "entityId"?: string;
  /**
   * Timezone to be used when processing log entries whose timestamps do not include an explicit timezone. When this property is not specified, the timezone of the entity specified is used. If the entity is also not specified or do not have a valid timezone then UTC is used
   *
   */
  "timezone"?: string;
  /**
   * character Encoding
   */
  "charEncoding"?: string;
  /**
   * This property is used to specify the format of the date. This is to be used for ambiguous dates like 12/11/10. This property can take any of the following values -  MONTH_DAY_YEAR, DAY_MONTH_YEAR, YEAR_MONTH_DAY, MONTH_DAY, DAY_MONTH.
   *
   */
  "dateFormat"?: string;
  /**
   * Used to indicate the year where the log entries timestamp do not mention year (Ex: Nov  8 20:45:56).
   *
   */
  "dateYear"?: string;
  /**
   * This property can be used to reset configuration cache in case of an issue with the upload.
   */
  "invalidateCache"?: boolean;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
 * The base-64 encoded MD5 hash of the body. If the Content-MD5 header is present, Log Analytics performs an integrity check
* on the body of the HTTP request by computing the MD5 hash for the body and comparing it to the MD5 hash supplied in the header.
* If the two hashes do not match, the log data is rejected and an HTTP-400 Unmatched Content MD5 error is returned with the message:
* <p>
\"The computed MD5 of the request body (ACTUAL_MD5) does not match the Content-MD5 header (HEADER_MD5)\"
* 
 */
  "contentMd5"?: string;
  /**
   * The content type of the log data. Defaults to 'application/octet-stream' if not overridden during the UploadLogFile call.
   */
  "contentType"?: string;
  /**
   * A token that uniquely identifies a request so it can be retried in case of a timeout or
   * server error without risk of executing that same action again. Retry tokens expire after 24
   * hours, but can be invalidated before then due to conflicting operations. For example, if a resource
   * has been deleted and purged from the system, then a retry of the original creation request
   * might be rejected.
   *
   */
  "opcRetryToken"?: string;
}
