/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const RouteMatrixQuery: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteMatrixQuery",
    modelProperties: {
      origins: {
        serializedName: "origins",
        type: {
          name: "Composite",
          className: "GeoJsonMultiPoint"
        }
      },
      destinations: {
        serializedName: "destinations",
        type: {
          name: "Composite",
          className: "GeoJsonMultiPoint"
        }
      }
    }
  }
};

export const GeoJsonObject: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeoJsonObject",
    uberParent: "GeoJsonObject",
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Point",
            "MultiPoint",
            "LineString",
            "MultiLineString",
            "Polygon",
            "MultiPolygon",
            "GeometryCollection",
            "Feature",
            "FeatureCollection"
          ]
        }
      }
    }
  }
};

export const GeoJsonMultiPointData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeoJsonMultiPointData",
    modelProperties: {
      coordinates: {
        serializedName: "coordinates",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Sequence",
              element: {
                type: {
                  name: "Number"
                }
              }
            }
          }
        }
      }
    }
  }
};

export const RouteMatrixResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteMatrixResult",
    modelProperties: {
      formatVersion: {
        serializedName: "formatVersion",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      matrix: {
        serializedName: "matrix",
        required: true,
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Sequence",
              element: {
                type: {
                  name: "Composite",
                  className: "RouteMatrix"
                }
              }
            }
          }
        }
      },
      summary: {
        serializedName: "summary",
        type: {
          name: "Composite",
          className: "RouteMatrixSummary"
        }
      }
    }
  }
};

export const RouteMatrix: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteMatrix",
    modelProperties: {
      statusCode: {
        serializedName: "statusCode",
        required: true,
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      routeLegSummary: {
        serializedName: "response.routeSummary",
        type: {
          name: "Composite",
          className: "RouteLegSummary"
        }
      }
    }
  }
};

export const RouteLegSummary: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteLegSummary",
    modelProperties: {
      lengthInMeters: {
        serializedName: "lengthInMeters",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      travelTimeInSeconds: {
        serializedName: "travelTimeInSeconds",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      trafficDelayInSeconds: {
        serializedName: "trafficDelayInSeconds",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      departureTime: {
        serializedName: "departureTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      arrivalTime: {
        serializedName: "arrivalTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      noTrafficTravelTimeInSeconds: {
        serializedName: "noTrafficTravelTimeInSeconds",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      historicTrafficTravelTimeInSeconds: {
        serializedName: "historicTrafficTravelTimeInSeconds",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      liveTrafficIncidentsTravelTimeInSeconds: {
        serializedName: "liveTrafficIncidentsTravelTimeInSeconds",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      fuelConsumptionInLiters: {
        serializedName: "fuelConsumptionInLiters",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      batteryConsumptionInKwH: {
        serializedName: "batteryConsumptionInkWh",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const RouteMatrixSummary: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteMatrixSummary",
    modelProperties: {
      successfulRoutes: {
        serializedName: "successfulRoutes",
        required: true,
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      totalRoutes: {
        serializedName: "totalRoutes",
        required: true,
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail"
        }
      }
    }
  }
};

export const ErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RouteDirections: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteDirections",
    modelProperties: {
      formatVersion: {
        serializedName: "formatVersion",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      routes: {
        serializedName: "routes",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Route"
            }
          }
        }
      },
      optimizedWaypoints: {
        serializedName: "optimizedWaypoints",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RouteOptimizedWaypoint"
            }
          }
        }
      },
      report: {
        serializedName: "report",
        type: {
          name: "Composite",
          className: "RouteReport"
        }
      }
    }
  }
};

export const Route: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Route",
    modelProperties: {
      summary: {
        serializedName: "summary",
        type: {
          name: "Composite",
          className: "RouteSummary"
        }
      },
      legs: {
        serializedName: "legs",
        required: true,
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RouteLeg"
            }
          }
        }
      },
      sections: {
        serializedName: "sections",
        required: true,
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RouteSection"
            }
          }
        }
      },
      guidance: {
        serializedName: "guidance",
        type: {
          name: "Composite",
          className: "RouteGuidance"
        }
      }
    }
  }
};

