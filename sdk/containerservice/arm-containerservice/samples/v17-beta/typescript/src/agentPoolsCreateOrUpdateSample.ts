/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AgentPool, ContainerServiceClient } from "@azure/arm-containerservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates an agent pool in the specified managed cluster.
 *
 * @summary Creates or updates an agent pool in the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/AgentPoolsAssociate_CRG.json
 */
async function associateAgentPoolWithCapacityReservationGroup() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const parameters: AgentPool = {
    capacityReservationGroupID:
      "/subscriptions/subid1/resourcegroups/rg1/providers//Microsoft.Compute/CapacityReservationGroups/crg1",
    count: 3,
    orchestratorVersion: "",
    osType: "Linux",
    vmSize: "Standard_DS2_v2"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName,
    parameters
  );
  console.log(result);
}

associateAgentPoolWithCapacityReservationGroup().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates an agent pool in the specified managed cluster.
 *
 * @summary Creates or updates an agent pool in the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/AgentPoolsCreate_Snapshot.json
 */
async function createAgentPoolUsingAnAgentPoolSnapshot() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const parameters: AgentPool = {
    count: 3,
    creationData: {
      sourceResourceId:
        "/subscriptions/subid1/resourceGroups/rg1/providers/Microsoft.ContainerService/snapshots/snapshot1"
    },
    enableFips: true,
    orchestratorVersion: "",
    osType: "Linux",
    vmSize: "Standard_DS2_v2"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName,
    parameters
  );
  console.log(result);
}

createAgentPoolUsingAnAgentPoolSnapshot().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates an agent pool in the specified managed cluster.
 *
 * @summary Creates or updates an agent pool in the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/AgentPoolsCreate_EnableCustomCATrust.json
 */
async function createAgentPoolWithCustomCaTrustEnabled() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const parameters: AgentPool = {
    count: 3,
    enableCustomCATrust: true,
    orchestratorVersion: "",
    osType: "Linux",
    vmSize: "Standard_DS2_v2"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName,
    parameters
  );
  console.log(result);
}

createAgentPoolWithCustomCaTrustEnabled().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates an agent pool in the specified managed cluster.
 *
 * @summary Creates or updates an agent pool in the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/AgentPoolsCreate_DedicatedHostGroup.json
 */
async function createAgentPoolWithDedicatedHostGroup() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const parameters: AgentPool = {
    count: 3,
    hostGroupID:
      "/subscriptions/subid1/resourcegroups/rg/providers/Microsoft.Compute/hostGroups/hostgroup1",
    orchestratorVersion: "",
    osType: "Linux",
    vmSize: "Standard_DS2_v2"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName,
    parameters
  );
  console.log(result);
}

createAgentPoolWithDedicatedHostGroup().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates an agent pool in the specified managed cluster.
 *
 * @summary Creates or updates an agent pool in the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/AgentPoolsCreate_EnableEncryptionAtHost.json
 */
async function createAgentPoolWithEncryptionAtHostEnabled() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const parameters: AgentPool = {
    count: 3,
    enableEncryptionAtHost: true,
    orchestratorVersion: "",
    osType: "Linux",
    vmSize: "Standard_DS2_v2"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName,
    parameters
  );
  console.log(result);
}

createAgentPoolWithEncryptionAtHostEnabled().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates an agent pool in the specified managed cluster.
 *
 * @summary Creates or updates an agent pool in the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/AgentPoolsCreate_Ephemeral.json
 */
async function createAgentPoolWithEphemeralOSDisk() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const parameters: AgentPool = {
    count: 3,
    orchestratorVersion: "",
    osDiskSizeGB: 64,
    osDiskType: "Ephemeral",
    osType: "Linux",
    vmSize: "Standard_DS2_v2"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName,
    parameters
  );
  console.log(result);
}

createAgentPoolWithEphemeralOSDisk().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates an agent pool in the specified managed cluster.
 *
 * @summary Creates or updates an agent pool in the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/AgentPoolsCreate_EnableFIPS.json
 */
async function createAgentPoolWithFipsEnabledOS() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const parameters: AgentPool = {
    count: 3,
    enableFips: true,
    orchestratorVersion: "",
    osType: "Linux",
    vmSize: "Standard_DS2_v2"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName,
    parameters
  );
  console.log(result);
}

createAgentPoolWithFipsEnabledOS().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates an agent pool in the specified managed cluster.
 *
 * @summary Creates or updates an agent pool in the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/AgentPoolsCreate_GPUMIG.json
 */
