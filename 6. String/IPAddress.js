// LeetCode 1108 — Defanging an IP Address

function defangIPaddr(address) {
  let answer = "";

  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") {
      answer += "[.]";
    } else {
      answer += address[i];
    }
  }

  return answer;
}
