// this file is used to define the content types and provide utility functions to check the current sidebar tab. It helps to avoid repetitive string comparisons throughout the codebase.

const CONTENT_TYPES = Object.freeze({
  BIBLE: "bible",
  SONG: "songs",
  TEXT: "text",
  SCHEDULE: "schedule",
});

function isBibleTab(tab = sidebarTab) {
  return tab === CONTENT_TYPES.BIBLE;
}

function isSongTab(tab = sidebarTab) {
  return tab === CONTENT_TYPES.SONG;
}

function isTextItem(item) {
  return !!(
    item &&
    (item.contentType === CONTENT_TYPES.TEXT ||
      item.kind === CONTENT_TYPES.TEXT)
  );
}

function isTextTab(tab = sidebarTab) {
  return tab === CONTENT_TYPES.TEXT;
}

function isScheduleTab(tab = sidebarTab) {
  return tab === CONTENT_TYPES.SCHEDULE;
}