async function createAgentPoolWithGpumig() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const parameters: AgentPool = {
    count: 3,
    gpuInstanceProfile: "MIG2g",
    kubeletConfig: {
      allowedUnsafeSysctls: ["kernel.msg*", "net.core.somaxconn"],
      cpuCfsQuota: true,
      cpuCfsQuotaPeriod: "200ms",
      cpuManagerPolicy: "static",
      failSwapOn: false,
      imageGcHighThreshold: 90,
      imageGcLowThreshold: 70,
      topologyManagerPolicy: "best-effort"
    },
    linuxOSConfig: {
      swapFileSizeMB: 1500,
      sysctls: {
        kernelThreadsMax: 99999,
        netCoreWmemDefault: 12345,
        netIpv4IpLocalPortRange: "20000 60000",
        netIpv4TcpTwReuse: true
      },
      transparentHugePageDefrag: "madvise",
      transparentHugePageEnabled: "always"
    },
    orchestratorVersion: "",
    osType: "Linux",
    vmSize: "Standard_ND96asr_v4"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName,
    parameters
  );
  console.log(result);
}

createAgentPoolWithGpumig().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates an agent pool in the specified managed cluster.
 *
 * @summary Creates or updates an agent pool in the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/AgentPoolsCreate_WasmWasi.json
 */
async function createAgentPoolWithKrustletAndTheWasiRuntime() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const parameters: AgentPool = {
    count: 3,
    mode: "User",
    orchestratorVersion: "",
    osDiskSizeGB: 64,
    osType: "Linux",
    vmSize: "Standard_DS2_v2",
    workloadRuntime: "WasmWasi"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName,
    parameters
  );
  console.log(result);
}

createAgentPoolWithKrustletAndTheWasiRuntime().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates an agent pool in the specified managed cluster.
 *
 * @summary Creates or updates an agent pool in the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/AgentPoolsCreate_CustomNodeConfig.json
 */
async function createAgentPoolWithKubeletConfigAndLinuxOSConfig() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const parameters: AgentPool = {
    count: 3,
    kubeletConfig: {
      allowedUnsafeSysctls: ["kernel.msg*", "net.core.somaxconn"],
      cpuCfsQuota: true,
      cpuCfsQuotaPeriod: "200ms",
      cpuManagerPolicy: "static",
      failSwapOn: false,
      imageGcHighThreshold: 90,
      imageGcLowThreshold: 70,
      topologyManagerPolicy: "best-effort"
    },
    linuxOSConfig: {
      swapFileSizeMB: 1500,
      sysctls: {
        kernelThreadsMax: 99999,
        netCoreWmemDefault: 12345,
        netIpv4IpLocalPortRange: "20000 60000",
        netIpv4TcpTwReuse: true
      },
      transparentHugePageDefrag: "madvise",
      transparentHugePageEnabled: "always"
    },
    orchestratorVersion: "",
    osType: "Linux",
    vmSize: "Standard_DS2_v2"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName,
    parameters
  );
  console.log(result);
}

createAgentPoolWithKubeletConfigAndLinuxOSConfig().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates an agent pool in the specified managed cluster.
 *
 * @summary Creates or updates an agent pool in the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/AgentPoolsCreate_MessageOfTheDay.json
 */
async function createAgentPoolWithMessageOfTheDay() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const parameters: AgentPool = {
    count: 3,
    messageOfTheDay: "Zm9vCg==",
    mode: "User",
    orchestratorVersion: "",
    osDiskSizeGB: 64,
    osType: "Linux",
    vmSize: "Standard_DS2_v2"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName,
    parameters
  );
  console.log(result);
}

createAgentPoolWithMessageOfTheDay().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates an agent pool in the specified managed cluster.
 *
 * @summary Creates or updates an agent pool in the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/AgentPoolsCreate_OSSKU.json
 */
async function createAgentPoolWithOssku() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const parameters: AgentPool = {
    count: 3,
    kubeletConfig: {
      allowedUnsafeSysctls: ["kernel.msg*", "net.core.somaxconn"],
      cpuCfsQuota: true,
      cpuCfsQuotaPeriod: "200ms",
      cpuManagerPolicy: "static",
      failSwapOn: false,
      imageGcHighThreshold: 90,
      imageGcLowThreshold: 70,
      topologyManagerPolicy: "best-effort"
    },
    linuxOSConfig: {
      swapFileSizeMB: 1500,
      sysctls: {
        kernelThreadsMax: 99999,
        netCoreWmemDefault: 12345,
        netIpv4IpLocalPortRange: "20000 60000",
        netIpv4TcpTwReuse: true
      },
      transparentHugePageDefrag: "madvise",
      transparentHugePageEnabled: "always"
    },
    orchestratorVersion: "",
    osSKU: "CBLMariner",
    osType: "Linux",
    vmSize: "Standard_DS2_v2"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName,
    parameters
  );
  console.log(result);
}

