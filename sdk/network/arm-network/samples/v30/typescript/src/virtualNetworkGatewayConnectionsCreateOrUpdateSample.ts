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
  VirtualNetworkGatewayConnection,
  NetworkManagementClient
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates a virtual network gateway connection in the specified resource group.
 *
 * @summary Creates or updates a virtual network gateway connection in the specified resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/VirtualNetworkGatewayConnectionCreate.json
 */
async function createVirtualNetworkGatewayConnectionS2S() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const virtualNetworkGatewayConnectionName = "connS2S";
  const parameters: VirtualNetworkGatewayConnection = {
    connectionMode: "Default",
    connectionProtocol: "IKEv2",
    connectionType: "IPsec",
    dpdTimeoutSeconds: 30,
    egressNatRules: [
      {
        id:
          "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworkGateways/vpngw/natRules/natRule2"
      }
    ],
    enableBgp: false,
    gatewayCustomBgpIpAddresses: [
      {
        customBgpIpAddress: "169.254.21.1",
        ipConfigurationId:
          "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworkGateways/vpngw/ipConfigurations/default"
      },
      {
        customBgpIpAddress: "169.254.21.3",
        ipConfigurationId:
          "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworkGateways/vpngw/ipConfigurations/ActiveActive"
      }
    ],
    ingressNatRules: [
      {
        id:
          "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworkGateways/vpngw/natRules/natRule1"
      }
    ],
    ipsecPolicies: [],
    localNetworkGateway2: {
      gatewayIpAddress: "x.x.x.x",
      id:
        "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/localNetworkGateways/localgw",
      localNetworkAddressSpace: { addressPrefixes: ["10.1.0.0/16"] },
      location: "centralus",
      tags: {}
    },
    location: "centralus",
    routingWeight: 0,
    sharedKey: "Abc123",
    trafficSelectorPolicies: [],
    usePolicyBasedTrafficSelectors: false,
    virtualNetworkGateway1: {
      active: false,
      bgpSettings: {
        asn: 65514,
        bgpPeeringAddress: "10.0.1.30",
        peerWeight: 0
      },
      enableBgp: false,
      gatewayType: "Vpn",
      id:
        "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworkGateways/vpngw",
      ipConfigurations: [
        {
          name: "gwipconfig1",
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworkGateways/vpngw/ipConfigurations/gwipconfig1",
          privateIPAllocationMethod: "Dynamic",
          publicIPAddress: {
            id:
              "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/gwpip"
          },
          subnet: {
            id:
              "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/GatewaySubnet"
          }
        }
      ],
      location: "centralus",
      sku: { name: "VpnGw1", tier: "VpnGw1" },
      tags: {},
      vpnType: "RouteBased"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkGatewayConnections.beginCreateOrUpdateAndWait(
    resourceGroupName,
    virtualNetworkGatewayConnectionName,
    parameters
  );
  console.log(result);
}

createVirtualNetworkGatewayConnectionS2S().catch(console.error);
