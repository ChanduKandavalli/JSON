console.clear()

var obj={
  name:"siri",
  age:22
}
var strJson=JSON.stringify(obj)
console.log(strJson)
console.log(JSON.parse(strJson))

var arr=[
{
  name:"siri",
  age:22
},
{
  name:"susi",
  age:23
},
{
  name:"siri",
  age:22
},
}
  console.log(arr[1])