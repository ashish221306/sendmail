const newtwork=require('network');
const colors=require('colors');

newtwork.get_public_ip((err,ip)=>{
console.log('public ip is :'+(err || ip).green);
})

newtwork.get_private_ip((err,ip)=>{
    console.log('private ip is :'+(err|| ip).green);
})
newtwork.get_gateway_ip((err,ip)=>{
    console.log('your gateway ip is :'+(err || ip).blue);
})

