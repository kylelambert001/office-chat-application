export function truncateStr(str, words) {
  if (typeof str !== "string") return;
  return str.split(" ").slice(0, words).join(" ") + "...";
}

export function getUserInitial(user) {
  if (typeof user !== "string") return;
  return user.slice(0, 1).toUpperCase();
}
