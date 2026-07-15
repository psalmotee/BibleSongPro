function getItemType(item) {
  if (!item) return null;

  if (item.type) return item.type;

  if (item.version) return "bible";

  if (item.book && item.chapter) return "bible";

  if (item.text !== undefined) return "song";

  return "song";
}

function isBibleItem(item) {
  return getItemType(item) === "bible";
}

function isSongItem(item) {
  return getItemType(item) === "song";
}

function isTextItem(item) {
  return getItemType(item) === "text";
}
