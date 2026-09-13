import Link from "next/link";
import { SimpleGrid, Card, Text } from "@mantine/core";

interface NetworkEntry {
  slug: string;
  title: string;
}

// Названия и порядок — как в корневом pages/_meta.json, чтобы не разъезжались.
const RPC_NETWORKS: NetworkEntry[] = [
  { slug: "ethereum-api", title: "Ethereum API" },
  { slug: "optimism-api", title: "Optimism API" },
  { slug: "arbitrum-api", title: "Arbitrum API" },
  { slug: "solana-api", title: "Solana API" },
  { slug: "cosmos-api", title: "Cosmos API" },
  { slug: "avalanche-api", title: "Avalanche API" },
  { slug: "polygon-api", title: "Polygon API" },
  { slug: "superseed-api", title: "Superseed API" },
  { slug: "mantle-api", title: "Mantle API" },
  { slug: "ton-api", title: "Ton API" },
  { slug: "bitcoin-api", title: "Bitcoin API" },
  { slug: "base-api", title: "Base API" },
  { slug: "celo-api", title: "Celo API" },
  { slug: "bsc-api", title: "BNB Smart Chain API" },
  { slug: "fantom-api", title: "Fantom API" },
  { slug: "berachain-api", title: "Berachain API" },
  { slug: "tron-api", title: "Tron API" },
  { slug: "robinhood-api", title: "Robinhood API" },
  { slug: "arc-api", title: "Arc API" },
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
            <Card withBorder padding="md" radius="md">
              <Text fw={600}>{n.title}</Text>
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