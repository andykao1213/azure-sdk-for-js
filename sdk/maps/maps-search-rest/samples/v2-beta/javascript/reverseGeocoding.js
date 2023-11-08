// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const MapsSearch = require("@azure-rest/maps-search").default,
  { isUnexpected } = require("@azure-rest/maps-search");
const { AzureKeyCredential } = require("@azure/core-auth");
require("dotenv").config();

/**
 * @summary This sample demonstrates how to reverse a geocode to an address.
 */
async function main() {
  /**
   * Azure Maps supports two ways to authenticate requests:
   * - Shared Key authentication (subscription-key)
   * - Azure Active Directory (Azure AD) authentication
   *
   * In this sample you can put MAPS_SUBSCRIPTION_KEY into .env file to use the first approach or populate
   * the three AZURE_CLIENT_ID, AZURE_CLIENT_SECRET & AZURE_TENANT_ID variables for trying out AAD auth.
   *
   * More info is available at https://docs.microsoft.com/en-us/azure/azure-maps/azure-maps-authentication.
   */
  /** Shared Key authentication (subscription-key) */
  const subscriptionKey = process.env.MAPS_SUBSCRIPTION_KEY || "";
  const credential = new AzureKeyCredential(subscriptionKey);
  const client = MapsSearch(credential);

  /** Azure Active Directory (Azure AD) authentication */
  // const credential = new DefaultAzureCredential();
  // const mapsClientId = process.env.MAPS_RESOURCE_CLIENT_ID || "";
  // const client = MapsSearch(credential, mapsClientId);

  /** Make the request. */
  const response = await client.path("/reverseGeocode").get({
    queryParameters: { coordinates: [-121.89, 37.337] },
  });

  /** Handle error response. */
  if (isUnexpected(response)) {
    throw response.body.error;
  }

  if (!response.body.features || response.body.features.length === 0) {
    console.log("No results found.");
  } else {
    /** Log the response body. */
    response.body.features.forEach((feature) => {
      if (feature.properties?.address?.formattedAddress) {
        console.log(feature.properties.address.formattedAddress);
      } else {
        console.log("No address found.");
      }
    });
  }
}

main().catch(console.error);