createAgentPoolWithOssku().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates an agent pool in the specified managed cluster.
 *
 * @summary Creates or updates an agent pool in the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/AgentPoolsCreate_PPG.json
 */
async function createAgentPoolWithPpg() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const parameters: AgentPool = {
    count: 3,
    orchestratorVersion: "",
    osType: "Linux",
    proximityPlacementGroupID:
      "/subscriptions/subid1/resourcegroups/rg1/providers//Microsoft.Compute/proximityPlacementGroups/ppg1",
    vmSize: "Standard_DS2_v2"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName,
    parameters
  );
  console.log(result);
}

createAgentPoolWithPpg().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates an agent pool in the specified managed cluster.
 *
 * @summary Creates or updates an agent pool in the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/AgentPoolsCreate_EnableUltraSSD.json
 */
async function createAgentPoolWithUltraSsdEnabled() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const parameters: AgentPool = {
    count: 3,
    enableUltraSSD: true,
    orchestratorVersion: "",
    osType: "Linux",
    vmSize: "Standard_DS2_v2"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName,
    parameters
  );
  console.log(result);
}

createAgentPoolWithUltraSsdEnabled().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates an agent pool in the specified managed cluster.
 *
 * @summary Creates or updates an agent pool in the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/AgentPoolsCreate_WindowsOSSKU.json
 */
async function createAgentPoolWithWindowsOssku() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "wnp2";
  const parameters: AgentPool = {
    count: 3,
    orchestratorVersion: "1.23.3",
    osSKU: "Windows2022",
    osType: "Windows",
    vmSize: "Standard_D4s_v3"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName,
    parameters
  );
  console.log(result);
}

createAgentPoolWithWindowsOssku().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates an agent pool in the specified managed cluster.
 *
 * @summary Creates or updates an agent pool in the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/AgentPoolsCreate_Spot.json
 */
async function createSpotAgentPool() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const parameters: AgentPool = {
    count: 3,
    nodeLabels: { key1: "val1" },
    nodeTaints: ["Key1=Value1:NoSchedule"],
    orchestratorVersion: "",
    osType: "Linux",
    scaleSetEvictionPolicy: "Delete",
    scaleSetPriority: "Spot",
    tags: { name1: "val1" },
    vmSize: "Standard_DS1_v2"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName,
    parameters
  );
  console.log(result);
}

createSpotAgentPool().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates an agent pool in the specified managed cluster.
 *
 * @summary Creates or updates an agent pool in the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/AgentPoolsCreate_Update.json
 */
async function createOrUpdateAgentPool() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const parameters: AgentPool = {
    count: 3,
    mode: "User",
    nodeLabels: { key1: "val1" },
    nodeTaints: ["Key1=Value1:NoSchedule"],
    orchestratorVersion: "",
    osType: "Linux",
    scaleSetEvictionPolicy: "Delete",
    scaleSetPriority: "Spot",
    tags: { name1: "val1" },
    vmSize: "Standard_DS1_v2"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName,
    parameters
  );
  console.log(result);
}

createOrUpdateAgentPool().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates an agent pool in the specified managed cluster.
 *
 * @summary Creates or updates an agent pool in the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/AgentPools_Start.json
 */
async function startAgentPool() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const parameters: AgentPool = { powerState: { code: "Running" } };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName,
    parameters
  );
  console.log(result);
}

startAgentPool().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates an agent pool in the specified managed cluster.
 *
 * @summary Creates or updates an agent pool in the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/AgentPools_Stop.json
 */
async function stopAgentPool() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const parameters: AgentPool = { powerState: { code: "Stopped" } };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName,
    parameters
  );
  console.log(result);
}

stopAgentPool().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates an agent pool in the specified managed cluster.
 *
 * @summary Creates or updates an agent pool in the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/AgentPools_Update.json
 */
async function updateAgentPool() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const parameters: AgentPool = {
    count: 3,
    enableAutoScaling: true,
    maxCount: 2,
    minCount: 2,
    nodeTaints: ["Key1=Value1:NoSchedule"],
    orchestratorVersion: "",
    osType: "Linux",
    scaleSetEvictionPolicy: "Delete",
    scaleSetPriority: "Spot",
    vmSize: "Standard_DS1_v2"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName,
    parameters
  );
  console.log(result);
}

updateAgentPool().catch(console.error);
