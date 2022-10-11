// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createNetworkManagementClient, {
  CheckDnsNameAvailabilityParameters
} from "@azure-rest/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Checks whether a domain name in the cloudapp.azure.com zone is available for use.
 *
 * @summary Checks whether a domain name in the cloudapp.azure.com zone is available for use.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/CheckDnsNameAvailability.json
 */
async function checkDnsNameAvailability() {
  const credential = new DefaultAzureCredential();
  const client = createNetworkManagementClient(credential);
  const subscriptionId = "";
  const location = "westus";
  const options: CheckDnsNameAvailabilityParameters = {
    queryParameters: { domainNameLabel: "testdns", "api-version": "2022-05-01" }
  };
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/CheckDnsNameAvailability",
      subscriptionId,
      location
    )
    .get(options);
  console.log(result);
}

checkDnsNameAvailability().catch(console.error);
