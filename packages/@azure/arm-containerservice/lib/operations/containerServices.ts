/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/containerServicesMappers";
import * as Parameters from "../models/parameters";
import { ContainerServiceClientContext } from "../containerServiceClientContext";

/** Class representing a ContainerServices. */
export class ContainerServices {
  private readonly client: ContainerServiceClientContext;

  /**
   * Create a ContainerServices.
   * @param {ContainerServiceClientContext} client Reference to the service client.
   */
  constructor(client: ContainerServiceClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of container services in the specified subscription. The operation returns
   * properties of each container service including state, orchestrator, number of masters and
   * agents, and FQDNs of masters and agents.
   * @summary Gets a list of container services in the specified subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainerServicesListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.ContainerServicesListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ContainerServiceListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ContainerServiceListResult>): void;
  list(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ContainerServiceListResult>): Promise<Models.ContainerServicesListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ContainerServicesListResponse>;
  }

  /**
   * Creates or updates a container service with the specified configuration of orchestrator,
   * masters, and agents.
   * @summary Creates or updates a container service.
   * @param resourceGroupName The name of the resource group.
   * @param containerServiceName The name of the container service in the specified subscription and
   * resource group.
   * @param parameters Parameters supplied to the Create or Update a Container Service operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainerServicesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, containerServiceName: string, parameters: Models.ContainerService, options?: msRest.RequestOptionsBase): Promise<Models.ContainerServicesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,containerServiceName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ContainerServicesCreateOrUpdateResponse>;
  }

  /**
   * Gets the properties of the specified container service in the specified subscription and
   * resource group. The operation returns the properties including state, orchestrator, number of
   * masters and agents, and FQDNs of masters and agents.
   * @summary Gets the properties of the specified container service.
   * @param resourceGroupName The name of the resource group.
   * @param containerServiceName The name of the container service in the specified subscription and
   * resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainerServicesGetResponse>
   */
  get(resourceGroupName: string, containerServiceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ContainerServicesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param containerServiceName The name of the container service in the specified subscription and
   * resource group.
   * @param callback The callback
   */
  get(resourceGroupName: string, containerServiceName: string, callback: msRest.ServiceCallback<Models.ContainerService>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param containerServiceName The name of the container service in the specified subscription and
   * resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, containerServiceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ContainerService>): void;
  get(resourceGroupName: string, containerServiceName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ContainerService>): Promise<Models.ContainerServicesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        containerServiceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ContainerServicesGetResponse>;
  }

  /**
   * Deletes the specified container service in the specified subscription and resource group. The
   * operation does not delete other resources created as part of creating a container service,
   * including storage accounts, VMs, and availability sets. All the other resources created with the
   * container service are part of the same resource group and can be deleted individually.
   * @summary Deletes the specified container service.
   * @param resourceGroupName The name of the resource group.
   * @param containerServiceName The name of the container service in the specified subscription and
   * resource group.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, containerServiceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,containerServiceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets a list of container services in the specified subscription and resource group. The
   * operation returns properties of each container service including state, orchestrator, number of
   * masters and agents, and FQDNs of masters and agents.
   * @summary Gets a list of container services in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainerServicesListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ContainerServicesListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ContainerServiceListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ContainerServiceListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ContainerServiceListResult>): Promise<Models.ContainerServicesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.ContainerServicesListByResourceGroupResponse>;
  }

  /**
   * Gets a list of supported orchestrators in the specified subscription. The operation returns
   * properties of each orchestrator including verison and available upgrades.
   * @summary Gets a list of supported orchestrators in the specified subscription.
   * @param location The name of a supported Azure region.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainerServicesListOrchestratorsResponse>
   */
  listOrchestrators(location: string, options?: Models.ContainerServicesListOrchestratorsOptionalParams): Promise<Models.ContainerServicesListOrchestratorsResponse>;
  /**
   * @param location The name of a supported Azure region.
   * @param callback The callback
   */
  listOrchestrators(location: string, callback: msRest.ServiceCallback<Models.OrchestratorVersionProfileListResult>): void;
  /**
   * @param location The name of a supported Azure region.
   * @param options The optional parameters
   * @param callback The callback
   */
  listOrchestrators(location: string, options: Models.ContainerServicesListOrchestratorsOptionalParams, callback: msRest.ServiceCallback<Models.OrchestratorVersionProfileListResult>): void;
  listOrchestrators(location: string, options?: Models.ContainerServicesListOrchestratorsOptionalParams, callback?: msRest.ServiceCallback<Models.OrchestratorVersionProfileListResult>): Promise<Models.ContainerServicesListOrchestratorsResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        options
      },
      listOrchestratorsOperationSpec,
      callback) as Promise<Models.ContainerServicesListOrchestratorsResponse>;
  }

  /**
   * Creates or updates a container service with the specified configuration of orchestrator,
   * masters, and agents.
   * @summary Creates or updates a container service.
   * @param resourceGroupName The name of the resource group.
   * @param containerServiceName The name of the container service in the specified subscription and
   * resource group.
   * @param parameters Parameters supplied to the Create or Update a Container Service operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, containerServiceName: string, parameters: Models.ContainerService, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        containerServiceName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the specified container service in the specified subscription and resource group. The
   * operation does not delete other resources created as part of creating a container service,
   * including storage accounts, VMs, and availability sets. All the other resources created with the
   * container service are part of the same resource group and can be deleted individually.
   * @summary Deletes the specified container service.
   * @param resourceGroupName The name of the resource group.
   * @param containerServiceName The name of the container service in the specified subscription and
   * resource group.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, containerServiceName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        containerServiceName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Gets a list of container services in the specified subscription. The operation returns
   * properties of each container service including state, orchestrator, number of masters and
   * agents, and FQDNs of masters and agents.
   * @summary Gets a list of container services in the specified subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainerServicesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ContainerServicesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ContainerServiceListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ContainerServiceListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ContainerServiceListResult>): Promise<Models.ContainerServicesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ContainerServicesListNextResponse>;
  }

  /**
   * Gets a list of container services in the specified subscription and resource group. The
   * operation returns properties of each container service including state, orchestrator, number of
   * masters and agents, and FQDNs of masters and agents.
   * @summary Gets a list of container services in the specified resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainerServicesListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ContainerServicesListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ContainerServiceListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ContainerServiceListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ContainerServiceListResult>): Promise<Models.ContainerServicesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.ContainerServicesListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/containerServices",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ContainerServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices/{containerServiceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.containerServiceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ContainerService
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ContainerServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOrchestratorsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/locations/{location}/orchestrators",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.location
  ],
  queryParameters: [
    Parameters.apiVersion1,
    Parameters.resourceType
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OrchestratorVersionProfileListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices/{containerServiceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.containerServiceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ContainerService,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ContainerService
    },
    201: {
      bodyMapper: Mappers.ContainerService
    },
    202: {
      bodyMapper: Mappers.ContainerService
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices/{containerServiceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.containerServiceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ContainerServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ContainerServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
