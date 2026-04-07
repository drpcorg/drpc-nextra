import { Group } from "@mantine/core";
import { Fira_Mono } from "next/font/google";
import { RequestParamProp } from "./types";
import classes from "./ParamsList.module.css";
import { Text } from "../../Text";
import { TParamType } from "../types";
import { getParamsType } from "../getParamsType";
import cx from "clsx";

type Props = {
  params: RequestParamProp;
  paramsType: TParamType;
  isChild?: boolean;
};

const fira = Fira_Mono({ subsets: ["latin"], weight: ["400"] });

export function ParamsList({ params, paramsType }: Props) {
  const paramsTypeText = getParamsType(paramsType);
  return (
    <section className={classes.root}>
      {paramsTypeText && <div className={classes.line}>
        <Text color="gray" size="xs" fontWeight="medium" italic>
          {paramsTypeText}
        </Text>
      </div>}

      {/* Iterate through and render each param */}
      {params?.map((param) => (
        <div key={param.paramName} className={classes.line}>
          <Group gap={10} align="center">
            <Text color="white" size="sm" fontWeight="medium">
              {param.paramName}
            </Text>
            <Text color="gray" size="xs" italic>
              {param.type}
            </Text>
          </Group>

          <Group>
            <Text color="grayLike" size="sm">
              {param.paramDescription}
            </Text>
          </Group>

          {/* If param has enum values, render them */}
          {param.paramEnum ? (
            <section className={classes.paramEnums}>
              <ul className={classes.paramEnumsUl}>
                {param.paramEnum.map((enumItem) => (
                  <li key={enumItem.value}>
                    <Group gap={10} align="center">
                      <Text
                        color="grayLike"
                        size="xs"
                        className={fira.className}
                      >
                        <Text
                          color="grayLike"
                          size="xs"
                          capitalize
                          className={fira.className}
                        >
                          {enumItem.value}
                        </Text>{" "}
                        {enumItem.isDefault ? "[default]" : ""}{" "}
                        {`- ${enumItem.description}`}
                      </Text>
                    </Group>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* If param has children params, render them */}
          {param.childrenParams ? (
            <div className={cx(classes.line, classes.children)}>
              <ParamsList
                params={param.childrenParams}
                paramsType={paramsType}
                isChild
              />
            </div>
          ) : null}
        </div>
      ))}
    </section>
  );
}
