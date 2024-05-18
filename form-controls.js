// Modulue for handle forms of this web © 2024 NicoPauer

// Abstract logic

function convertHex(integerNumber)
{
   // Give the hexadecimal convertion of the integer gived as parameter
  /* 

    Heleped by Google Gemini:

        Prompt: "How convert a integer number in a hexadecimal number?"
        
      1. Manual Division Method:

        This method involves repeated division by 16, the base of the hexadecimal system. Here's a step-by-step explanation:

          Take the integer you want to convert.
          
          Divide the integer by 16.
          
          The remainder of this division is your rightmost hexadecimal digit. Convert this remainder to a hexadecimal digit (0-9 for decimal values, A-F for 10-15).
          
          The quotient becomes the new dividend for the next step.
          
          Repeat step 2 until the quotient becomes 0.
        
    The hexadecimal representation of your original number is the sequence of remainders you obtained, in reverse order
    
    */
  // Hexadecimal digits
  let digits = [(integerNumber % 16)];
 // Convertion result
  let convertion = '';
 // This help to turn decimal results in hexadecimal digits
  dict = {15 : 'f', 14 : 'e', 13 : 'd', 12 : 'c', 11 : 'b', 10 : 'a', 9:'9', 8:'8', 7:'7', 6:'6', 5:'5', 4:'4', 3:'3', 2:'2', 1:'1', 0:'0'};
 // Get the hexadecimal digits
  let quotient = 16;
  
  while (quotient != 0)
  {
      digits.push(dict[(integerNumber % quotient)]);
      quotient = (integerNumber / quotient);
  }
 // Copy from digits list in revers order to convertion result
  for (let index = (digits.length - 1); index >= 0; index--)
  {
      convertion += digits[index];
  }
// Give the resultant hexadecimal text value of the convertion  
  return convertion;
}

function difHex(text_1, text_2)
{
  // With two hexadecimal strings calc the difference between them and give the hexadecimal string of the result
  
  text_1 = text_1.replace("#", "");

  text_2 = text_2.replace("#", "");

  result = convertHex(parseInt(text_1, 16) - parseInt(text_2, 16));
  
  return result;
}

function getColors(pickers)
{
    // Get color from color picker input list and return a haxadecimal string color codes list
    let colors = [];

    for (color in pickers)
    {
      // The values by default is a string with the color in hexadecimal format
        colors.push(color.value);
    }

    return colors;
}

function complementary(hexCode)
{
    // Return hexadecimal color code of the complementary color passed as parameter
      let code = "#ffffff";
    /* 
    
    By definition in the chromatic circle could look that the sum of two color give white 

        For example: 
        
        The complementary color of yellow is blue, yellow has code #ffff00 and blue has code #0000ff sum that and 
        get the code of the white #ffffff. for get the other only make the difference between white and the gived 
        hexCode in this case #ffffff - #0000ff = #ffff00, #ffff00 is complementary to #0000ff.
        
      */
  
    code = "#" + difHex(code, hexCode);
  
    return code;
}

// Graphical interface logic
