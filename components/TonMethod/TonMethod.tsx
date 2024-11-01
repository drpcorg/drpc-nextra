import GenericMethodRest, {
  GenericMethodProps,
} from "../GenericMethod/GenericMethod";

export default function TonMethod(props: GenericMethodProps) {
  return <GenericMethodRest {...props} isRESTApi />;
}
