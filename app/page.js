import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

export default function List() {
  let name = "하헤헿";
  let url ="ddd"
  return (
    <div>
      <h4 className="red">
        {name}
      </h4>
      <p className="title-sub">
        by dev
      </p>
      <a href={
        {url}
        } 
        style={
        //오브젝트 자료형이라 - 같은거 못씀
        {color:"red",fontSize: '30px'}
        }>링크</a>
    </div>
  )
}
