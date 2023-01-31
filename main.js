// Print all possible words from phone digits problem solver
// Inspired by https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/2947865/js-intuitive-and-easiest-code-you-can-find/?languageTags=javascript

var letterCombinations = function (digits) {
  if (!digits) return [];
  const kb = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let str = [],
    res = [];
  BT();
  return res;
  function BT(idx=0) {
    if (idx === digits.length) {
      res.push(str.join(""));
      return;
    }
    let digit = digits[idx], charStr = kb[+digit];
    for (let i = 0; i < charStr.length; i++) {
      str.push(charStr[i]);
      BT(idx + 1);
      str.pop();
    }
  }
};

var dictionary = new Typo( "en_US" );

var processPhoneAndPrintResult = function (digits) {
  var result_raw = letterCombinations(digits);
  console.log(result_raw);
  var result = result_raw.filter(function(el) {
    return dictionary.check(el);
  });
  var result_el = document.getElementById("result");
  result_el.textContent = '';
  if (result.length === 0) {
    result_el.append('Result is empty. Make sure that your number is not contain 0 or 1 digits');
    return;
  }
  result_el.append(result);
}


document.addEventListener('DOMContentLoaded', function(){

  document.getElementById("submit_button").addEventListener("click",function(){
    var digits = document.getElementById("input_digits").value;
    processPhoneAndPrintResult(digits);
  });

  document.getElementById("example_button").addEventListener("click",function(){
    var sample_number = '4663';
    document.getElementById("input_digits").value = sample_number;
    processPhoneAndPrintResult(sample_number);
  });
});
