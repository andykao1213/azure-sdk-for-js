/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerServiceClient } = require("@azure/arm-containerservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets supported OS options in the specified subscription.
 *
 * @summary Gets supported OS options in the specified subscription.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-08-03-preview/examples/ContainerServiceGetOSOptions.json
 */
async function getContainerServiceOSOptions() {
  const subscriptionId = "subid1";
  const location = "location1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.managedClusters.getOSOptions(location);
  console.log(result);
}

getContainerServiceOSOptions().catch(console.error);
