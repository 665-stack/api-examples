const bondCode = ` I am Fake James bond . My new code is: 00${7 + 1 + 2}`
console.log('bondCode -- ', bondCode)
//======================
const data = { result: [{ userName: { title: 'Mr.', name: "sakib khan" } }] }
console.log("access sakib khan -- ", data.result[0].userName.name)
//================
const p = [1, 2, 3];
const q = p.map(n => Math.pow(n, 3));
console.log('q -- ', q)
//=================
const info = { name: "", phoneNumber: null };
console.log(JSON.stringify(info));

//==========
const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array));
//================
console.log('throw array -- ', JSON.stringify({ eventName: "birthday", date: new Date().tomorrow() }))