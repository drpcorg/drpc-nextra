import { Button, CopyButton, Stack, Text } from "@mantine/core";

import {
  NODECORE_QUICKSTART_SNIPPETS,
  NODECORE_URLS,
} from "./NodeCoreQuickstart.config";
import classes from "./NodeCoreQuickstart.module.css";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { Pre } from "nextra/components";

type Props = {
  nodeCoreApiToken?: string;
  isLoading?: boolean;
  onClose?: () => void;
  onGenerateToken?: () => void;
  disabledGenerateToken?: boolean;
  disabledGenerateTokenText?: string;
};

export function NodeCoreQuickstart({ nodeCoreApiToken, onClose }: Props) {
  return (
    <Stack p={0} gap={40}>
      {/* Step 1 */}
      <Stack gap={16}>
        <Text component="h2" size="xl" c="white" fw="medium">
          Step 1 — Choose Mode
        </Text>
        <ul className={classes.bulletList}>
          <li>
            <Text size="md" c="white">
              <b>Connected (with UI)</b> — Manage API keys & access policies in
              the Dashboard. Coming soon: usage analytics, error logs, and cost
              visibility & comparison.
            </Text>
          </li>
          <li>
            <Text size="md" c="white">
              <b>Local Only</b> — Fully self-hosted (skip steps Connected only).
            </Text>
          </li>
        </ul>
      </Stack>

      {/* Step 2 */}
      <Stack gap={16}>
        <Text component="h2" size="xl" c="white" fw="medium">
          Step 2 — Copy Integration Token (Connected only)
        </Text>
        <Text size="md" c="textPrimaryMuted">
          This token connects NodeCore to Dashboard.
        </Text>
        {nodeCoreApiToken ? (
          <CopyButton value={nodeCoreApiToken}>
            {({ copied }) => (
              <Button
                leftSection={
                  copied ? <IconCheck size={14} /> : <IconCopy size={14} />
                }
              >
                {copied ? "Copied" : "Copy"}
              </Button>
            )}
          </CopyButton>
        ) : (
          <Text size="md" c="textPrimaryMuted">
            Only team owner can generate token
          </Text>
        )}
        <ul className={classes.bulletList}>
          <li>
            <Text size="md" c="textPrimaryMuted">
              Regenerate anytime (old token becomes invalid) in Settings → API
              Tokens
            </Text>
          </li>
        </ul>
      </Stack>

      {/* Step 3 */}
      <Stack gap={16}>
        <Text component="h2" size="xl" c="white" fw="medium">
          Step 3 — Create Configuration
        </Text>
        <ul className={classes.bulletList}>
          <li>
            <Text size="md" c="textPrimaryMuted">
              Base config:{" "}
              <a
                href={NODECORE_URLS.NODECORE_YAML}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                nodecore.yml
              </a>
            </Text>
          </li>
          <li>
            <Text size="md" c="textPrimaryMuted">
              Advanced config:{" "}
              <a
                href={NODECORE_URLS.CONFIG}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Config guide (01-config.md)
              </a>
            </Text>
          </li>
          <li>
            <Text size="md" c="textPrimaryMuted">
              Connected:{" "}
              <a
                href={NODECORE_URLS.AUTH}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Auth & keys (03-auth.md)
              </a>
            </Text>
          </li>
          <li>
            <Text size="md" c="textPrimaryMuted">
              Connected:{" "}
              <a
                href={NODECORE_URLS.INTEGRATION}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Integration (09-integration.md)
              </a>
            </Text>
          </li>
        </ul>
        <Pre>{NODECORE_QUICKSTART_SNIPPETS.INTEGRATION}</Pre>
      </Stack>

      {/* Step 4 */}
      <Stack gap={16}>
        <Text component="h2" size="xl" c="white" fw="medium">
          Step 4 — Run with Docker
        </Text>
        <Pre>{NODECORE_QUICKSTART_SNIPPETS.DOCKER}</Pre>
      </Stack>

      {/* Step 5 */}
      <Stack gap={0}>
        <Text component="h2" size="xl" c="white" fw="medium" mb={16}>
          Step 5 — Test the Setup
        </Text>
        <Text size="md" c="textPrimaryMuted" mb={8}>
          Choose endpoint:
        </Text>
        <Stack mb={16}>
          <ul className={classes.bulletList}>
            <li>
              <Text size="md" c="textPrimaryMuted">
                No key: http://localhost:9090/queries/ethereum
              </Text>
            </li>
            <li>
              <Text size="md" c="textPrimaryMuted">
                With key: http://localhost:9090/queries/ethereum/api-key/
                {"<YOUR_KEY>"}
              </Text>
            </li>
          </ul>
        </Stack>
        <Pre>{NODECORE_QUICKSTART_SNIPPETS.CURL}</Pre>
      </Stack>

      {/* Next Steps */}
      <Stack gap={0}>
        <Text component="h2" size="xl" c="white" fw="medium" mb={16}>
          Next Steps
        </Text>
        <Text size="md" c="textPrimaryMuted" mb={8}>
          Manage Access
        </Text>
        <ul className={classes.bulletList}>
          <li>
            <Text size="md" c="textPrimaryMuted">
              Create API Keys — control who can access your NodeCore instance
            </Text>
          </li>
          <li>
            <Text size="md" c="textPrimaryMuted">
              Configure Security — IP restrictions, domain whitelists, method
              filters per key
            </Text>
          </li>
        </ul>
      </Stack>

      {onClose && (
        <Button fullWidth size="lg" onClick={onClose}>
          Got it
        </Button>
      )}
    </Stack>
  );
}
