import { Grid } from "@mantine/core";
import classes from "./Params.module.css";
import { ParamsList } from "./ParamsList";
import { TParamType } from "../types";
import { getParamsType } from "../getParamsType";
import { Text } from "../../Text";
import { ReqResParam } from "./types";

export type Props = {
  paramsType: TParamType;
  params: ReqResParam[] | null;
  title: string;
};

export function Params({
  params,
  paramsType,
  title,
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
          {title}
        </Text>
      </Grid.Col>

      <Grid.Col span={12}>
        <section className={classes.root}>

          <section className={classes.params}>
            <Text color="white" size="sm" fontWeight="medium">
              Parameters
            </Text>
            <Text color="gray" size="xs" italic>
              {getParamsType(paramsType)}
            </Text>
          </section>

          {params && params.length > 0 ? (
            <ParamsList
              params={params}
              paramsType={paramsType}
            />
          ) : null}
        </section>
      </Grid.Col>
    </Grid>
  );
}
