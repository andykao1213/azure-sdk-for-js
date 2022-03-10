let nock = require('nock');

module.exports.hash = "3df83087ce27e815278a76b12cad8ffa";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://atlas.microsoft.com:443', {"encodedQueryParams":true})
  .get('/search/poi/category/json')
  .query(true)
  .reply(200, {"summary":{"query":"restaurant","queryType":"NON_NEAR","queryTime":367,"numResults":10,"offset":0,"totalResults":6456072,"fuzzyLevel":1,"geoBias":{"lat":47.606038,"lon":-122.333345}},"results":[{"type":"POI","id":"840539001919770","score":2.5745272636,"dist":46.88885612108645,"info":"search:ta:840539001919770-US","poi":{"name":"La Vita E'Bella Pizzeria","phone":"+1 206-441-5123","categorySet":[{"id":7315036}],"url":"www.lavitaebella.us","categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"pizza"}]}]},"address":{"streetNumber":"1001","streetName":"4th Avenue","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98154","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"1001 4th Avenue, Seattle, WA 98154","localName":"Seattle"},"position":{"lat":47.60632,"lon":-122.33381},"viewport":{"topLeftPoint":{"lat":47.60722,"lon":-122.33514},"btmRightPoint":{"lat":47.60542,"lon":-122.33248}},"entryPoints":[{"type":"main","position":{"lat":47.60644,"lon":-122.33325}}]},{"type":"POI","id":"840539003103766","score":2.5745265484,"dist":58.03771624292174,"info":"search:ta:840539003103766-US","poi":{"name":"Belle Epicurean","phone":"+1 206-262-9306","categorySet":[{"id":7315017}],"url":"www.belleepicurean.com","categories":["french","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"french"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"925","streetName":"4th Avenue","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","extendedPostalCode":"98104-1106","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"925 4th Avenue, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60552,"lon":-122.33325},"viewport":{"topLeftPoint":{"lat":47.60642,"lon":-122.33458},"btmRightPoint":{"lat":47.60462,"lon":-122.33192}},"entryPoints":[{"type":"main","position":{"lat":47.60578,"lon":-122.33264}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo1YTUzYjEzYjMyYjYxZDU5ZjRkYzg3YTI=","sourceName":"Foursquare"}]}},{"type":"POI","id":"840539000089874","score":2.5745265484,"dist":58.03771624292174,"info":"search:ta:840539000089874-US","poi":{"name":"Sushi Kudasai","phone":"+1 206-623-8080","categorySet":[{"id":7315148}],"url":"www.sushikudasaiseattle.com/","categories":["restaurant","sushi"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"sushi"}]}]},"address":{"streetNumber":"925","streetName":"4th Avenue","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","extendedPostalCode":"98104-1106","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"925 4th Avenue, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60552,"lon":-122.33325},"viewport":{"topLeftPoint":{"lat":47.60642,"lon":-122.33458},"btmRightPoint":{"lat":47.60462,"lon":-122.33192}},"entryPoints":[{"type":"main","position":{"lat":47.60578,"lon":-122.33264}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo1MDg1YWMwZmU0YjBhNDQ3NTAwYjE4MDM=","sourceName":"Foursquare"}]}},{"type":"POI","id":"840539001115354","score":2.5745253563,"dist":87.93982774588119,"info":"search:ta:840539001115354-US","poi":{"name":"Cafe Loc","phone":"+1 206-386-4692","categorySet":[{"id":7315}],"categories":["restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"1000","streetName":"4th Avenue","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","extendedPostalCode":"98104-1109","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"1000 4th Avenue, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60668,"lon":-122.33266},"viewport":{"topLeftPoint":{"lat":47.60758,"lon":-122.33399},"btmRightPoint":{"lat":47.60578,"lon":-122.33133}},"entryPoints":[{"type":"main","position":{"lat":47.60644,"lon":-122.33325}}]},{"type":"POI","id":"840531000371626","score":2.5745248795,"dist":97.61714945967063,"info":"search:ta:840531000371626-US","poi":{"name":"Ricenroll","phone":"+1 206-262-0381","categorySet":[{"id":7315148}],"url":"www.ricenroll.com","categories":["restaurant","sushi"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"sushi"}]}]},"address":{"streetNumber":"214","streetName":"Madison Street","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","extendedPostalCode":"98104-3638","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"214 Madison Street, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60562,"lon":-122.33449},"viewport":{"topLeftPoint":{"lat":47.60652,"lon":-122.33582},"btmRightPoint":{"lat":47.60472,"lon":-122.33316}},"entryPoints":[{"type":"main","position":{"lat":47.60549,"lon":-122.33436}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo0YjQ2NTk5NmY5NjRhNTIwNWQxZTI2ZTM=","sourceName":"Foursquare"}]}},{"type":"POI","id":"840539003183394","score":2.5745248795,"dist":96.9555165871904,"info":"search:ta:840539003183394-US","poi":{"name":"Vovito Espresso Gelato Bar","phone":"+1 206-403-1115","categorySet":[{"id":7315078}],"url":"vovito.com","categories":["ice cream parlor","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"ice cream parlor"}]}]},"address":{"streetNumber":"1100","streetName":"4th Avenue","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98101","extendedPostalCode":"98101-3004","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"1100 4th Avenue, Seattle, WA 98101","localName":"Seattle"},"position":{"lat":47.60689,"lon":-122.33362},"viewport":{"topLeftPoint":{"lat":47.60779,"lon":-122.33495},"btmRightPoint":{"lat":47.60599,"lon":-122.33229}},"entryPoints":[{"type":"main","position":{"lat":47.6072,"lon":-122.33395}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo1MjE2Mjk2YTExZDI3M2ZlNWI3N2M3MjE=","sourceName":"Foursquare"}]}},{"type":"POI","id":"840539003065656","score":2.574524641,"dist":100.3708594951675,"info":"search:ta:840539003065656-US","poi":{"name":"Matthew Hoffman","phone":"+1 206-701-2000","categorySet":[{"id":7315042}],"categories":["restaurant","sandwich"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"sandwich"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"901","streetName":"5th Avenue","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","extendedPostalCode":"98104-1608","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"901 5th Avenue, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60597,"lon":-122.33201},"viewport":{"topLeftPoint":{"lat":47.60687,"lon":-122.33334},"btmRightPoint":{"lat":47.60507,"lon":-122.33068}},"entryPoints":[{"type":"main","position":{"lat":47.60619,"lon":-122.33147}}]},{"type":"POI","id":"840539002387758","score":2.574524641,"dist":101.35431355228451,"info":"search:ta:840539002387758-US","poi":{"name":"DC's Bar & Grill","phone":"+1 206-914-8451","categorySet":[{"id":7315020}],"categories":["grill","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"grill"}]}]},"address":{"streetNumber":"907","streetName":"3rd Avenue","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","extendedPostalCode":"98104-1602","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"907 3rd Avenue, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60515,"lon":-122.33365},"viewport":{"topLeftPoint":{"lat":47.60605,"lon":-122.33498},"btmRightPoint":{"lat":47.60425,"lon":-122.33232}},"entryPoints":[{"type":"main","position":{"lat":47.60515,"lon":-122.33365}}]},{"type":"POI","id":"840537000017162","score":2.5745234489,"dist":118.5220882059273,"info":"search:ta:840537000017162-US","poi":{"name":"The Lodge Sports Grille-Downtown","phone":"+1 206-557-7360","categorySet":[{"id":7315003}],"url":"thelodgesportsgrille.com","categories":["american","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"american"}]}]},"address":{"streetNumber":"1102","streetName":"4th Avenue","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98101","extendedPostalCode":"98101-3004","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"1102 4th Avenue, Seattle, WA 98101","localName":"Seattle"},"position":{"lat":47.6071,"lon":-122.33348},"viewport":{"topLeftPoint":{"lat":47.608,"lon":-122.33481},"btmRightPoint":{"lat":47.6062,"lon":-122.33215}},"entryPoints":[{"type":"main","position":{"lat":47.60699,"lon":-122.33375}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo1NDI3NTc1OTQ5OGU5NmJmZGY3MzliMzA=","sourceName":"Foursquare"}]}},{"type":"POI","id":"840531000475812","score":2.5745222569,"dist":129.68130419307732,"info":"search:ta:840531000475812-US","poi":{"name":"Atlantic Street Pizza","phone":"+1 206-624-7200","categorySet":[{"id":7315036}],"url":"atlanticstreetpizza.com/","categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"pizza"}]}]},"address":{"streetNumber":"999","streetName":"3rd Avenue","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","extendedPostalCode":"98104-1105","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"999 3rd Avenue, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60504,"lon":-122.33424},"viewport":{"topLeftPoint":{"lat":47.60594,"lon":-122.33557},"btmRightPoint":{"lat":47.60414,"lon":-122.33291}},"entryPoints":[{"type":"main","position":{"lat":47.60525,"lon":-122.33374}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo0YWJhNzNjMWY5NjRhNTIwNjE4MTIwZTM=","sourceName":"Foursquare"}]}}]}, [
  'Content-Length',
  '11625',
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
  'Ref A: 382FABCB2D5E4F83BFF38B9B01F0543E Ref B: TPE30EDGE0415 Ref C: 2022-03-10T06:33:52Z',
  'Date',
  'Thu, 10 Mar 2022 06:33:51 GMT'
]);
