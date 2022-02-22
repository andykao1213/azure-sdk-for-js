let nock = require('nock');

module.exports.hash = "391e9fe4dc5cd69077aee369c8743c07";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://atlas.microsoft.com:443', {"encodedQueryParams":true})
  .post('/search/alongRoute/json', {"route":{"type":"LineString","coordinates":[[-122.143035,47.653536],[-122.187164,47.617556],[-122.114981,47.570599],[-122.132756,47.654009]]}})
  .query(true)
  .reply(200, {"summary":{"query":"burger","queryType":"NON_NEAR","queryTime":256,"numResults":10,"offset":0,"totalResults":10,"fuzzyLevel":1},"results":[{"type":"POI","id":"840539003143944","score":2.8276119232,"dist":269.1682087059635,"query":"burger","info":"search:ta:840539003143944-US","poi":{"name":"Burgers","categorySet":[{"id":7315069}],"categories":["hamburgers","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"hamburgers"}]}]},"address":{"streetNumber":"15701","streetName":"Northeast 39th Street","municipality":"Redmond","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98052","extendedPostalCode":"98052-5391","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"15701 Northeast 39th Street, Redmond, WA 98052","localName":"Redmond"},"position":{"lat":47.64376,"lon":-122.1281},"viewport":{"topLeftPoint":{"lat":47.64491,"lon":-122.12981},"btmRightPoint":{"lat":47.64261,"lon":-122.12639}},"entryPoints":[{"type":"main","position":{"lat":47.64491,"lon":-122.1281}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo1OWE1YmZlZDc1YTZlYTdmYTAxM2EyZmY=","sourceName":"Foursquare"}]},"detourTime":-435,"detourDistance":-20369},{"type":"POI","id":"840539000983176","score":2.7718887329,"dist":482.496255757968,"query":"burger","info":"search:ta:840539000983176-US","poi":{"name":"Gulliver's Burgers & Subs","phone":"+1 425-562-5115","categorySet":[{"id":7315015}],"categories":["fast food","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"fast food"}]}]},"address":{"streetNumber":"3080","streetName":"148th Avenue Southeast","municipality":"Bellevue","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98007","extendedPostalCode":"98007-6410","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"3080 148th Avenue Southeast, Bellevue, WA 98007","localName":"Bellevue"},"position":{"lat":47.58202,"lon":-122.14049},"viewport":{"topLeftPoint":{"lat":47.58319,"lon":-122.14222},"btmRightPoint":{"lat":47.58085,"lon":-122.13876}},"entryPoints":[{"type":"main","position":{"lat":47.58104,"lon":-122.14143}}],"detourTime":-194,"detourDistance":-13374},{"type":"POI","id":"840539000289900","score":2.7963263988,"dist":1178.917994126377,"query":"burger","info":"search:ta:840539000289900-US","poi":{"name":"Herfy's Burger","phone":"+1 425-641-2003","categorySet":[{"id":7315015}],"url":"www.yelp.com/biz/herfys-burgers-redmond-2","categories":["fast food","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"fast food"}]}]},"address":{"streetNumber":"15167","streetName":"Northeast 24th Street","municipality":"Redmond","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98052","extendedPostalCode":"98052-5544","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"15167 Northeast 24th Street, Redmond, WA 98052","localName":"Redmond"},"position":{"lat":47.63149,"lon":-122.1388},"viewport":{"topLeftPoint":{"lat":47.63239,"lon":-122.14013},"btmRightPoint":{"lat":47.63059,"lon":-122.13747}},"entryPoints":[{"type":"main","position":{"lat":47.63149,"lon":-122.1388}}],"detourTime":7,"detourDistance":-6784},{"type":"POI","id":"840539003111665","score":2.793201685,"dist":1955.1623267080852,"query":"burger","info":"search:ta:840539003111665-US","poi":{"name":"Burger Hut","phone":"+1 425-643-3985","categorySet":[{"id":7315069}],"categories":["hamburgers","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"hamburgers"}]}]},"address":{"streetNumber":"14603","streetName":"Northeast 20th Street","municipalitySubdivision":"Bel Red","municipality":"Bellevue","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98007","extendedPostalCode":"98007-3712","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"14603 Northeast 20th Street, Bellevue, WA 98007","localName":"Bellevue"},"position":{"lat":47.62695,"lon":-122.14497},"viewport":{"topLeftPoint":{"lat":47.62785,"lon":-122.1463},"btmRightPoint":{"lat":47.62605,"lon":-122.14364}},"entryPoints":[{"type":"main","position":{"lat":47.62783,"lon":-122.14496}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo1ZTA0MDA1ODVhMWYzYTAwMDg5ZDc2ZmM=","sourceName":"Foursquare"}]},"detourTime":106,"detourDistance":-6988},{"type":"POI","id":"840531000533803","score":2.7693781853,"dist":1127.9399853212014,"query":"burger","info":"search:ta:840531000533803-US","poi":{"name":"Wibbley's Gourmet Burgers","phone":"+1 425-747-7818","categorySet":[{"id":7315069}],"url":"wibbleys.com","categories":["hamburgers","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"hamburgers"}]}]},"address":{"streetNumber":"2255","streetName":"140th Avenue Northeast","municipalitySubdivision":"Bel Red","municipality":"Bellevue","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98005","extendedPostalCode":"98005-1819","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"2255 140th Avenue Northeast, Bellevue, WA 98005","localName":"Bellevue"},"position":{"lat":47.63066,"lon":-122.15504},"viewport":{"topLeftPoint":{"lat":47.63156,"lon":-122.15637},"btmRightPoint":{"lat":47.62976,"lon":-122.15371}},"entryPoints":[{"type":"main","position":{"lat":47.63066,"lon":-122.15374}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo0YTRkMGI3MWY5NjRhNTIwN2ZhZDFmZTM=","sourceName":"Foursquare"}]},"detourTime":157,"detourDistance":-6042},{"type":"POI","id":"840539000634040","score":2.7678313255,"dist":1519.0817019821163,"query":"burger","info":"search:ta:840539000634040-US","poi":{"name":"Wayback Burgers","phone":"+1 425-644-1300","brands":[{"name":"Wayback Burgers"}],"categorySet":[{"id":7315015}],"url":"www.waybackburgers.com","categories":["fast food","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"fast food"}]}]},"address":{"streetNumber":"1645","streetName":"140th Avenue Northeast","municipalitySubdivision":"Bel Red","municipality":"Bellevue","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98005","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"1645 140th Avenue Northeast, Bellevue, WA 98005","localName":"Bellevue"},"position":{"lat":47.62626,"lon":-122.15487},"viewport":{"topLeftPoint":{"lat":47.62716,"lon":-122.1562},"btmRightPoint":{"lat":47.62536,"lon":-122.15354}},"entryPoints":[{"type":"minor","position":{"lat":47.62645,"lon":-122.15446}},{"type":"main","position":{"lat":47.62579,"lon":-122.15377}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo1NDVlODdlOTQ5OGUzNmVlNTQ4MDhlODY=","sourceName":"Foursquare"}]},"detourTime":185,"detourDistance":-6089},{"type":"POI","id":"840539002313210","score":2.8714032173,"dist":6356.878096760807,"query":"burger","info":"search:ta:840539002313210-US","poi":{"name":"BURGER KING","phone":"+1 425-392-5011","brands":[{"name":"BURGER KING"}],"categorySet":[{"id":7315015}],"url":"burgerking.com/store-locator/store/restaurant_2318","categories":["fast food","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"fast food"}]}]},"address":{"streetNumber":"1705","streetName":"Northwest Gilman Boulevard","municipalitySubdivision":"Newport","municipality":"Issaquah","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98027","extendedPostalCode":"98027-5314","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"1705 Northwest Gilman Boulevard, Issaquah, WA 98027","localName":"Issaquah"},"position":{"lat":47.54539,"lon":-122.06367},"viewport":{"topLeftPoint":{"lat":47.54629,"lon":-122.065},"btmRightPoint":{"lat":47.54449,"lon":-122.06234}},"entryPoints":[{"type":"main","position":{"lat":47.54571,"lon":-122.06365}},{"type":"minor","position":{"lat":47.54547,"lon":-122.06367}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo0YjE5N2UyY2Y5NjRhNTIwNTJkZTIzZTM=","sourceName":"Foursquare"}]},"detourTime":187,"detourDistance":6857},{"type":"POI","id":"840539002288639","score":2.7890250683,"dist":2963.10210231557,"query":"burger","info":"search:ta:840539002288639-US","poi":{"name":"Burgermaster","phone":"+1 425-827-9566","categorySet":[{"id":7315069}],"url":"burgermaster.biz","categories":["hamburgers","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"hamburgers"}]}]},"address":{"streetNumber":"10606","streetName":"Northup Way","municipality":"Bellevue","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98004","extendedPostalCode":"98004-1418","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"10606 Northup Way, Bellevue, WA 98004","localName":"Bellevue"},"position":{"lat":47.64224,"lon":-122.19906},"viewport":{"topLeftPoint":{"lat":47.64314,"lon":-122.20039},"btmRightPoint":{"lat":47.64134,"lon":-122.19773}},"entryPoints":[{"type":"main","position":{"lat":47.64205,"lon":-122.19927}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo0NjRhM2MxMmY5NjRhNTIwYWQ0NjFmZTM=","sourceName":"Foursquare"}]},"detourTime":212,"detourDistance":1473},{"type":"POI","id":"840539003043271","score":2.7946410179,"dist":1600.029196161281,"query":"burger","info":"search:ta:840539003043271-US","poi":{"name":"Burger Brawler","phone":"+1 425-362-6071","categorySet":[{"id":9379006}],"categories":["cocktail bar","nightlife"],"classifications":[{"code":"NIGHTLIFE","names":[{"nameLocale":"en-US","name":"nightlife"},{"nameLocale":"en-US","name":"cocktail bar"}]}]},"address":{"streetNumber":"500","streetName":"Bellevue Way Northeast","municipality":"Bellevue","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98004","extendedPostalCode":"98004-5015","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"500 Bellevue Way Northeast, Bellevue, WA 98004","localName":"Bellevue"},"position":{"lat":47.61464,"lon":-122.20125},"viewport":{"topLeftPoint":{"lat":47.61554,"lon":-122.20258},"btmRightPoint":{"lat":47.61374,"lon":-122.19992}},"entryPoints":[{"type":"main","position":{"lat":47.61463,"lon":-122.20158}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo1YTY0MmY4MmI5YTVhODJlOTVmMGUwMzI=","sourceName":"Foursquare"}]},"detourTime":235,"detourDistance":1147},{"type":"POI","id":"840539002366655","score":2.7806251049,"dist":4895.0590447372215,"query":"burger","info":"search:ta:840539002366655-US","poi":{"name":"Burger Addict","phone":"+1 425-305-5572","categorySet":[{"id":7315069}],"url":"www.burgeraddict.com","categories":["hamburgers","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"hamburgers"}]}]},"address":{"streetNumber":"12016","streetName":"Northeast 85th Street","municipalitySubdivision":"North Rose Hill","municipality":"Kirkland","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98033","extendedPostalCode":"98033-8039","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"12016 Northeast 85th Street, Kirkland, WA 98033","localName":"Kirkland"},"position":{"lat":47.68023,"lon":-122.17996},"viewport":{"topLeftPoint":{"lat":47.68116,"lon":-122.18134},"btmRightPoint":{"lat":47.6793,"lon":-122.17858}},"entryPoints":[{"type":"main","position":{"lat":47.67931,"lon":-122.18013}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo1YjkxZTM1YmM1MzA5MzAwMzk2NzhlNDA=","sourceName":"Foursquare"}]},"detourTime":392,"detourDistance":3097}]}, [
  'Content-Length',
  '12519',
  'Content-Type',
  'application/json; charset=utf-8',
  'Vary',
  'Accept-Encoding,X-HTTP-Method-Override',
  'x-ms-azuremaps-region',
  'West US 2',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Cache',
  'CONFIG_NOCACHE',
  'X-MSEdge-Ref',
  'Ref A: D29DF214E6844E3485B9EBF9051E6568 Ref B: TYAEDGE1122 Ref C: 2022-02-22T10:18:51Z',
  'Date',
  'Tue, 22 Feb 2022 10:18:52 GMT'
]);
