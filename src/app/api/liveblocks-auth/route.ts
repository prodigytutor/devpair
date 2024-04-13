import { Liveblocks } from "@liveblocks/node";
import { auth, currentUser } from "@clerk/nextjs";

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_KEY || '',
});

export async function POST(request: Request) {
  const authorization = await auth();
  const user = await currentUser();

//   console.log("AUTH_INFO", {
//     authorization,
//     user,
//   });

  if (!authorization || !user) {
    return new Response("Unauthorized", { status: 403 });
  }

  const { room } = await request.json();


//   console.log("AUTH_INFO", {
//     room,
//     board,
//     boardOrgId: board?.orgId,
//     userOrgId: authorization.orgId,
//   });



  const userInfo = {
    name: user.firstName || "Team-mate",
    picture: user.imageUrl!,
  };

//   console.log({ userInfo });

  const session = liveblocks.prepareSession(user.id, { userInfo });

  if (room) {
    session.allow(room, session.FULL_ACCESS);
  }

  const { status, body } = await session.authorize();
//   console.log({ status, body }, "ALLOWED");
  return new Response(body, { status });
}
