import { colors } from "../../../data/colors";
import { users } from "../../../db/schema";
import { User } from "../../../types";
import { getRandom } from "../utils";
import { eq } from "drizzle-orm";
/**
 * Get User
 *
 * Simulates calling your database and returning a user with a seeded random colour
 *
 * @param userId - The user's id
 */

const colors = ['red', 'blue', 'green', 'yellow', 'purple']; // List of color names

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length); // Generate a random index
  return colors[randomIndex]; // Return the color at the random index
};

export async function getUser(userId: string): Promise<User | null> {
  const user = users.find().where(eq(users.id, userId));
  
  //find((user) => user.id === userId);

  if (!user) {
    console.warn(`
ERROR: User "${userId}" was not found. 

Check that you've added the user to data/users.ts, for example:
{
  id: "${userId}",
  name: "David Parker",
  avatar: "https://liveblocks.io/avatars/avatar-7.png",
  groupIds: ["product", "engineering", "design"],
},
 
`);
    return null;
  }

  const color = getRandomColor();

  return { color, ...user };


//select a random value from a list

}
