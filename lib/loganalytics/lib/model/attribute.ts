/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

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

/**
 * Attribute
 */
export interface Attribute {
  /**
   * default value
   */
  "defaultValue"?: any;
  /**
   * dynamic value range reference attribute
   */
  "dynamicValueRangeRefAttr"?: string;
  /**
   * maximum length
   */
  "maximumLen"?: Attribute.MaximumLen;
  /**
   * name
   */
  "name"?: string;
  /**
   * populated by
   */
  "populatedBy"?: Attribute.PopulatedBy;
  /**
   * required in JSON
   */
  "requiredInJSON"?: Attribute.RequiredInJSON;
  /**
   * schema column
   */
  "schemaColumn"?: string;
  /**
   * is string exceed maximum length
   */
  "isStringExceedMaximumLength"?: boolean;
  /**
   * usage senario
   */
  "usageSenario"?: Attribute.UsageSenario;
  /**
   * value data type
   */
  "valueDataType"?: Attribute.ValueDataType;
  /**
   * value population priority
   */
  "valuePopulationPriority"?: Attribute.ValuePopulationPriority;
}

export namespace Attribute {
  export enum MaximumLen {
    LengthFive = "LENGTH_FIVE",
    LengthSixteen = "LENGTH_SIXTEEN",
    LengthThirtytwo = "LENGTH_THIRTYTWO",
    LengthSixtyfour = "LENGTH_SIXTYFOUR",
    LengthOnetwoeight = "LENGTH_ONETWOEIGHT",
    LengthTwofiftysix = "LENGTH_TWOFIFTYSIX",
    LengthFivetwelve = "LENGTH_FIVETWELVE",
    LengthSevenfifty = "LENGTH_SEVENFIFTY",
    LengthOneThousand = "LENGTH_ONE_THOUSAND",
    LengthTwoThousand = "LENGTH_TWO_THOUSAND",
    LengthFourThousand = "LENGTH_FOUR_THOUSAND",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum PopulatedBy {
    BackendGen = "BACKEND_GEN",
    CallerGen = "CALLER_GEN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum RequiredInJSON {
    Mandatory = "MANDATORY",
    Optional = "OPTIONAL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum UsageSenario {
    Create = "CREATE",
    Update = "UPDATE",
    CreateAndUpdate = "CREATE_AND_UPDATE",
    Delete = "DELETE",
    ReCreate = "RE_CREATE",
    Detail = "DETAIL",
    List = "LIST",
    FunctionWithLookup = "FUNCTION_WITH_LOOKUP",
    DbPattern = "DB_PATTERN",
    CreateFirsttimeT1 = "CREATE_FIRSTTIME_T1",
    UpdateOobMetric = "UPDATE_OOB_METRIC",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ValueDataType {
    Integer = "INTEGER",
    Long = "LONG",
    Float = "FLOAT",
    String = "STRING",
    Timestamp = "TIMESTAMP",
    Date = "DATE",
    Clob = "CLOB",
    TagRef = "TAG_REF",
    ParserRef = "PARSER_REF",
    SttRef = "STT_REF",
    LookupRef = "LOOKUP_REF",
    MetaFunctionRef = "META_FUNCTION_REF",
    CommonFieldRef = "COMMON_FIELD_REF",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ValuePopulationPriority {
    None = "NONE",
    Low = "LOW",
    High = "HIGH",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Attribute): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