export const RouteSummary: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteSummary",
    modelProperties: {
      lengthInMeters: {
        serializedName: "lengthInMeters",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      travelTimeInSeconds: {
        serializedName: "travelTimeInSeconds",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      trafficDelayInSeconds: {
        serializedName: "trafficDelayInSeconds",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      departureTime: {
        serializedName: "departureTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      arrivalTime: {
        serializedName: "arrivalTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const RouteLeg: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteLeg",
    modelProperties: {
      summary: {
        serializedName: "summary",
        type: {
          name: "Composite",
          className: "RouteLegSummary"
        }
      },
      points: {
        serializedName: "points",
        required: true,
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LatLongPair"
            }
          }
        }
      }
    }
  }
};

export const LatLongPair: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LatLongPair",
    modelProperties: {
      latitude: {
        serializedName: "latitude",
        type: {
          name: "Number"
        }
      },
      longitude: {
        serializedName: "longitude",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const RouteSection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteSection",
    modelProperties: {
      startPointIndex: {
        serializedName: "startPointIndex",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      endPointIndex: {
        serializedName: "endPointIndex",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      sectionType: {
        serializedName: "sectionType",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      travelMode: {
        serializedName: "travelMode",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      simpleCategory: {
        serializedName: "simpleCategory",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      effectiveSpeedInKmh: {
        serializedName: "effectiveSpeedInKmh",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      delayInSeconds: {
        serializedName: "delayInSeconds",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      delayMagnitude: {
        serializedName: "magnitudeOfDelay",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tec: {
        serializedName: "tec",
        type: {
          name: "Composite",
          className: "RouteSectionTec"
        }
      }
    }
  }
};

export const RouteSectionTec: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteSectionTec",
    modelProperties: {
      effectCode: {
        serializedName: "effectCode",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      causes: {
        serializedName: "causes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RouteSectionTecCause"
            }
          }
        }
      }
    }
  }
};

export const RouteSectionTecCause: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteSectionTecCause",
    modelProperties: {
      mainCauseCode: {
        serializedName: "mainCauseCode",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      subCauseCode: {
        serializedName: "subCauseCode",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const RouteGuidance: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteGuidance",
    modelProperties: {
      instructions: {
        serializedName: "instructions",
        required: true,
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RouteInstruction"
            }
          }
        }
      },
      instructionGroups: {
        serializedName: "instructionGroups",
        required: true,
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RouteInstructionGroup"
            }
          }
        }
      }
    }
  }
};

