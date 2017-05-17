

function prn(value) {
    if (value===0){
        document.write('RESULT:'+'<br>'+value);
    }
    else {
        document.write('<br>'+value);
    }
}

function count(num) {
    for (let i = 0; i < 100; i++) {
      link(i);
    }
}

function link(init) {
    if ( init > 50 ) {
     prn(init);
    }
}

var start = count();
