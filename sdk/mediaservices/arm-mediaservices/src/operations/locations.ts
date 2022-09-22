/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Locations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMediaServices } from "../azureMediaServices";
import {
  CheckNameAvailabilityInput,
  LocationsCheckNameAvailabilityOptionalParams,
  LocationsCheckNameAvailabilityResponse
} from "../models";

/** Class containing Locations operations. */
export class LocationsImpl implements Locations {
  private readonly client: AzureMediaServices;

  /**
   * Initialize a new instance of the class Locations class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMediaServices) {
    this.client = client;
  }

  /**
   * Checks whether the Media Service resource name is available.
   * @param locationName Location name.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  checkNameAvailability(
    locationName: string,
    parameters: CheckNameAvailabilityInput,
    options?: LocationsCheckNameAvailabilityOptionalParams
  ): Promise<LocationsCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { locationName, parameters, options },
      checkNameAvailabilityOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Media/locations/{locationName}/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EntityNameAvailabilityCheckOutput
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
