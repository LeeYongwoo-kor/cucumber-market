import useUser from "@libs/client/useUser";

export default function CustomUser(myAuth: any) {
  const PUBLIC_PAGE: readonly string[] = ["/enter"];
  const { user } = useUser(PUBLIC_PAGE);

  return null;
}
