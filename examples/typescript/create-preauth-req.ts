/**
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import { ObjectStorageClient, requests, models } from "oci-objectstorage";
import { Region } from "oci-common";
import { readdir } from "fs";

const configurationFilePath = "~/.oci/config";
const configProfile = "DEFAULT";

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider(
  configurationFilePath,
  configProfile
);
/*
 * This Sample take directory path as a commandline argument and
 * generates urls for the files present in the directory to objectstorage using create preauthenticated request.
 *
 * @param args Arguments to provide to the example. The following arguments are expected:
 * <ul>
 * <li>The first argument is the absloute directory path to read files from.</li>
 * <li>The second argument is the name of an existing bucket name to generate the url.</li>
 * </ul>
 */

const args = process.argv.slice(2);
if (args.length !== 3) {
  console.error(
    "Unexpected number of arguments received. Please pass absloute directory path to read files from"
  );
  process.exit(-1);
}

const filePath: string = args[0]; //  for eg : "/Users/Abc/upload-manager";
const bucketName = args[1];
const namespaceName = args[2];
const serviceName = "objectstorage";

const client = new ObjectStorageClient({ authenticationDetailsProvider: provider });
client.region = Region.US_PHOENIX_1;

(async () => {
  try {
    // creating pre authentication request which generates the download url for the file
    console.time(`Download Time ${filePath}`);

    // set expiry date for the download url.
    const today = new Date();
    const neverExpires = new Date(today);
    neverExpires.setDate(neverExpires.getDate() + 25);

    // use date for generating a random unique id which can be used as a par id
    const parUniqueId = Date.now();
    const createPreauthenticatedRequestDetails = {
      name: parUniqueId.toString(),
      objectName: filePath,
      accessType: models.CreatePreauthenticatedRequestDetails.AccessType.ObjectRead,
      timeExpires: neverExpires
    } as models.CreatePreauthenticatedRequestDetails;
    const createPreauthenticatedRequest: requests.CreatePreauthenticatedRequestRequest = {
      bucketName: bucketName,
      namespaceName: namespaceName,
      createPreauthenticatedRequestDetails: createPreauthenticatedRequestDetails
    };
    // create pre authenticated request to generate the url
    const resp = await client.createPreauthenticatedRequest(createPreauthenticatedRequest);
    const baseUrl = `https://${serviceName}.${common.Region.US_PHOENIX_1.regionId}.${common.Realm.OC1.secondLevelDomain}`;
    const downloadUrl = resp.preauthenticatedRequest.accessUri;
    console.log("download url for the file " + filePath + " is " + baseUrl + downloadUrl);

    console.timeEnd(`Download Time ${filePath}`);
  } catch (ex) {
    console.error(`Failed due to ${ex}`);
  }
})();
