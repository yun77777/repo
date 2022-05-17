const delay = (sec) => {
    return new Promise((rs, rj) => {
        if (isNaN(sec))
            return rj({ error: true });
        else
            return rs({ error: false });
    });
};

const delayES8 = async (time) => {
    const d = await delay(1000);
    console.log('d ,', d);

    return;
};

const func = () => {
    delayES8(1000)
        .then(() => print())
        .catch((err) => console.log('err: ', err));
};

const print = () => console.log('PRINT');

func();


const p1 = Promise.resolve(30);
const p2 = 42;
const p3 = new Promise((rs, rj) => {
    setTimeout(rs, 100, 'foo');
});

const promises = [];
promises.push(p1);
promises.push(p2);
promises.push(p3);

Promise.all(promises).then((values) => {
    console.log('values: ', values);
});


(function(){
    console.log('Immediately Invoked Function Expression, ' );
})();

