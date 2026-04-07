import { Params, type Props as ParamsProps } from "./Params";

type Props = Omit<ParamsProps, "title">;

export function QueryParams(props: Props) {
  return <Params {...props} title="Query params" />;
}
