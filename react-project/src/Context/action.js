

export const setinputpin=(value)=>{
   return {type:"setinputpin",playload:value}
}

export const setpin=(value)=>{
    return ({type:"setpin",playload:value})
}
export const setcity=(value)=>{
    return ({type:"setcity",playload:value})
}
export const setcartLength=(value)=>{
    return ({type:"setcartLength",playload:value})
}
export const toggleis=(value)=>{
    console.log(value.iss);
    return ({type:"toggleis",playload:value.iss})
}