let isVowel theChar => switch theChar {
  | 'a' | 'e' | 'i' | 'o' | 'u' | 'y' => true
  | _ => false
  };

isVowel 'a';

isVowel 'b';

let area ::length ::breadth => {
  length * breadth;
};

area length::10 breadth::5;

let isMorning = true;

let data = switch isMorning {
  | true => "Good morning!"
  | false => "Hello!"
  };

/* Tuples */

let getTuple () => {
  let x = 1;
  let y = "hello";
  (x, y)
};
