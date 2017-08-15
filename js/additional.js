

function prn(value) {
    let x = 0;
    if (x===0) {
        this.document.write('RESULT:'+'<br>'+value[0]);
         x++;
    }
    for (x === 1; x < value.length;) {
    this.document.write('<br>'+value[x]);
         x++;
    }
}

function count(num) {
    for (let i = 0; i < 1; i++) {
      link(i);
    }
}

function link(init) {
    let y = [];
    y[0] = 'A';
    y[1] = 'B';
    y[2] = 'C';
    if ( init < y.length) {
     prn(y);
    }
}

var start = count();




