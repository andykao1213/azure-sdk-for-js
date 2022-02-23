/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { GeneratedClientOptionalParams } from "./models";

/** @internal */
export class GeneratedClientContext extends coreClient.ServiceClient {
  $host: string;
  clientId?: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the GeneratedClientContext class.
   * @param options The parameter options
   */
  constructor(options?: GeneratedClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: GeneratedClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-maps-route/1.0.0-beta.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "https://atlas.microsoft.com"
    };
    super(optionsWithDefaults);

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://atlas.microsoft.com";
    this.apiVersion = options.apiVersion || "1.0";
  }
}
