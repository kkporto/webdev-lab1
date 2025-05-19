import { Link } from 'react-router-dom'; // <-- This is the missing import
 
export default function TOC() {
  return (
    <ul>
      {/* <li><Link to="/Lab 1">Labs</Link></li> */}
       <li><Link to="/Labs/allLabs">Labs main page</Link></li>
      <li><Link to="/Labs/Lab1">Assignment 1</Link></li>
      <li><Link to="/Labs/Lab2">Assignment 2</Link></li>
      <li><Link to="/Labs/Lab3">Assignment 3</Link></li>
      <li><Link to="/Kambaz">Kambaz</Link></li>
    </ul>
  );
}