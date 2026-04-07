import { Params, type Props as ParamsProps } from "./Params";

type Props = Omit<ParamsProps, "title">;

export function PathParams(props: Props) {
  return <Params {...props} title="Path params" />;
}
