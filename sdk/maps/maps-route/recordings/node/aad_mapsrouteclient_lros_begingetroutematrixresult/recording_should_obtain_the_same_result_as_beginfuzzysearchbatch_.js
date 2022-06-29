let nock = require('nock');

module.exports.hash = "ddfaa707ddba801f3539dcea6e21d746";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [ 'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '629a1e38-053d-4d47-a29e-39e2522e2700',
  'x-ms-ests-server',
  '2.1.13081.9 - KRSLR1 ProdSlices',
  'Content-Security-Policy-Report-Only',
  'script-src \'self\' \'nonce-eGHmosW1zEgocmfbJxRqUg\' \'unsafe-eval\' \'unsafe-inline\'; object-src \'none\'; base-uri \'none\'; report-uri https://csp.microsoft.com/report/ESTS-UX-All',
  'X-XSS-Protection',
  '0',
  'Set-Cookie',
  'fpc=Au4eiIPMn8lCl74WXkWQIKA; expires=Fri, 29-Jul-2022 08:18:32 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevr-pSMx5iS_zZnmr14oYJRZJ790m0UhXvrgPndJiAcSxi9TC58nowCZuDd7OSawxK9zUZLlla2bV-VUS7SChgmVNY-uQuvBzvm_0Sj0OA1Ml7zaDJtN3aY11dyOLXP511nuKjoS3WDQXSwfiTxtBoMILMn2x3XaVIQG-r4cv0sYlggAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Wed, 29 Jun 2022 08:18:32 GMT',
  'Content-Length',
  '980' ]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/kerberos","tenant_region_scope":"AS","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [ 'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '77e89d3a-ba93-4567-b43b-9dffee638a00',
  'x-ms-ests-server',
  '2.1.13006.6 - KRSLR1 ProdSlices',
  'X-XSS-Protection',
  '0',
  'Set-Cookie',
  'fpc=AqWfxG_dR91ImAwFTO1EyAw; expires=Fri, 29-Jul-2022 08:18:32 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevr3da5cQOf79v0dxXrVjrg6p_WRWTWJ-4FOfKHHgZGYjSH6dguEbl9EqhBoyIz5ye9-C5HSs5pet55zKvY4y80z3Al_0Vpo7x_zplBfOJQ9wGwF5cPa78lns4oBXq5raJRRwo7rIM6UZTIKN8Yo0jp2Bx6IWfIUzFMd2lmeeJ341QgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Wed, 29 Jun 2022 08:18:32 GMT',
  'Content-Length',
  '1753' ]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.9.0&x-client-OS=linux&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=095f0183-079d-4ef2-acb8-0073b2def3a3&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":3599,"ext_expires_in":3599,"access_token":"access_token"}, [ 'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '8b3fea5b-3cf8-41f3-ae0f-853cc63c2b00',
  'x-ms-ests-server',
  '2.1.13006.6 - KRSLR1 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'X-XSS-Protection',
  '0',
  'Set-Cookie',
  'fpc=AnKR3BawRkdLnDccxvFUmOSr4fIWAQAAANgBTtoOAAAA; expires=Fri, 29-Jul-2022 08:18:33 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Wed, 29 Jun 2022 08:18:33 GMT',
  'Content-Length',
  '1319' ]);

nock('https://atlas.microsoft.com:443', {"encodedQueryParams":true})
  .post('/route/matrix/json', {"origins":{"type":"MultiPoint","coordinates":[[4.85106,52.36006],[4.85056,52.36187]]},"destinations":{"type":"MultiPoint","coordinates":[[4.85003,52.36241],[13.42937,52.50931]]}})
  .query(true)
  .reply(202, "", [ 'Content-Type',
  'application/json',
  'Location',
  'https://atlas.microsoft.com/route/matrix/5d087bf7-66e8-47c4-a792-85477c37cd10?api-version=1.0',
  'x-ms-azuremaps-region',
  'West US 2',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Cache',
  'CONFIG_NOCACHE',
  'X-MSEdge-Ref',
  'Ref A: 21DCD351C2BA4ABEA05B0A2F6A40162F Ref B: TYO01EDGE3115 Ref C: 2022-06-29T08:18:33Z',
  'Date',
  'Wed, 29 Jun 2022 08:18:32 GMT',
  'Content-Length',
  '0' ]);

