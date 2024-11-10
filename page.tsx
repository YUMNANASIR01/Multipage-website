import Link from 'next/link';
import React from 'react'
const data = await  fetch("https://jsonplaceholder.typicode.com/users")
const  person :any = await data.json()
console.log(person.data[1].name);


async function Person() {
    console.log("❤","static render");
    
  return (
    <div className='h-screen flex'>
     <Link href={`/person/${person.data[1].name}`}>
     <h1>I m {person.data[1].name} static route</h1></Link>
    </div>
  )
}
export default  Person