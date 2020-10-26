function truncateString(str, num) {
  if(str.length > num){ return str.substring(0, num).concat('...')}
  else{return str}
}

truncateString("A-", 1);
