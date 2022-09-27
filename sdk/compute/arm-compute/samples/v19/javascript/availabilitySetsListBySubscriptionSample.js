/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists all availability sets in a subscription.
 *
 * @summary Lists all availability sets in a subscription.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-08-01/examples/availabilitySetExamples/AvailabilitySet_ListBySubscription.json
 */
async function listAvailabilitySetsInASubscription() {
  const subscriptionId = "{subscriptionId}";
  const expand = "virtualMachines$ref";
  const options = { expand };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.availabilitySets.listBySubscription(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAvailabilitySetsInASubscription().catch(console.error);
