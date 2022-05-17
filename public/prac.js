(async function(w) {
    func1 = {
        inner1: function() {
            return new Promise((rs, rj) => {
                console.log('inner1');
                return rs({error: false});
            });
        },
        inner2: function() {
            return new Promise((rs, rj) => {
                console.log('inner2');
                return rs({error: false});
            })
        }
    },
    func2 = {
        inner3: function() {
            return new Promise((rs, rj) => {
                console.log('inner3');
                return rs({error: false});
            })
        }
        
    },
    func3 = {
        iter: async function() {
            // return new Promise((rs, rj) => {
                console.log('inner4');
                let arr = [];

                for(let i = 0; i < 5; i++) {
                    arr.push(i);
                }

                return Promise.all(arr).then((result)=>{
                    console.log('result: ', result);

                    return {error: false, result: result};
                });

            // })
        },
        loop : function(param) {
            return new Promise((rs, rj) => {
                try{
                    console.log('param: ', param);
                    for(let p of param.result) {
                        console.log('p: ', p);
                    }
                } catch(e) {
                    console.error(e);
                }
               
                return rs({error: false});
            })
        }
        
    }

    const inner1 = await func1.inner1();
    console.log(inner1);

    const inner2 = await func1.inner2();
    console.log(inner2);

    /*
    try {
        const inner1 = JSON.parse(inner1); // make the error executed on purpose
    } catch(err) {
        // console.log('err:',err);
        console.error(err);
    }
    */

    const inner3 = await func2.inner3();
    console.log(inner3);

    const iter = await func3.iter();
    console.log(iter);

    const loop = await func3.loop(iter);
    console.log(loop);

})(window);
