import { groups } from "../../../db/schema";
import { Group } from "../../../types";
import { db } from "../../../db";
/**
 * Get Group
 *
 * Simulates calling your database and returning a group
 *
 * @param id - The group's id
 */
export async function getGroup(id: string): Promise<Group | null> {
  return db.query.groups.findMany({ where: { id } })
  
  //groups.find((group) => group.id === id) ?? null;
}
}
