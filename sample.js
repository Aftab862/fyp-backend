// function encrypt(text, s)
// {
//     let result=""
//     for (let i = 0; i < text.length; i++)
//     {
//         let char = text[i];
//        // if (char.toUpperCase(text[i]))
//       //  {
//         //    let ch =  String.fromCharCode((char.charCodeAt(0) + s-65) % 26 + 65);
//         //    result += ch;
//       //  }
//       //  else
//      //   {
//             let ch = String.fromCharCode((char.charCodeAt(0) + s-97) % 26 + 97);
//             result += ch;
//      //   }
//     }
//     return result;
// }

// let text = "aftab";
// let s = 4;
// console.log("Text  : " + text);
// console.log("Shift : " + s);
// console.log("Cipher: " + encrypt(text, s));
//==========================================================



// function myFunction() {
//     var y ="aftab";

//     a = "abcdefghijklmnopqrstuvwxyz";
//     b = "йцфщзлждюбичяњљжæøñпьџoћвच";
//     c = new Array();

//     for (i = 0; i < 26; i++) {
//         c[a.charAt(i)] = b.charAt(i);
//         c[a.charAt(i).toUpperCase()] = b.charAt(i).toUpperCase();
//     }
//     a = "";

//     for (i = 0; i<y.length; i++) {
//         b = y.charAt(i);
//         a += (b >= 'A' && b <= 'Z' || b >= 'a' && b <= 'z' ? c[b] : b);
//     }
//    console.log(a);
//    console.log(c);

// }
// myFunction()


