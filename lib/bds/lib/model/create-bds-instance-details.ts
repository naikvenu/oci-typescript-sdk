/**
 * Big Data Service API
 * API for the Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service
build on Hadoop, Spark and Data Science distribution, which can be fully integrated with existing enterprise
data in Oracle Database and Oracle Applications..

 * OpenAPI spec version: 20190531
 * Contact: rahul.ra.arora@oracle.com
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
 * The information about new BDS instance
 */
export interface CreateBdsInstanceDetails {
  /**
   * The OCID of the compartment
   */
  "compartmentId": string;
  /**
   * Name of the BDS instance
   */
  "displayName": string;
  /**
   * Version of the Hadoop distribution
   */
  "clusterVersion": string;
  /**
   * The SSH public key used to authenticate the cluster connection.
   */
  "clusterPublicKey": string;
  /**
   * Base-64 encoded password for Cloudera Manager admin user
   */
  "clusterAdminPassword": string;
  /**
   * Boolean flag specifying whether or not the cluster is HA
   */
  "isHighAvailability": boolean;
  /**
   * Boolean flag specifying whether or not the cluster should be setup as secure.
   */
  "isSecure": boolean;
  /**
   * Additional configuration of customer's network.
   */
  "networkConfig"?: model.NetworkConfig;
  /**
   * The list of nodes in the BDS instance
   */
  "nodes": Array<model.CreateNodeDetails>;
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

export namespace CreateBdsInstanceDetails {
  export function getJsonObj(obj: CreateBdsInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "networkConfig": obj.networkConfig
          ? model.NetworkConfig.getJsonObj(obj.networkConfig)
          : undefined,
        "nodes": obj.nodes
          ? obj.nodes.map(item => {
              return model.CreateNodeDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
