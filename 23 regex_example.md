####  date range format MM/DD/YYYY hh:mm AM - hh:mm AM 
  
      let str = "03/09/1999 23:12 PM - 32:35 AM";
      const patt = new RegExp("[0-9]{2}\/[0-9]{2}\/[0-9]{4}[' ']{1}[0-9]{2}[:]{1}[0-9]{2}[' ']{1}(AM|PM)[' ']{1}[-]{1}[' ']{1}[0-9]{2}[:]{1}[0-9]{2}[' '](AM|PM){1}");
      let res = patt.test(str);
      console.log(res);
