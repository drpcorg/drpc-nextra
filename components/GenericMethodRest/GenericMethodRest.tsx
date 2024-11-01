import { Inter } from "next/font/google";
import { Grid, Group } from "@mantine/core";
import { CodeSnippetObject, TParamType } from "./types";
import React from "react";
import { Text } from "../Text";
import { UseCases } from "./useCases/UseCases";
import { Constraints } from "./constraints/Constraints";
import { GetStarted } from "./getStarted/GetStarted";
import { RequestSnippetSelectors } from "./snippets/RequestSnippetSelectors";
import { RequestSnippet } from "./snippets/RequestSnippet";
import { RequestResponseJSON } from "./params/RequestResponseJSON";
import Head from "next/head";
import { ReqResParam } from "./params/types";
import { RequestParams } from "./params/RequestParams";
import { ResponseParams } from "./params/ResponseParams";

const inter = Inter({ subsets: ["latin"] });

export type GenericMethodProps = {
  // Simple types
  method: string;
  network: string;
  cu: number;
  description: string;
  useCases: string[];
  constraints: string[];
  responseJSON: string;

  // Complex types
  codeSnippets: CodeSnippetObject[];
  requestParams: ReqResParam[];
  requestParamsType: TParamType;

  responseParams: ReqResParam[];
  responseParamsType: TParamType;
  responseParamsDescription?: string;

  // Replace code snippets URL with different URL
  replaceCodeSnippetsURLFrom?: string;
  replaceCodeSnippetsURLTo?: string;
};

export type GenericMethodPropsReplacing = Pick<
  GenericMethodProps,
  "replaceCodeSnippetsURLFrom" | "replaceCodeSnippetsURLTo"
> & {
  network?: string;
};

export default function GenericMethodRest({
  method,
  network,
  cu,
  description,
  useCases,
  constraints,
  codeSnippets,
  responseJSON,
  requestParams,
  requestParamsType,
  responseParams,
  responseParamsType,
  responseParamsDescription,
  replaceCodeSnippetsURLFrom,
  replaceCodeSnippetsURLTo,
}: GenericMethodProps) {
  const [snippet, setSnippet] = React.useState<CodeSnippetObject["language"]>(
    codeSnippets?.[0]?.language || null
  );

  const snippetCode = React.useMemo(() => {
    const codeSnippetString =
      codeSnippets.find((s) => s.language === snippet)?.code() || null;
    // Replace the URL in the code snippet if the URL is provided
    // For identical cases such as Optimism and Ethereum, we can replace the URL
    if (
      codeSnippetString &&
      replaceCodeSnippetsURLFrom &&
      replaceCodeSnippetsURLTo
    ) {
      return codeSnippetString.replaceAll(
        replaceCodeSnippetsURLFrom,
        replaceCodeSnippetsURLTo
      );
    }
    return codeSnippetString;
  }, [
    codeSnippets,
    snippet,
    replaceCodeSnippetsURLFrom,
    replaceCodeSnippetsURLTo,
  ]);

  const snippetLanguage = React.useMemo(() => {
    return codeSnippets.find((s) => s.language === snippet)?.language || null;
  }, [codeSnippets, snippet]);

  const metaNetwork = React.useMemo(() => {
    // Capitalize the first letter of the network
    return network.charAt(0).toUpperCase() + network.slice(1);
  }, [network]);

  return (
    <>
      <Head>
        <title>{`${method} RPC Method | ${metaNetwork}`}</title>
        <meta
          name="description"
          content={`Explore ${method} RPC Method use cases, constraints, and examples to get started.`}
        ></meta>
      </Head>

      {/* Note: <main> already has pt 1rem, so we add 14px to match 30px from the design */}
      <Grid className={inter.className} gutter={20} pt={14}>
        <Grid.Col span={12} pt={0}>
          <Group justify="start" mb={10}>
            <Text fontWeight="semibold" size={"lg"}>
              {method} - <Text capitalize>{network}</Text>{" "}
              <Text opacity={0.5}>[Value: {cu}CU]</Text>
            </Text>
          </Group>

          <Group justify="start">
            <Text size="sm" color="gray">
              {description}
            </Text>
          </Group>
        </Grid.Col>

        <Grid.Col span={12}>
          <Grid>
            <Grid.Col
              span={{
                base: 12,
                md: 6,
              }}
            >
              <UseCases list={useCases} />
            </Grid.Col>
            <Grid.Col
              span={{
                base: 12,
                md: 6,
              }}
            >
              <Constraints list={constraints} />
            </Grid.Col>
          </Grid>
        </Grid.Col>

        <Grid.Col span={12}>
          <GetStarted />
        </Grid.Col>

        <Grid.Col span={12}>
          <RequestSnippetSelectors
            snippets={codeSnippets || []}
            snippet={snippet}
            setSnippet={setSnippet}
          />
        </Grid.Col>

        <Grid.Col span={12}>
          <RequestSnippet snippet={snippetCode} language={snippetLanguage} />
        </Grid.Col>

        <Grid.Col span={12}>
          <RequestResponseJSON json={responseJSON} />
        </Grid.Col>

        <Grid.Col span={12}>
          <RequestParams
            requestParams={requestParams}
            requestParamsType={requestParamsType}
          />
        </Grid.Col>

        <Grid.Col span={12}>
          <ResponseParams
            responseParams={responseParams}
            responseParamsType={responseParamsType}
            responseParamsDescription={responseParamsDescription}
          />
        </Grid.Col>
      </Grid>
    </>
  );
}
