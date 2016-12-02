export function unixTimeToString(time) {
  return new Date(time).toLocaleString();
}

export function hideElement(shouldHide) {
  if (shouldHide) {
    return 'hidden';
  } else {
    return '';
  }
}
