import Link from "next/link";
import { SimpleGrid, Card, Text } from "@mantine/core";

interface NetworkEntry {
  slug: string;
  title: string;
}

// Названия и порядок — как в корневом pages/_meta.json, чтобы не разъезжались.
const RPC_NETWORKS: NetworkEntry[] = [
    { slug: "api-reference/ethereum-api", title: "Ethereum API" },
  { slug: "api-reference/optimism-api", title: "Optimism API" },
  { slug: "api-reference/arbitrum-api", title: "Arbitrum API" },
  { slug: "api-reference/solana-api", title: "Solana API" },
  { slug: "api-reference/cosmos-api", title: "Cosmos API" },
  { slug: "api-reference/avalanche-api", title: "Avalanche API" },
  { slug: "api-reference/polygon-api", title: "Polygon API" },
  { slug: "api-reference/superseed-api", title: "Superseed API" },
  { slug: "api-reference/mantle-api", title: "Mantle API" },
  { slug: "api-reference/ton-api", title: "Ton API" },
  { slug: "api-reference/bitcoin-api", title: "Bitcoin API" },
  { slug: "api-reference/base-api", title: "Base API" },
  { slug: "api-reference/celo-api", title: "Celo API" },
  { slug: "api-reference/bsc-api", title: "BNB Smart Chain API" },
  { slug: "api-reference/fantom-api", title: "Fantom API" },
  { slug: "api-reference/berachain-api", title: "Berachain API" },
  { slug: "api-reference/tron-api", title: "Tron API" },
  { slug: "api-reference/robinhood-api", title: "Robinhood API" },
  { slug: "api-reference/arc-api", title: "Arc API" },
  { slug: "api-reference/soneium-api", title: "Soneium API" },
  { slug: "api-reference/sonic-api", title: "Sonic API" },
  { slug: "api-reference/viction-api", title: "Viction API" },
];

const DATA_WALLET: NetworkEntry[] = [{ slug: "data-api", title: "Data API" }];

function NetworkGrid({ title, entries }: { title: string; entries: NetworkEntry[] }) {
  return (
    <div style={{ marginTop: "2rem" }}>
      <Text fw={700} tt="uppercase" size="sm" c="dimmed" mb="sm">
        {title}
      </Text>
      <SimpleGrid cols={{ base: 2, sm: 3, md: 4 }} spacing="md">
        {entries.map((n) => (
          <Link key={n.slug} href={`/${n.slug}`} style={{ textDecoration: "none" }}>
            <Card
              withBorder
              padding="md"
              radius="md"
              style={{
                backgroundColor: "var(--nextra-bg, #111)",
                borderColor: "rgba(127, 127, 127, 0.4)",
              }}
            >
              <Text fw={600} c="white">
                {n.title}
              </Text>
            </Card>
          </Link>
        ))}
      </SimpleGrid>
    </div>
  );
}

export function ApiReferenceWelcome() {
  return (
    <div>
      <NetworkGrid title="Data & Wallet API" entries={DATA_WALLET} />
      <NetworkGrid title="JSON-RPC APIs" entries={RPC_NETWORKS} />
    </div>
  );
}
