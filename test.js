//const kaaa = (arr) => {
 // let found = [];
 // let a = [];
 // let count;
  //arr.sort();
 // count = arr.map(x =>  );
  //console.log('countof x: ', count)
  //console.log('sorted: ', arr);
 // arr.map(number => {
    //let currNum = arr[number];
    //let nextNum = arr[number+1]
  //console.log('count:', count,'number: ', number);
  //}).filter( number => console.log('mynumber: ', number));

  //console.log('found: ', found,'a: ', a);
//};

//kaaa([6,5,1,1,1,22,99,6,70]);

let input = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20,3,3,4,4,4,67,67];

function clean(array) {
  let arr = array.sort(function (a, b) {
    return a - b;
  });
  let counter = 0;
  arr.forEach((num, i) => {
    if (arr[i] === arr[i + 1]) {
      counter++;
    } else if (arr[i] != arr[i + 1] && arr[i - 1]) {
      arr[i - counter] = arr.slice(i - counter, i + 1);

      counter = 0;
    }
  });

  arr.forEach(function (num, ind) {
    while (arr[ind][0] === arr[ind + 1]) {
      arr.splice(ind + 1, 1)
    }
  }) 

  return arr.map(a => {
    if (a.length === 1) {
      return Number(a);
    } else {
      return a;
    }
  })
}

clean(input);