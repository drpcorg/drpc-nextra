import { Grid } from "@mantine/core";
import classes from "./RequestParams.module.css";
import { RequestParamsList } from "./RequestParamsList";
import { TParamType } from "../types";
import { getParamsType } from "../getParamsType";
import { Text } from "../../Text";
import { ReqResParam } from "./types";

type Props = {
  requestParamsType: TParamType;
  requestParams: ReqResParam[] | null;
};

export function RequestParams({ requestParams, requestParamsType }: Props) {
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
          Request params
        </Text>
      </Grid.Col>

      <Grid.Col span={12}>
        <section className={classes.root}>
          <section className={classes.params}>
            <Text color="white" size="sm" fontWeight="medium">
              Parameters
            </Text>
            <Text color="gray" size="xs" italic>
              {getParamsType(requestParamsType)}
            </Text>
          </section>

          {requestParams && requestParams.length > 0 ? (
            <RequestParamsList
              requestParams={requestParams}
              requestParamsType={requestParamsType}
            />
          ) : null}
        </section>
      </Grid.Col>
    </Grid>
  );
}
