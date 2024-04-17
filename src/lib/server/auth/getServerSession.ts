import type { GetServerSidePropsContext } from "next";
import { getServerSession as getNextAuthServerSession } from "next-auth/next";
import { authOptions } from "../../../app/api/auth/[...nextauth]"
"../../app/api/auth/[...nextauth].ts"

export function getServerSession(
  req: GetServerSidePropsContext["req"],
  res: GetServerSidePropsContext["res"]
) {
  return getNextAuthServerSession(req, res, authOptions);
}
