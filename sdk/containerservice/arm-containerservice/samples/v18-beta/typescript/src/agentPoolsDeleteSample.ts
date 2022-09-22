/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ContainerServiceClient } from "@azure/arm-containerservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Deletes an agent pool in the specified managed cluster.
 *
 * @summary Deletes an agent pool in the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-08-02-preview/examples/AgentPoolsDelete.json
 */
async function deleteAgentPool() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginDeleteAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName
  );
  console.log(result);
}

deleteAgentPool().catch(console.error);

/**
 * This sample demonstrates how to Deletes an agent pool in the specified managed cluster.
 *
 * @summary Deletes an agent pool in the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-08-02-preview/examples/AgentPoolsDelete_IgnorePodDisruptionBudget.json
 */
async function deleteAgentPoolByIgnoringPodDisruptionBudget() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginDeleteAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName
  );
  console.log(result);
}

deleteAgentPoolByIgnoringPodDisruptionBudget().catch(console.error);
