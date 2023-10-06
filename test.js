console.log('person1: shows ticket');
console.log('person2: show ticket');

const preMovie = async ()=> {
    const promiseWifeBringTicket = new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve('ticket') 
        }, 3000);

    })
    const getPopcorn = new Promise((resolve, reject) => {
        resolve('popcorn');
    })
    const addbutter = new Promise((resolve, reject) => {
        resolve('butter');
    })
    const getColdDrinks = new Promise((resolve, reject) => {
        resolve('cold-drinks')
    })

    let ticket = await promiseWifeBringTicket;

    let [pop , butter, cock] = await Promise.all([getPopcorn , addbutter,getColdDrinks]);
    console.log(`${pop}, ${butter}, ${cock}`);

    return ticket;

}
preMovie().then((m)=>console.log(m));


console.log('person4: shows ticket');
console.log('person5: show ticket');