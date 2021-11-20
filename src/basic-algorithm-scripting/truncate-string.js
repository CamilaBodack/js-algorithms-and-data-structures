function truncateString(str, num) {
  return (str.length > num) ? str.substring(0, num).concat('...') : str
}

truncateString("A-", 1);
