/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { IntegrationAccountMaps } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { LogicManagementClient } from "../logicManagementClient";
import {
  IntegrationAccountMap,
  IntegrationAccountMapsListNextOptionalParams,
  IntegrationAccountMapsListOptionalParams,
  IntegrationAccountMapsListResponse,
  IntegrationAccountMapsGetOptionalParams,
  IntegrationAccountMapsGetResponse,
  IntegrationAccountMapsCreateOrUpdateOptionalParams,
  IntegrationAccountMapsCreateOrUpdateResponse,
  IntegrationAccountMapsDeleteOptionalParams,
  GetCallbackUrlParameters,
  IntegrationAccountMapsListContentCallbackUrlOptionalParams,
  IntegrationAccountMapsListContentCallbackUrlResponse,
  IntegrationAccountMapsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing IntegrationAccountMaps operations. */
export class IntegrationAccountMapsImpl implements IntegrationAccountMaps {
  private readonly client: LogicManagementClient;

  /**
   * Initialize a new instance of the class IntegrationAccountMaps class.
   * @param client Reference to the service client
   */
  constructor(client: LogicManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of integration account maps.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    integrationAccountName: string,
    options?: IntegrationAccountMapsListOptionalParams
  ): PagedAsyncIterableIterator<IntegrationAccountMap> {
    const iter = this.listPagingAll(
      resourceGroupName,
      integrationAccountName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(
          resourceGroupName,
          integrationAccountName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    integrationAccountName: string,
    options?: IntegrationAccountMapsListOptionalParams
  ): AsyncIterableIterator<IntegrationAccountMap[]> {
    let result = await this._list(
      resourceGroupName,
      integrationAccountName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        integrationAccountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    integrationAccountName: string,
    options?: IntegrationAccountMapsListOptionalParams
  ): AsyncIterableIterator<IntegrationAccountMap> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      integrationAccountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of integration account maps.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    integrationAccountName: string,
    options?: IntegrationAccountMapsListOptionalParams
  ): Promise<IntegrationAccountMapsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, integrationAccountName, options },
      listOperationSpec
    );
  }

  /**
   * Gets an integration account map.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param mapName The integration account map name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    integrationAccountName: string,
    mapName: string,
    options?: IntegrationAccountMapsGetOptionalParams
  ): Promise<IntegrationAccountMapsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, integrationAccountName, mapName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates an integration account map. If the map is larger than 4 MB, you need to store the
   * map in an Azure blob and use the blob's Shared Access Signature (SAS) URL as the 'contentLink'
   * property value.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param mapName The integration account map name.
   * @param map The integration account map.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    integrationAccountName: string,
    mapName: string,
    map: IntegrationAccountMap,
    options?: IntegrationAccountMapsCreateOrUpdateOptionalParams
  ): Promise<IntegrationAccountMapsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, integrationAccountName, mapName, map, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes an integration account map.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param mapName The integration account map name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    integrationAccountName: string,
    mapName: string,
    options?: IntegrationAccountMapsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, integrationAccountName, mapName, options },
      deleteOperationSpec
    );
  }

  /**
   * Get the content callback url.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param mapName The integration account map name.
   * @param listContentCallbackUrl The callback url parameters.
   * @param options The options parameters.
   */
  listContentCallbackUrl(
    resourceGroupName: string,
    integrationAccountName: string,
    mapName: string,
    listContentCallbackUrl: GetCallbackUrlParameters,
    options?: IntegrationAccountMapsListContentCallbackUrlOptionalParams
  ): Promise<IntegrationAccountMapsListContentCallbackUrlResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        mapName,
        listContentCallbackUrl,
        options
      },
      listContentCallbackUrlOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    integrationAccountName: string,
    nextLink: string,
    options?: IntegrationAccountMapsListNextOptionalParams
  ): Promise<IntegrationAccountMapsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, integrationAccountName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountMapListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps/{mapName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountMap
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName,
    Parameters.mapName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps/{mapName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountMap
    },
    201: {
      bodyMapper: Mappers.IntegrationAccountMap
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.map,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName,
    Parameters.mapName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps/{mapName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName,
    Parameters.mapName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listContentCallbackUrlOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps/{mapName}/listContentCallbackUrl",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowTriggerCallbackUrl
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.listContentCallbackUrl,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName,
    Parameters.mapName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountMapListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.integrationAccountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
