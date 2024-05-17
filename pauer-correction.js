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

     this.getJSON = function(fixer)
      {
       // Get copy in JSON pair: element from values_interval list and points determined for the fixer
          let copy = {};
       /* Iterate over the list and get the difference point to start with a good correction and modify if this is copied to
          an external JSON */
          for (let value in values_interval)
          {
           // Squared correction
            copy[value] = ((values_interval * (fixer ** 2)) + (values_interval * fixer) + values_interval.indexOf(value));
          }
          return copy;
      } 
 
};
