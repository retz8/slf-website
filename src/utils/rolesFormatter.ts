export function generateFormattedRoles(roles: string[]) {
  return roles.map((role) => `${role}`).join(", ");
}
