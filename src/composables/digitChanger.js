export function digitChanger(string) {
  var id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return string.replace(/[0-9]/g, function (w) {
    return id[+w];
  });
}
// test
