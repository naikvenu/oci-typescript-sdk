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

import * as ChangeManagementDashboardsCompartmentResponse from "./change-management-dashboards-compartment-response";
export import ChangeManagementDashboardsCompartmentResponse = ChangeManagementDashboardsCompartmentResponse.ChangeManagementDashboardsCompartmentResponse;
import * as ChangeManagementSavedSearchesCompartmentResponse from "./change-management-saved-searches-compartment-response";
export import ChangeManagementSavedSearchesCompartmentResponse = ChangeManagementSavedSearchesCompartmentResponse.ChangeManagementSavedSearchesCompartmentResponse;
import * as CreateManagementDashboardResponse from "./create-management-dashboard-response";
export import CreateManagementDashboardResponse = CreateManagementDashboardResponse.CreateManagementDashboardResponse;
import * as CreateManagementSavedSearchResponse from "./create-management-saved-search-response";
export import CreateManagementSavedSearchResponse = CreateManagementSavedSearchResponse.CreateManagementSavedSearchResponse;
import * as DeleteManagementDashboardResponse from "./delete-management-dashboard-response";
export import DeleteManagementDashboardResponse = DeleteManagementDashboardResponse.DeleteManagementDashboardResponse;
import * as DeleteManagementSavedSearchResponse from "./delete-management-saved-search-response";
export import DeleteManagementSavedSearchResponse = DeleteManagementSavedSearchResponse.DeleteManagementSavedSearchResponse;
import * as ExportDashboardResponse from "./export-dashboard-response";
export import ExportDashboardResponse = ExportDashboardResponse.ExportDashboardResponse;
import * as GetManagementDashboardResponse from "./get-management-dashboard-response";
export import GetManagementDashboardResponse = GetManagementDashboardResponse.GetManagementDashboardResponse;
import * as GetManagementSavedSearchResponse from "./get-management-saved-search-response";
export import GetManagementSavedSearchResponse = GetManagementSavedSearchResponse.GetManagementSavedSearchResponse;
import * as ImportDashboardResponse from "./import-dashboard-response";
export import ImportDashboardResponse = ImportDashboardResponse.ImportDashboardResponse;
import * as ListManagementDashboardsResponse from "./list-management-dashboards-response";
export import ListManagementDashboardsResponse = ListManagementDashboardsResponse.ListManagementDashboardsResponse;
import * as ListManagementSavedSearchesResponse from "./list-management-saved-searches-response";
export import ListManagementSavedSearchesResponse = ListManagementSavedSearchesResponse.ListManagementSavedSearchesResponse;
import * as UpdateManagementDashboardResponse from "./update-management-dashboard-response";
export import UpdateManagementDashboardResponse = UpdateManagementDashboardResponse.UpdateManagementDashboardResponse;
import * as UpdateManagementSavedSearchResponse from "./update-management-saved-search-response";
export import UpdateManagementSavedSearchResponse = UpdateManagementSavedSearchResponse.UpdateManagementSavedSearchResponse;
