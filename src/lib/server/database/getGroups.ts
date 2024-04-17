import { groups } from "../../../db/schema";
import { Group } from "../../../types";

/**
 * Get Groups
 *
 * Simulates calling your database and returning a list of groups
 *
 * @param ids - The group ids
 */
export async function getGroups(ids: string[]): Promise<Group[]> {
  return groups.filter((group: Group) => ids.includes(group.id));
  
}