export const RouteInstruction: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteInstruction",
    modelProperties: {
      routeOffsetInMeters: {
        serializedName: "routeOffsetInMeters",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      travelTimeInSeconds: {
        serializedName: "travelTimeInSeconds",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      point: {
        serializedName: "point",
        type: {
          name: "Composite",
          className: "LatLongPair"
        }
      },
      pointIndex: {
        serializedName: "pointIndex",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      instructionType: {
        serializedName: "instructionType",
        type: {
          name: "String"
        }
      },
      roadNumbers: {
        serializedName: "roadNumbers",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      exitNumber: {
        serializedName: "exitNumber",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      street: {
        serializedName: "street",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      signpostText: {
        serializedName: "signpostText",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      countryCode: {
        serializedName: "countryCode",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      stateCode: {
        serializedName: "stateCode",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      junctionType: {
        serializedName: "junctionType",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      turnAngleInDegrees: {
        serializedName: "turnAngleInDecimalDegrees",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      roundaboutExitNumber: {
        serializedName: "roundaboutExitNumber",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      possibleCombineWithNext: {
        serializedName: "possibleCombineWithNext",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      drivingSide: {
        serializedName: "drivingSide",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      maneuver: {
        serializedName: "maneuver",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      combinedMessage: {
        serializedName: "combinedMessage",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RouteInstructionGroup: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteInstructionGroup",
    modelProperties: {
      firstInstructionIndex: {
        serializedName: "firstInstructionIndex",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      lastInstructionIndex: {
        serializedName: "lastInstructionIndex",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      groupLengthInMeters: {
        serializedName: "groupLengthInMeters",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      groupMessage: {
        serializedName: "groupMessage",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RouteOptimizedWaypoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteOptimizedWaypoint",
    modelProperties: {
      providedIndex: {
        serializedName: "providedIndex",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      optimizedIndex: {
        serializedName: "optimizedIndex",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const RouteReport: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteReport",
    modelProperties: {
      effectiveSettings: {
        serializedName: "effectiveSettings",
        required: true,
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EffectiveSetting"
            }
          }
        }
      }
    }
  }
};

export const EffectiveSetting: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EffectiveSetting",
    modelProperties: {
      key: {
        serializedName: "key",
        required: true,
        readOnly: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RouteDirectionParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteDirectionParameters",
    modelProperties: {
      supportingPoints: {
        serializedName: "supportingPoints",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      avoidVignette: {
        serializedName: "avoidVignette",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      allowVignette: {
        serializedName: "allowVignette",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      avoidAreas: {
        serializedName: "avoidAreas",
        type: {
          name: "Composite",
          className: "GeoJsonMultiPolygon"
        }
      }
    }
  }
};

export const GeoJsonMultiPolygonData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeoJsonMultiPolygonData",
    modelProperties: {
      coordinates: {
        serializedName: "coordinates",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Sequence",
              element: {
                type: {
                  name: "Sequence",
                  element: {
                    type: {
                      name: "Sequence",
                      element: {
                        type: {
                          name: "Number"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

export const RouteRangeResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteRangeResult",
    modelProperties: {
      formatVersion: {
        serializedName: "formatVersion",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      reachableRange: {
        serializedName: "reachableRange",
        type: {
          name: "Composite",
          className: "RouteRange"
        }
      },
      report: {
        serializedName: "report",
        type: {
          name: "Composite",
          className: "RouteReport"
        }
      }
    }
  }
};

export const RouteRange: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteRange",
    modelProperties: {
      center: {
        serializedName: "center",
        type: {
          name: "Composite",
          className: "LatLongPair"
        }
      },
      boundary: {
        serializedName: "boundary",
        required: true,
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LatLongPair"
            }
          }
        }
      }
    }
  }
};

export const BatchRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchRequest",
    modelProperties: {
      batchItems: {
        serializedName: "batchItems",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BatchRequestItem"
            }
          }
        }
      }
    }
  }
};

export const BatchRequestItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchRequestItem",
    modelProperties: {
      query: {
        serializedName: "query",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BatchResultItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchResultItem",
    modelProperties: {
      statusCode: {
        serializedName: "statusCode",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const BatchResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchResult",
    modelProperties: {
      batchSummary: {
        serializedName: "summary",
        type: {
          name: "Composite",
          className: "BatchResultSummary"
        }
      }
    }
  }
};

export const BatchResultSummary: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchResultSummary",
    modelProperties: {
      successfulRequests: {
        serializedName: "successfulRequests",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      totalRequests: {
        serializedName: "totalRequests",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GeoJsonPointData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeoJsonPointData",
    modelProperties: {
      coordinates: {
        serializedName: "coordinates",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};

export const GeoJsonLineStringData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeoJsonLineStringData",
    modelProperties: {
      coordinates: {
        serializedName: "coordinates",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Sequence",
              element: {
                type: {
                  name: "Number"
                }
              }
            }
          }
        }
      }
    }
  }
};

export const GeoJsonMultiLineStringData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeoJsonMultiLineStringData",
    modelProperties: {
      coordinates: {
        serializedName: "coordinates",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Sequence",
              element: {
                type: {
                  name: "Sequence",
                  element: {
                    type: {
                      name: "Number"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

export const GeoJsonPolygonData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeoJsonPolygonData",
    modelProperties: {
      coordinates: {
        serializedName: "coordinates",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Sequence",
              element: {
                type: {
                  name: "Sequence",
                  element: {
                    type: {
                      name: "Number"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

export const GeoJsonGeometryCollectionData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeoJsonGeometryCollectionData",
    modelProperties: {
      geometries: {
        serializedName: "geometries",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GeoJsonGeometry"
            }
          }
        }
      }
    }
  }
};

export const GeoJsonFeatureData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeoJsonFeatureData",
    modelProperties: {
      geometry: {
        serializedName: "geometry",
        type: {
          name: "Composite",
          className: "GeoJsonGeometry"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      featureType: {
        serializedName: "featureType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeoJsonFeatureCollectionData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeoJsonFeatureCollectionData",
    modelProperties: {
      features: {
        serializedName: "features",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GeoJsonFeature"
            }
          }
        }
      }
    }
  }
};

export const GeoJsonGeometry: coreClient.CompositeMapper = {
  serializedName: "GeoJsonGeometry",
  type: {
    name: "Composite",
    className: "GeoJsonGeometry",
    uberParent: "GeoJsonObject",
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      ...GeoJsonObject.type.modelProperties
    }
  }
};

export const GeoJsonFeature: coreClient.CompositeMapper = {
  serializedName: "Feature",
  type: {
    name: "Composite",
    className: "GeoJsonFeature",
    uberParent: "GeoJsonObject",
    polymorphicDiscriminator: GeoJsonObject.type.polymorphicDiscriminator,
    modelProperties: {
      ...GeoJsonObject.type.modelProperties,
      ...GeoJsonFeatureData.type.modelProperties
    }
  }
};

export const GeoJsonFeatureCollection: coreClient.CompositeMapper = {
  serializedName: "FeatureCollection",
  type: {
    name: "Composite",
    className: "GeoJsonFeatureCollection",
    uberParent: "GeoJsonObject",
    polymorphicDiscriminator: GeoJsonObject.type.polymorphicDiscriminator,
    modelProperties: {
      ...GeoJsonObject.type.modelProperties,
      ...GeoJsonFeatureCollectionData.type.modelProperties
    }
  }
};

export const GeoJsonMultiPoint: coreClient.CompositeMapper = {
  serializedName: "MultiPoint",
  type: {
    name: "Composite",
    className: "GeoJsonMultiPoint",
    uberParent: "GeoJsonMultiPointData",
    polymorphicDiscriminator:
      GeoJsonMultiPointData.type.polymorphicDiscriminator,
    modelProperties: {
      ...GeoJsonGeometry.type.modelProperties,
      ...GeoJsonMultiPointData.type.modelProperties
    }
  }
};

export const RouteDirectionsBatchItemResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteDirectionsBatchItemResponse",
    modelProperties: {
      ...RouteDirections.type.modelProperties,
      ...ErrorResponse.type.modelProperties
    }
  }
};

export const GeoJsonMultiPolygon: coreClient.CompositeMapper = {
  serializedName: "MultiPolygon",
  type: {
    name: "Composite",
    className: "GeoJsonMultiPolygon",
    uberParent: "GeoJsonMultiPolygonData",
    polymorphicDiscriminator:
      GeoJsonMultiPolygonData.type.polymorphicDiscriminator,
    modelProperties: {
      ...GeoJsonGeometry.type.modelProperties,
      ...GeoJsonMultiPolygonData.type.modelProperties
    }
  }
};

export const RouteDirectionsBatchItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteDirectionsBatchItem",
    modelProperties: {
      ...BatchResultItem.type.modelProperties,
      response: {
        serializedName: "response",
        type: {
          name: "Composite",
          className: "RouteDirectionsBatchItemResponse"
        }
      }
    }
  }
};

export const RouteDirectionsBatchResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteDirectionsBatchResult",
    modelProperties: {
      ...BatchResult.type.modelProperties,
      batchItems: {
        serializedName: "batchItems",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RouteDirectionsBatchItem"
            }
          }
        }
      }
    }
  }
};

export const GeoJsonPoint: coreClient.CompositeMapper = {
  serializedName: "Point",
  type: {
    name: "Composite",
    className: "GeoJsonPoint",
    uberParent: "GeoJsonPointData",
    polymorphicDiscriminator: GeoJsonPointData.type.polymorphicDiscriminator,
    modelProperties: {
      ...GeoJsonGeometry.type.modelProperties,
      ...GeoJsonPointData.type.modelProperties
    }
  }
};

export const GeoJsonLineString: coreClient.CompositeMapper = {
  serializedName: "LineString",
  type: {
    name: "Composite",
    className: "GeoJsonLineString",
    uberParent: "GeoJsonLineStringData",
    polymorphicDiscriminator:
      GeoJsonLineStringData.type.polymorphicDiscriminator,
    modelProperties: {
      ...GeoJsonGeometry.type.modelProperties,
      ...GeoJsonLineStringData.type.modelProperties
    }
  }
};

export const GeoJsonMultiLineString: coreClient.CompositeMapper = {
  serializedName: "MultiLineString",
  type: {
    name: "Composite",
    className: "GeoJsonMultiLineString",
    uberParent: "GeoJsonMultiLineStringData",
    polymorphicDiscriminator:
      GeoJsonMultiLineStringData.type.polymorphicDiscriminator,
    modelProperties: {
      ...GeoJsonGeometry.type.modelProperties,
      ...GeoJsonMultiLineStringData.type.modelProperties
    }
  }
};

export const GeoJsonPolygon: coreClient.CompositeMapper = {
  serializedName: "Polygon",
  type: {
    name: "Composite",
    className: "GeoJsonPolygon",
    uberParent: "GeoJsonPolygonData",
    polymorphicDiscriminator: GeoJsonPolygonData.type.polymorphicDiscriminator,
    modelProperties: {
      ...GeoJsonGeometry.type.modelProperties,
      ...GeoJsonPolygonData.type.modelProperties
    }
  }
};

export const GeoJsonGeometryCollection: coreClient.CompositeMapper = {
  serializedName: "GeometryCollection",
  type: {
    name: "Composite",
    className: "GeoJsonGeometryCollection",
    uberParent: "GeoJsonGeometryCollectionData",
    polymorphicDiscriminator:
      GeoJsonGeometryCollectionData.type.polymorphicDiscriminator,
    modelProperties: {
      ...GeoJsonGeometry.type.modelProperties,
      ...GeoJsonGeometryCollectionData.type.modelProperties
    }
  }
};

export const RouteRequestRouteMatrixHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteRequestRouteMatrixHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RouteGetRouteMatrixHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteGetRouteMatrixHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RouteRequestRouteDirectionsBatchHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteRequestRouteDirectionsBatchHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RouteGetRouteDirectionsBatchHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RouteGetRouteDirectionsBatchHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export let discriminators = {
  GeoJsonObject: GeoJsonObject,
  "GeoJsonObject.GeoJsonGeometry": GeoJsonGeometry,
  "GeoJsonObject.Feature": GeoJsonFeature,
  "GeoJsonObject.FeatureCollection": GeoJsonFeatureCollection,
  "GeoJsonMultiPointData.MultiPoint": GeoJsonMultiPoint,
  "GeoJsonMultiPolygonData.MultiPolygon": GeoJsonMultiPolygon,
  "GeoJsonPointData.Point": GeoJsonPoint,
  "GeoJsonLineStringData.LineString": GeoJsonLineString,
  "GeoJsonMultiLineStringData.MultiLineString": GeoJsonMultiLineString,
  "GeoJsonPolygonData.Polygon": GeoJsonPolygon,
  "GeoJsonGeometryCollectionData.GeometryCollection": GeoJsonGeometryCollection
};
