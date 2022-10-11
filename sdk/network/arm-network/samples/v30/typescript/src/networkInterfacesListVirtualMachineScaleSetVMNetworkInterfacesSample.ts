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
 * This sample demonstrates how to Gets information about all network interfaces in a virtual machine in a virtual machine scale set.
 *
 * @summary Gets information about all network interfaces in a virtual machine in a virtual machine scale set.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/VmssVmNetworkInterfaceList.json
 */
async function listVirtualMachineScaleSetVMNetworkInterfaces() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const virtualMachineScaleSetName = "vmss1";
  const virtualmachineIndex = "1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.networkInterfaces.listVirtualMachineScaleSetVMNetworkInterfaces(
    resourceGroupName,
    virtualMachineScaleSetName,
    virtualmachineIndex
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listVirtualMachineScaleSetVMNetworkInterfaces().catch(console.error);
