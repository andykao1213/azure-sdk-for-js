let nock = require('nock');

module.exports.hash = "2a5b88549ca3ff0151d9a519de916346";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://atlas.microsoft.com:443', {"encodedQueryParams":true})
  .get('/search/poi/json')
  .query(true)
  .reply(200, {"summary":{"query":"juice bars","queryType":"NON_NEAR","queryTime":134,"numResults":10,"offset":0,"totalResults":82763,"fuzzyLevel":1,"geoBias":{"lat":47.606038,"lon":-122.333345}},"results":[{"type":"POI","id":"840539003070354","score":5.6638941765,"dist":307.28239174523605,"info":"search:ta:840539003070354-US","poi":{"name":"Custom Smoothie","phone":"+1 206-708-6049","categorySet":[{"id":7315149}],"url":"www.customsmoothie.com","categories":["restaurant","yogurt/juice bar"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"yogurt/juice bar"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"719","streetName":"2nd Avenue","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","extendedPostalCode":"98104-1700","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"719 2nd Avenue, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.6033,"lon":-122.3339},"viewport":{"topLeftPoint":{"lat":47.6042,"lon":-122.33523},"btmRightPoint":{"lat":47.6024,"lon":-122.33257}},"entryPoints":[{"type":"main","position":{"lat":47.60345,"lon":-122.33357}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo0YjZhMTA0OGY5NjRhNTIwMjFjNTJiZTM=","sourceName":"Foursquare"}]}},{"type":"POI","id":"840539003133402","score":5.6638793945,"dist":340.14950966095614,"info":"search:ta:840539003133402-US","poi":{"name":"Cocoa Banana","phone":"+1 206-903-0224","categorySet":[{"id":7315149}],"url":"cocoabanana.com/","categories":["restaurant","yogurt/juice bar"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"yogurt/juice bar"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"118","streetName":"Cherry Street","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","extendedPostalCode":"98104-2206","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"118 Cherry Street, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60299,"lon":-122.33373},"viewport":{"topLeftPoint":{"lat":47.60389,"lon":-122.33506},"btmRightPoint":{"lat":47.60209,"lon":-122.3324}},"entryPoints":[{"type":"main","position":{"lat":47.60285,"lon":-122.33364}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo0YmQwYjM1NGE4YjNhNTkzNTk2ZTY0NWY=","sourceName":"Foursquare"}]}},{"type":"POI","id":"840537000017031","score":5.6636886597,"dist":619.5861082929217,"info":"search:ta:840537000017031-US","poi":{"name":"Ellenos Real Greek Yogurt","phone":"+1 206-625-5006","categorySet":[{"id":7315149}],"url":"www.ellenos.com","categories":["restaurant","yogurt/juice bar"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"yogurt/juice bar"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"1500","streetName":"Pike Street","municipalitySubdivision":"Downtown Seattle","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98101","extendedPostalCode":"98101-2025","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"1500 Pike Street, Seattle, WA 98101","localName":"Seattle"},"position":{"lat":47.60885,"lon":-122.34048},"viewport":{"topLeftPoint":{"lat":47.60975,"lon":-122.34181},"btmRightPoint":{"lat":47.60795,"lon":-122.33915}},"entryPoints":[{"type":"main","position":{"lat":47.60876,"lon":-122.34044}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo1MWQ5Y2I0ZDQ5OGU3MTY5MTAwNTQxOGQ=","sourceName":"Foursquare"}]}},{"type":"POI","id":"840539002169004","score":5.6636214256,"dist":691.859624080263,"info":"search:ta:840539002169004-US","poi":{"name":"Rachel's Ginger Beer","phone":"+1 206-467-4924","categorySet":[{"id":7315149}],"url":"rachelsgingerbeer.com","categories":["restaurant","yogurt/juice bar"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"yogurt/juice bar"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"1530","streetName":"Post Alley","municipalitySubdivision":"Downtown Seattle","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98101","extendedPostalCode":"98101-1516","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"1530 Post Alley, Seattle, WA 98101","localName":"Seattle"},"position":{"lat":47.60939,"lon":-122.34112},"viewport":{"topLeftPoint":{"lat":47.61029,"lon":-122.34245},"btmRightPoint":{"lat":47.60849,"lon":-122.33979}},"entryPoints":[{"type":"main","position":{"lat":47.60933,"lon":-122.34126}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo1MWMxMjg2ZjQ5OGUyNTA1ZmQ3NjRmYmU=","sourceName":"Foursquare"}]}},{"type":"POI","id":"840539003171137","score":5.663602829,"dist":710.5773794320052,"info":"search:ta:840539003171137-US","poi":{"name":"The Juice Emporium","categorySet":[{"id":7315149}],"categories":["restaurant","yogurt/juice bar"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"yogurt/juice bar"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetName":"Pike Place","municipalitySubdivision":"Downtown Seattle","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98101","extendedPostalCode":"98101-1527","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"Pike Place, Seattle, WA 98101","localName":"Seattle"},"position":{"lat":47.60934,"lon":-122.34146},"viewport":{"topLeftPoint":{"lat":47.61024,"lon":-122.34279},"btmRightPoint":{"lat":47.60844,"lon":-122.34013}},"entryPoints":[{"type":"main","position":{"lat":47.60926,"lon":-122.34153}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo0YmE1MmZmZGY5NjRhNTIwNTdlOTM4ZTM=","sourceName":"Foursquare"}]}},{"type":"POI","id":"840539001755244","score":5.6635766029,"dist":735.6569863031766,"info":"search:ta:840539001755244-US","poi":{"name":"Pressed Juicery","phone":"+1 206-624-0804","brands":[{"name":"Pressed Juicery"}],"categorySet":[{"id":7315149}],"url":"www.pressedjuicery.com","categories":["restaurant","yogurt/juice bar"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"yogurt/juice bar"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"400","streetName":"Pine Street","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98101","extendedPostalCode":"98101-1628","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"400 Pine Street, Seattle, WA 98101","localName":"Seattle"},"position":{"lat":47.61198,"lon":-122.33766},"viewport":{"topLeftPoint":{"lat":47.61288,"lon":-122.33899},"btmRightPoint":{"lat":47.61108,"lon":-122.33633}},"entryPoints":[{"type":"main","position":{"lat":47.61206,"lon":-122.33841}},{"type":"main","position":{"lat":47.61144,"lon":-122.33712}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo1ODUxZjNhZTAwMzdlYjFkMzVjYmNlZTg=","sourceName":"Foursquare"}]}},{"type":"POI","id":"840539000974360","score":5.6633687019,"dist":913.8394232864273,"info":"search:ta:840539000974360-US","poi":{"name":"Juicy Cafe","phone":"+1 206-467-5501","categorySet":[{"id":7315149}],"url":"www.thejuicycafe.com","categories":["restaurant","yogurt/juice bar"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"yogurt/juice bar"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"720","streetName":"Olive Way","municipalitySubdivision":"Belltown","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98101","extendedPostalCode":"98101-1801","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"720 Olive Way, Seattle, WA 98101","localName":"Seattle"},"position":{"lat":47.6142,"lon":-122.33477},"viewport":{"topLeftPoint":{"lat":47.6151,"lon":-122.3361},"btmRightPoint":{"lat":47.6133,"lon":-122.33344}},"entryPoints":[{"type":"main","position":{"lat":47.61391,"lon":-122.33448}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo1NjQ0ZjBiYTQ5OGVhNTQwYzBjNTQ1NjA=","sourceName":"Foursquare"}]}},{"type":"POI","id":"840537000017213","score":5.6633033752,"dist":962.5243573168053,"info":"search:ta:840537000017213-US","poi":{"name":"Jamba Juice-Madison","brands":[{"name":"Jamba Juice"}],"categorySet":[{"id":7315149}],"categories":["restaurant","yogurt/juice bar"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"yogurt/juice bar"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"1303","streetName":"Madison Street","municipalitySubdivision":"Downtown Seattle","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","extendedPostalCode":"98104-3507","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"1303 Madison Street, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.61024,"lon":-122.32212},"viewport":{"topLeftPoint":{"lat":47.61114,"lon":-122.32345},"btmRightPoint":{"lat":47.60934,"lon":-122.32079}},"entryPoints":[{"type":"main","position":{"lat":47.61051,"lon":-122.32237}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo0YWQ0YWUwNmY5NjRhNTIwYTRlODIwZTM=","sourceName":"Foursquare"}]}},{"type":"POI","id":"840539003088510","score":5.6631345749,"dist":1079.1808792891181,"info":"search:ta:840539003088510-US","poi":{"name":"Ellenos Real Greek Yogurt","categorySet":[{"id":7315149}],"categories":["restaurant","yogurt/juice bar"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"yogurt/juice bar"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"600","streetName":"5th Avenue South","municipalitySubdivision":"Downtown Seattle","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","extendedPostalCode":"98104-3897","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"600 5th Avenue South, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.59716,"lon":-122.32753},"viewport":{"topLeftPoint":{"lat":47.59806,"lon":-122.32886},"btmRightPoint":{"lat":47.59626,"lon":-122.3262}},"entryPoints":[{"type":"main","position":{"lat":47.59716,"lon":-122.3277}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo1M2M0MTc0ZTQ5OGUzYjVjY2IwY2Q2ODk=","sourceName":"Foursquare"}]}},{"type":"POI","id":"840539001785236","score":5.6630911827,"dist":1106.941814792675,"info":"search:ta:840539001785236-US","poi":{"name":"Pressed Juicery","phone":"+1 206-453-3785","brands":[{"name":"Pressed Juicery"}],"categorySet":[{"id":7315149}],"url":"www.pressedjuicery.com","categories":["restaurant","yogurt/juice bar"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"yogurt/juice bar"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"315","streetName":"East Pine Street","municipalitySubdivision":"Broadway","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98122","extendedPostalCode":"98122-2028","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"315 East Pine Street, Seattle, WA 98122","localName":"Seattle"},"position":{"lat":47.61509,"lon":-122.3272},"viewport":{"topLeftPoint":{"lat":47.61599,"lon":-122.32853},"btmRightPoint":{"lat":47.61419,"lon":-122.32587}},"entryPoints":[{"type":"main","position":{"lat":47.61523,"lon":-122.32721}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo1OTliNDg4NThkMGE1MzYxZWZlMzI4NDY=","sourceName":"Foursquare"}]}}]}, [
  'Content-Length',
  '12353',
  'Content-Type',
  'application/json; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'x-ms-azuremaps-region',
  'West US 2',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Cache',
  'CONFIG_NOCACHE',
  'X-MSEdge-Ref',
  'Ref A: 677DA93459BE412DAA8BFEC672B9A7CF Ref B: TYO01EDGE3319 Ref C: 2022-06-22T02:35:37Z',
  'Date',
  'Wed, 22 Jun 2022 02:35:37 GMT'
]);
