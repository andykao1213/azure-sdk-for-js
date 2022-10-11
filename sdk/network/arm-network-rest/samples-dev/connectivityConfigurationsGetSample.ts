// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createNetworkManagementClient, {
  ConnectivityConfigurationsGetParameters,
} from "@azure-rest/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a Network Connectivity Configuration, specified by the resource group, network manager name, and connectivity Configuration name
 *
 * @summary Gets a Network Connectivity Configuration, specified by the resource group, network manager name, and connectivity Configuration name
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/NetworkManagerConnectivityConfigurationGet.json
 */
async function connectivityConfigurationsGet() {
  const credential = new DefaultAzureCredential();
  const client = createNetworkManagementClient(credential);
  const subscriptionId = "";
  const resourceGroupName = "myResourceGroup";
  const networkManagerName = "testNetworkManager";
  const configurationName = "myTestConnectivityConfig";
  const options: ConnectivityConfigurationsGetParameters = {
    queryParameters: { "api-version": "2022-05-01" },
  };
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkManagers/{networkManagerName}/connectivityConfigurations/{configurationName}",
      subscriptionId,
      resourceGroupName,
      networkManagerName,
      configurationName
    )
    .get(options);
  console.log(result);
}

connectivityConfigurationsGet().catch(console.error);
