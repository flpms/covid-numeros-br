# covid-numeros-br

React App com bootstrap simples para consultar números brasileiros da COVID 19

A consulta é feita através do endpoint 

`https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeralApi`

Outros endpoints importantes para se observar

## Portal Geral
`https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeral`

### cURL
```
curl 'https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeral' \
  -H 'authority: xx9p7hp1p7.execute-api.us-east-1.amazonaws.com' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5)' \
  -H 'x-parse-application-id: unAFkcaNDeXajurGB7LChj8SgQYS2ptm' \
  -H 'origin: https://covid.saude.gov.br' \
  -H 'sec-fetch-site: cross-site' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-dest: empty' \
  -H 'referer: https://covid.saude.gov.br/' \
  -H 'accept-language: pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7' \
  --compressed
```

## PortalSintese
`https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalSintese`

## PortalEstado
`https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalEstado`


