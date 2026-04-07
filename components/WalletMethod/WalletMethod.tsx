import GenericMethod, {
  GenericMethodProps,
} from "../GenericMethod/GenericMethod";

type Props = Omit<
  GenericMethodProps,
  "network" | "isRESTApi" | "responseParamsDescription"
>;

export default function WalletMethod(props: Props) {
  return (
    <GenericMethod
      isRESTApi={true}
      network=""
      responseParamsDescription=""
      {...props}
    />
  );
}
