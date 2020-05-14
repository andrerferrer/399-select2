// 3. write some code in the js file
//   3.1. import the plugin
//   3.2. create the function
//   3.3. export the function

import $ from 'jquery';
// This is when we want to import one specific class
// import Select2 from 'select2';

// this is when we want to import the default code
import 'select2';

const initSelect2 = () => {
  // $('.select2').select2(); // (~ document.querySelectorAll)
  $('.select2').select2({ width: '100%' });

};

export { initSelect2 };
