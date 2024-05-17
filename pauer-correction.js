/* Library for correction using mediation between extremes © 2024 NicoPauer
 Object to encapsule the corrector logic and data for security reasons */

var corrector = function(start, end)
{
    /* list that have opposite values between extremes 
        e.g [1, -1] or [1, -3, 3, -1]
        */
      let values_interval = [start, end];
      // Each call to the method fixing with the two new values improve precisition
      this.fixing = function (value, different_value)
      {
        // Add values in the middle of the list
        values_inertval[((values_interval.length - 1) / 2)] = value;
        values_inertval[(((values_interval.length - 1) / 2) + 1)] = different_value; 
      }
      
};
