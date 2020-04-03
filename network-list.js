//to know wifi connected devices

const netlist=require('network-list');

netlist.scanEach({},(err,obj)=>{
    console.log('scanEach :'+obj);
})

netlist.scan({},(err,arr)=>{
    console.log('scan :'+arr);
})