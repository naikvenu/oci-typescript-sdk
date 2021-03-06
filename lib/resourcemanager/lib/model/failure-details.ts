/**
 * Resource Manager API
 * API for the Resource Manager service.
Use this API to install, configure, and manage resources via the "infrastructure-as-code" model.
For more information, see
[Overview of Resource Manager](/iaas/Content/ResourceManager/Concepts/resourcemanager.htm).

 * OpenAPI spec version: 20180917
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

export interface FailureDetails {
  /**
   * Job failure reason.
   */
  "code": FailureDetails.Code;
  /**
   * A human-readable error string.
   */
  "message": string;
}

export namespace FailureDetails {
  export enum Code {
    InternalServiceError = "INTERNAL_SERVICE_ERROR",
    TerraformExecutionError = "TERRAFORM_EXECUTION_ERROR",
    TerraformConfigUnzipFailed = "TERRAFORM_CONFIG_UNZIP_FAILED",
    InvalidWorkingDirectory = "INVALID_WORKING_DIRECTORY",
    JobTimeout = "JOB_TIMEOUT",
    TerraformConfigVirusFound = "TERRAFORM_CONFIG_VIRUS_FOUND",
    TerraformGitCloneFailure = "TERRAFORM_GIT_CLONE_FAILURE",
    TerraformGitCheckoutFailure = "TERRAFORM_GIT_CHECKOUT_FAILURE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: FailureDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
