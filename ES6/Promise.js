//Promise
const myPromise = new Promise((resolve, reject) => {}); //asyncronous action (in background)

//Promise Three States
    //Pending: No answer
    //Fufilled: use resolve()
    //Rejected: use reject()

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer = true;
        
    if(responseFromServer) {
        resolve('success'); //if true end promise with success
    } else {  
        reject('failed'); //if false end promise with failure
    }
});

//Utilizing Promisies
//You have to use "[promise].then"; only calls if resolved
makeServerRequest.then((result)=>console.log(result)) //will return success

//Handling Rejections
//You have to use [promise].catch; on
