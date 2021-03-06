/**
 * ManagementDashboard API
 * Management Dashboard micro-service provides a set of CRUD, import, export, and compartment related APIs (such as change compartment)   to support dashboard and saved search metadata preservation.  These APIs are mainly for client UIs, for various UI activities such as get list of all saved searches in a compartment, create a dashboard, open a saved search, etc.  Use export to retrieve  dashboards and their saved searches, then edit the Json if necessary (for example change compartmentIds), then import the result to  destination dashboard service.
APIs validate all required properties to ensure properties are present and have correct type and values.
    

 * OpenAPI spec version: 20200901
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
 * Properties of a saved search.
 */
export interface ManagementSavedSearch {
  /**
   * id for saved search.  Must be provided if OOB, otherwise must not be provided.
   */
  "id": string;
  /**
   * Display name for saved search.
   */
  "displayName": string;
  /**
   * Id for application (LA, APM, etc.) that owners this saved search.  Each owner has a unique Id.
   */
  "providerId": string;
  /**
   * Version.
   */
  "providerVersion": string;
  /**
   * Name for application (LA, APM, etc.) that owners this saved search.
   */
  "providerName": string;
  /**
   * The ocid of the compartment that owns the saved search.
   */
  "compartmentId": string;
  /**
   * String boolean (\"true\" or \"false\") to indicate Out Of the Box saved search.
   */
  "isOobSavedSearch": boolean;
  /**
   * Description.
   */
  "description": string;
  /**
   * Json for internationalization.
   */
  "nls": any;
  /**
   * How to show the saved search.
   */
  "type": model.SavedSearchTypes;
  /**
   * Json to contain options for UI.
   */
  "uiConfig": any;
  /**
   * Array of Json to contain options for source of data.
   */
  "dataConfig": Array<any>;
  /**
   * Created by which user.
   */
  "createdBy": string;
  /**
   * Updated by which user.
   */
  "updatedBy": string;
  /**
   * Time created.  Passed in to keep UI cache valid (operation is synchronous).
   */
  "timeCreated": Date;
  /**
   * Time updated.
   */
  "timeUpdated": Date;
  /**
   * Screenshot.
   */
  "screenImage": string;
  /**
   * Version of the metadata.
   */
  "metadataVersion": string;
  /**
   * Template.
   */
  "widgetTemplate": string;
  /**
   * View Model
   */
  "widgetVM": string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ManagementSavedSearch {
  export function getJsonObj(obj: ManagementSavedSearch): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
