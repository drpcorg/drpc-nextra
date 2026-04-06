import { Grid } from "@mantine/core";
import classes from "./QueryParams.module.css";
import { QueryParamsList } from "./QueryParamsList";
import { TParamType } from "../types";
import { getParamsType } from "../getParamsType";
import { Text } from "../../Text";
import { ReqResParam } from "./types";

type Props = {
  queryParamsType: TParamType;
  queryParams: ReqResParam[] | null;
  isRESTApi?: boolean;
};

export function QueryParams({
  queryParams,
  queryParamsType,
  isRESTApi,
}: Props) {
  return (
    <Grid gutter={10}>
      <Grid.Col span={12}>
        <Text
          uppercase
          color={"grayLike"}
          size="xs"
          fontWeight="medium"
          component="h2"
        >
          Query params
        </Text>
      </Grid.Col>

      <Grid.Col span={12}>
        <section className={classes.root}>

          <section className={classes.params}>
            <Text color="white" size="sm" fontWeight="medium">
              Parameters
            </Text>
            <Text color="gray" size="xs" italic>
              {getParamsType(queryParamsType)}
            </Text>
          </section>

          {queryParams && queryParams.length > 0 ? (
            <QueryParamsList
              queryParams={queryParams}
              queryParamsType={queryParamsType}
            />
          ) : null}
        </section>
      </Grid.Col>
    </Grid>
  );
}
