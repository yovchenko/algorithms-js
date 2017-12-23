module.exports = {
    openOrSenior: function(data){   
    const output = [];
    data.forEach(function (el) {
           if(el[0] >= 55 && el[1] > 7) output.push('Senior');
           else output.push('Open');
});
return output;
}
};