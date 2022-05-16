// const func = () => {
//     console.log('print in a module')
// }


var obj = {
    cal : function() {
        console.log('print in a module1')
    },
    sub : function() {
        console.log('print in a module2')
    },
}

module.exports = { obj }