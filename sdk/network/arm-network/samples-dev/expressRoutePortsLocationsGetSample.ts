/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Retrieves a single ExpressRoutePort peering location, including the list of available bandwidths available at said peering location.
 *
 * @summary Retrieves a single ExpressRoutePort peering location, including the list of available bandwidths available at said peering location.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/ExpressRoutePortsLocationGet.json
 */
async function expressRoutePortsLocationGet() {
  const subscriptionId = "subid";
  const locationName = "locationName";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.expressRoutePortsLocations.get(locationName);
  console.log(result);
}

expressRoutePortsLocationGet().catch(console.error);
