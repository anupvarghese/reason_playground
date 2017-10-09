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
