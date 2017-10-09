let isVowel = fun theChar => switch theChar {
  | 'a' | 'e' | 'i' | 'o' | 'u' | 'y' => true
  | _ => false
  };

isVowel 'a';

isVowel 'b';