nock('https://atlas.microsoft.com:443', {"encodedQueryParams":true})
  .get('/route/matrix/5d087bf7-66e8-47c4-a792-85477c37cd10')
  .query(true)
  .reply(200, {"formatVersion":"0.0.1","matrix":[[{"statusCode":200,"response":{"routeSummary":{"lengthInMeters":495,"travelTimeInSeconds":123,"trafficDelayInSeconds":0,"trafficLengthInMeters":0,"departureTime":"2022-06-29T10:18:33+02:00","arrivalTime":"2022-06-29T10:20:36+02:00"}}},{"statusCode":200,"response":{"routeSummary":{"lengthInMeters":666794,"travelTimeInSeconds":22529,"trafficDelayInSeconds":234,"trafficLengthInMeters":9179,"departureTime":"2022-06-29T10:18:33+02:00","arrivalTime":"2022-06-29T16:34:02+02:00"}}}],[{"statusCode":200,"response":{"routeSummary":{"lengthInMeters":338,"travelTimeInSeconds":104,"trafficDelayInSeconds":0,"trafficLengthInMeters":0,"departureTime":"2022-06-29T10:18:33+02:00","arrivalTime":"2022-06-29T10:20:16+02:00"}}},{"statusCode":200,"response":{"routeSummary":{"lengthInMeters":666637,"travelTimeInSeconds":22504,"trafficDelayInSeconds":252,"trafficLengthInMeters":9179,"departureTime":"2022-06-29T10:18:33+02:00","arrivalTime":"2022-06-29T16:33:37+02:00"}}}]],"summary":{"successfulRoutes":4,"totalRoutes":4}}, [ 'Content-Length',
  '1045',
  'Content-Type',
  'application/json; charset=utf-8',
  'Vary',
  'Accept-Encoding,User-Agent',
  'x-ms-azuremaps-region',
  'West US 2',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Cache',
  'CONFIG_NOCACHE',
  'X-MSEdge-Ref',
  'Ref A: 99D3C18AE3624A58855DCFC9B447A06F Ref B: TYAEDGE0418 Ref C: 2022-06-29T08:18:33Z',
  'Date',
  'Wed, 29 Jun 2022 08:18:33 GMT' ]);

nock('https://atlas.microsoft.com:443', {"encodedQueryParams":true})
  .get('/route/matrix/5d087bf7-66e8-47c4-a792-85477c37cd10')
  .query(true)
  .reply(200, {"formatVersion":"0.0.1","matrix":[[{"statusCode":200,"response":{"routeSummary":{"lengthInMeters":495,"travelTimeInSeconds":123,"trafficDelayInSeconds":0,"trafficLengthInMeters":0,"departureTime":"2022-06-29T10:18:33+02:00","arrivalTime":"2022-06-29T10:20:36+02:00"}}},{"statusCode":200,"response":{"routeSummary":{"lengthInMeters":666794,"travelTimeInSeconds":22529,"trafficDelayInSeconds":234,"trafficLengthInMeters":9179,"departureTime":"2022-06-29T10:18:33+02:00","arrivalTime":"2022-06-29T16:34:02+02:00"}}}],[{"statusCode":200,"response":{"routeSummary":{"lengthInMeters":338,"travelTimeInSeconds":104,"trafficDelayInSeconds":0,"trafficLengthInMeters":0,"departureTime":"2022-06-29T10:18:33+02:00","arrivalTime":"2022-06-29T10:20:16+02:00"}}},{"statusCode":200,"response":{"routeSummary":{"lengthInMeters":666637,"travelTimeInSeconds":22504,"trafficDelayInSeconds":252,"trafficLengthInMeters":9179,"departureTime":"2022-06-29T10:18:33+02:00","arrivalTime":"2022-06-29T16:33:37+02:00"}}}]],"summary":{"successfulRoutes":4,"totalRoutes":4}}, [ 'Content-Length',
  '1045',
  'Content-Type',
  'application/json; charset=utf-8',
  'Vary',
  'Accept-Encoding,User-Agent',
  'x-ms-azuremaps-region',
  'West US 2',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Cache',
  'CONFIG_NOCACHE',
  'X-MSEdge-Ref',
  'Ref A: 809D87EE7957407CB146C1C42828E294 Ref B: TYBEDGE0812 Ref C: 2022-06-29T08:18:33Z',
  'Date',
  'Wed, 29 Jun 2022 08:18:33 GMT' ]);
