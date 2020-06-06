export default {
  regiao: () => fetch('https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalRegiao'),
  geralV2: () => (fetch('https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeral', {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "x-parse-application-id": "unAFkcaNDeXajurGB7LChj8SgQYS2ptm"
    }
  })),
  geral: () => fetch('https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeralApi')
}
