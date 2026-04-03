import { Grid } from "@mantine/core";
import classes from "./PathParams.module.css";
import { PathParamsList } from "./PathParamsList";
import { TParamType } from "../types";
import { getParamsType } from "../getParamsType";
import { Text } from "../../Text";
import { ReqResParam } from "./types";

type Props = {
  pathParamsType: TParamType;
  pathParams: ReqResParam[] | null;
  isRESTApi?: boolean;
};

export function PathParams({
  pathParams,
  pathParamsType,
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
          Path params
        </Text>
      </Grid.Col>

      <Grid.Col span={12}>
        <section className={classes.root}>
          {isRESTApi ? null : (
            <>
              <div className={classes.line}>
                <Text color="white" size="sm" fontWeight="medium">
                  id
                </Text>
                <Text color="gray" size="xs" italic>
                  integer
                </Text>
              </div>
              <div className={classes.line}>
                <Text color="white" size="sm" fontWeight="medium">
                  jsonrpc
                </Text>
                <Text color="gray" size="xs" italic>
                  string
                </Text>
              </div>
              <div className={classes.line}>
                <Text color="white" size="sm" fontWeight="medium">
                  method
                </Text>
                <Text color="gray" size="xs" italic>
                  string
                </Text>
              </div>
            </>
          )}

          <section className={classes.params}>
            <Text color="white" size="sm" fontWeight="medium">
              Parameters
            </Text>
            <Text color="gray" size="xs" italic>
              {getParamsType(pathParamsType)}
            </Text>
          </section>

          {pathParams && pathParams.length > 0 ? (
            <PathParamsList
              requestParams={pathParams}
              requestParamsType={pathParamsType}
            />
          ) : null}
        </section>
      </Grid.Col>
    </Grid>
  );
}
