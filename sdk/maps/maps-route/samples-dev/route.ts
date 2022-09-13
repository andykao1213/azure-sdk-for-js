// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Demonstrates Route API usage. Simple queries are performed.
 */

import { DefaultAzureCredential } from "@azure/identity";
import { AzureKeyCredential } from "@azure/core-auth";
import {
  MapsRouteClient,
  RouteMatrixQuery,
  RouteDirectionParameters,
  RouteRangeBudget,
  RouteDirectionsRequest,
  KnownRouteType,
  KnownTravelMode,
  KnownVehicleLoadType,
} from "@azure/maps-route";
import * as dotenv from "dotenv";
dotenv.config();

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

async function main() {
  let client: MapsRouteClient;

  if (process.env.MAPS_SUBSCRIPTION_KEY) {
    // Use subscription key authentication
    const credential = new AzureKeyCredential(process.env.MAPS_SUBSCRIPTION_KEY);
    client = new MapsRouteClient(credential);
  } else {
    // Use Azure AD authentication
    if (process.env.MAPS_CLIENT_ID) {
      const credential = new DefaultAzureCredential();
      const mapsClientId = process.env.MAPS_CLIENT_ID;
      client = new MapsRouteClient(credential, mapsClientId);
    } else {
      throw Error("Cannot authenticate the client.");
    }
  }

  console.log(" --- Get route directions:");
  let getRouteDirectionsResult = await client.getRouteDirections(
    [
      [51.368752, -0.118332],
      [41.385426, -0.128929],
    ],
    {
      vehicleWidth: 2,
      vehicleHeight: 2,
      isCommercialVehicle: true,
      vehicleLoadType: KnownVehicleLoadType.USHazmatClass1,
      travelMode: "truck",
    }
  );
  console.log(getRouteDirectionsResult);

  console.log(" --- Get route directions with additional parameters:");
  const routeDirectionParameters: RouteDirectionParameters = {
    supportingPoints: {
      type: "GeometryCollection",
      geometries: [
        {
          type: "Point",
          coordinates: [13.42936, 52.5093],
        },
        {
          type: "Point",
          coordinates: [13.42859, 52.50844],
        },
      ],
    },
    avoidVignette: ["AUS", "CHE"],
    avoidAreas: {
      type: "MultiPolygon",
      coordinates: [
        [
          [
            [-122.39456176757811, 47.489368981370724],
            [-122.00454711914061, 47.489368981370724],
            [-122.00454711914061, 47.65151268066222],
            [-122.39456176757811, 47.65151268066222],
            [-122.39456176757811, 47.489368981370724],
          ],
        ],
        [
          [
            [100.0, 0.0],
            [101.0, 0.0],
            [101.0, 1.0],
            [100.0, 1.0],
            [100.0, 0.0],
          ],
        ],
      ],
    },
  };

  getRouteDirectionsResult = await client.getRouteDirectionsWithAdditionalParameters(
    [
      [52.50931, 13.42936],
      [52.50274, 13.43872],
    ],
    routeDirectionParameters
  );
  console.log(getRouteDirectionsResult);

  console.log(" --- Get route range:");
  const routeRangeBudget: RouteRangeBudget = { timeBudgetInSeconds: 6000 };
  const routeRangeResult = await client.getRouteRange([50.97452, 5.86605], routeRangeBudget);
  console.log(routeRangeResult);

  console.log(" --- Request route directions batch:");
  const routeDirectionsRequests: RouteDirectionsRequest[] = [
    {
      routePoints: [
        [47.639987, -122.128384],
        [47.621252, -122.184408],
        [47.596437, -122.332],
      ],
      options: {
        routeType: KnownRouteType.Fastest,
        travelMode: KnownTravelMode.Car,
        maxAlternatives: 99,
      },
    },
    {
      routePoints: [
        [47.620659, -122.348934],
        [47.610101, -122.342015],
      ],
      options: {
        routeType: KnownRouteType.Economy,
        travelMode: KnownTravelMode.Bicycle,
        useTrafficData: false,
      },
    },
    {
      routePoints: [
        [40.759856, -73.985108],
        [40.771136, -73.973506],
      ],
      options: { routeType: KnownRouteType.Shortest, travelMode: KnownTravelMode.Pedestrian },
    },
  ];
  const routeDirectionPoller = await client.beginRequestRouteDirectionsBatch(
    routeDirectionsRequests
  );

  const routeDirectionsBatchResults = await routeDirectionPoller.pollUntilDone();
  console.log(routeDirectionsBatchResults.batchItems.map((item) => item.statusCode));

  const serializedState = routeDirectionPoller.toString();
  const rehydratedPoller = await client.resumeRequestRouteDirectionsBatch(serializedState, {});
  const rehydratedResults = await rehydratedPoller.pollUntilDone();
  console.log(rehydratedResults);

  console.log(" --- Post route matrix:");
  const routeMatrixQuery: RouteMatrixQuery = {
    origins: {
      type: "MultiPoint",
      coordinates: [
        [4.85106, 52.36006],
        [4.85056, 52.36187],
      ],
    },
    destinations: {
      type: "MultiPoint",
      coordinates: [
        [4.85003, 52.36241],
        [13.42937, 52.50931],
      ],
    },
  };

  const routeMatrixPoller = await client.beginRequestRouteMatrix(routeMatrixQuery);
  const routeMatrixResult = await routeMatrixPoller.pollUntilDone();
  console.log(routeMatrixResult.matrix);
}

main();
