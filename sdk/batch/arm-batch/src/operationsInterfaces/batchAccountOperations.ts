/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  BatchAccount,
  BatchAccountListOptionalParams,
  BatchAccountListByResourceGroupOptionalParams,
  DetectorResponse,
  BatchAccountListDetectorsOptionalParams,
  OutboundEnvironmentEndpoint,
  BatchAccountListOutboundNetworkDependenciesEndpointsOptionalParams,
  BatchAccountCreateParameters,
  BatchAccountCreateOptionalParams,
  BatchAccountCreateResponse,
  BatchAccountUpdateParameters,
  BatchAccountUpdateOptionalParams,
  BatchAccountUpdateResponse,
  BatchAccountDeleteOptionalParams,
  BatchAccountGetOptionalParams,
  BatchAccountGetResponse,
  BatchAccountSynchronizeAutoStorageKeysOptionalParams,
  BatchAccountRegenerateKeyParameters,
  BatchAccountRegenerateKeyOptionalParams,
  BatchAccountRegenerateKeyResponse,
  BatchAccountGetKeysOptionalParams,
  BatchAccountGetKeysResponse,
  BatchAccountGetDetectorOptionalParams,
  BatchAccountGetDetectorResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a BatchAccountOperations. */
export interface BatchAccountOperations {
  /**
   * Gets information about the Batch accounts associated with the subscription.
   * @param options The options parameters.
   */
  list(
    options?: BatchAccountListOptionalParams,
  ): PagedAsyncIterableIterator<BatchAccount>;
  /**
   * Gets information about the Batch accounts associated with the specified resource group.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: BatchAccountListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<BatchAccount>;
  /**
   * Gets information about the detectors available for a given Batch account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The options parameters.
   */
  listDetectors(
    resourceGroupName: string,
    accountName: string,
    options?: BatchAccountListDetectorsOptionalParams,
  ): PagedAsyncIterableIterator<DetectorResponse>;
  /**
   * Lists the endpoints that a Batch Compute Node under this Batch Account may call as part of Batch
   * service administration. If you are deploying a Pool inside of a virtual network that you specify,
   * you must make sure your network allows outbound access to these endpoints. Failure to allow access
   * to these endpoints may cause Batch to mark the affected nodes as unusable. For more information
   * about creating a pool inside of a virtual network, see
   * https://docs.microsoft.com/en-us/azure/batch/batch-virtual-network.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The options parameters.
   */
  listOutboundNetworkDependenciesEndpoints(
    resourceGroupName: string,
    accountName: string,
    options?: BatchAccountListOutboundNetworkDependenciesEndpointsOptionalParams,
  ): PagedAsyncIterableIterator<OutboundEnvironmentEndpoint>;
  /**
   * Creates a new Batch account with the specified parameters. Existing accounts cannot be updated with
   * this API and should instead be updated with the Update Batch Account API.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName A name for the Batch account which must be unique within the region. Batch
   *                    account names must be between 3 and 24 characters in length and must use only numbers and lowercase
   *                    letters. This name is used as part of the DNS name that is used to access the Batch service in the
   *                    region in which the account is created. For example: http://accountname.region.batch.azure.com/.
   * @param parameters Additional parameters for account creation.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    accountName: string,
    parameters: BatchAccountCreateParameters,
    options?: BatchAccountCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BatchAccountCreateResponse>,
      BatchAccountCreateResponse
    >
  >;
  /**
   * Creates a new Batch account with the specified parameters. Existing accounts cannot be updated with
   * this API and should instead be updated with the Update Batch Account API.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName A name for the Batch account which must be unique within the region. Batch
   *                    account names must be between 3 and 24 characters in length and must use only numbers and lowercase
   *                    letters. This name is used as part of the DNS name that is used to access the Batch service in the
   *                    region in which the account is created. For example: http://accountname.region.batch.azure.com/.
   * @param parameters Additional parameters for account creation.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    accountName: string,
    parameters: BatchAccountCreateParameters,
    options?: BatchAccountCreateOptionalParams,
  ): Promise<BatchAccountCreateResponse>;
  /**
   * Updates the properties of an existing Batch account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param parameters Additional parameters for account update.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    parameters: BatchAccountUpdateParameters,
    options?: BatchAccountUpdateOptionalParams,
  ): Promise<BatchAccountUpdateResponse>;
  /**
   * Deletes the specified Batch account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    accountName: string,
    options?: BatchAccountDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes the specified Batch account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    options?: BatchAccountDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Gets information about the specified Batch account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    options?: BatchAccountGetOptionalParams,
  ): Promise<BatchAccountGetResponse>;
  /**
   * Synchronizes access keys for the auto-storage account configured for the specified Batch account,
   * only if storage key authentication is being used.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The options parameters.
   */
  synchronizeAutoStorageKeys(
    resourceGroupName: string,
    accountName: string,
    options?: BatchAccountSynchronizeAutoStorageKeysOptionalParams,
  ): Promise<void>;
  /**
   * This operation applies only to Batch accounts with allowedAuthenticationModes containing
   * 'SharedKey'. If the Batch account doesn't contain 'SharedKey' in its allowedAuthenticationMode,
   * clients cannot use shared keys to authenticate, and must use another allowedAuthenticationModes
   * instead. In this case, regenerating the keys will fail.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param parameters The type of key to regenerate.
   * @param options The options parameters.
   */
  regenerateKey(
    resourceGroupName: string,
    accountName: string,
    parameters: BatchAccountRegenerateKeyParameters,
    options?: BatchAccountRegenerateKeyOptionalParams,
  ): Promise<BatchAccountRegenerateKeyResponse>;
  /**
   * This operation applies only to Batch accounts with allowedAuthenticationModes containing
   * 'SharedKey'. If the Batch account doesn't contain 'SharedKey' in its allowedAuthenticationMode,
   * clients cannot use shared keys to authenticate, and must use another allowedAuthenticationModes
   * instead. In this case, getting the keys will fail.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The options parameters.
   */
  getKeys(
    resourceGroupName: string,
    accountName: string,
    options?: BatchAccountGetKeysOptionalParams,
  ): Promise<BatchAccountGetKeysResponse>;
  /**
   * Gets information about the given detector for a given Batch account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param detectorId The name of the detector.
   * @param options The options parameters.
   */
  getDetector(
    resourceGroupName: string,
    accountName: string,
    detectorId: string,
    options?: BatchAccountGetDetectorOptionalParams,
  ): Promise<BatchAccountGetDetectorResponse>;
}
