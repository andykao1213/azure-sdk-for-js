/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  DedicatedHostGroup,
  ComputeManagementClient
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create or update a dedicated host group. For details of Dedicated Host and Dedicated Host Groups please see [Dedicated Host Documentation] (https://go.microsoft.com/fwlink/?linkid=2082596)
 *
 * @summary Create or update a dedicated host group. For details of Dedicated Host and Dedicated Host Groups please see [Dedicated Host Documentation] (https://go.microsoft.com/fwlink/?linkid=2082596)
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-08-01/examples/dedicatedHostExamples/DedicatedHostGroup_CreateOrUpdate_WithUltraSSD.json
 */
async function createOrUpdateADedicatedHostGroupWithUltraSsdSupport() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const hostGroupName = "myDedicatedHostGroup";
  const parameters: DedicatedHostGroup = {
    additionalCapabilities: { ultraSSDEnabled: true },
    location: "westus",
    platformFaultDomainCount: 3,
    supportAutomaticPlacement: true,
    tags: { department: "finance" },
    zones: ["1"]
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.dedicatedHostGroups.createOrUpdate(
    resourceGroupName,
    hostGroupName,
    parameters
  );
  console.log(result);
}

createOrUpdateADedicatedHostGroupWithUltraSsdSupport().catch(console.error);

/**
 * This sample demonstrates how to Create or update a dedicated host group. For details of Dedicated Host and Dedicated Host Groups please see [Dedicated Host Documentation] (https://go.microsoft.com/fwlink/?linkid=2082596)
 *
 * @summary Create or update a dedicated host group. For details of Dedicated Host and Dedicated Host Groups please see [Dedicated Host Documentation] (https://go.microsoft.com/fwlink/?linkid=2082596)
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-08-01/examples/dedicatedHostExamples/DedicatedHostGroup_CreateOrUpdate.json
 */
async function createOrUpdateADedicatedHostGroup() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const hostGroupName = "myDedicatedHostGroup";
  const parameters: DedicatedHostGroup = {
    location: "westus",
    platformFaultDomainCount: 3,
    supportAutomaticPlacement: true,
    tags: { department: "finance" },
    zones: ["1"]
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.dedicatedHostGroups.createOrUpdate(
    resourceGroupName,
    hostGroupName,
    parameters
  );
  console.log(result);
}

createOrUpdateADedicatedHostGroup().catch(console.error);
