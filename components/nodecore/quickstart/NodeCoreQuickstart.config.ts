export const NODECORE_QUICKSTART_SNIPPETS = {
  INTEGRATION: `integration:
  drpc:
    url: https://nodecore.drpc.org`,
  DOCKER: `docker run -d --name nodecore --restart always \\
  -p 9090:9090 -v $(pwd)/nodecore.yml:/nodecore.yml \\
    drpcorg/nodecore:latest`,
  CURL: `curl --location 'http://localhost:9090/queries/ethereum' \\
  -H 'Content-Type: application/json' \\
  --data '{"id":1,"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["latest",false]}'`,
};

export const NODECORE_URLS = {
  NODECORE_YAML: "https://github.com/drpcorg/nodecore/blob/main/nodecore.yml",
  CONFIG:
    "https://github.com/drpcorg/nodecore/blob/main/docs/nodecore/01-config.md",
  AUTH: "https://github.com/drpcorg/nodecore/blob/main/docs/nodecore/03-auth.md",
  INTEGRATION:
    "https://github.com/drpcorg/nodecore/blob/main/docs/nodecore/09-integration.md#drpc-integration",
};
