const pattern = /^-?(?!0\d)\d{6}$/;

const stringsToCheck = ["123456", "-123456", "-12345", "023456", "-000016"];

for (const str of stringsToCheck) {
  if (pattern.test(str)) {
    console.log(`${str} -> так`);
  } else {
    console.log(`${str} -> ні`);
  }
}
