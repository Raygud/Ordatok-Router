import { data } from '../Sayings'
import { UniqueKey } from '../UniqueKey'

export default function Letter() {
  
  let url = window.location.href
  let LetterFind = url.substr(url.length-1,url.length)
  console.log(LetterFind)
  const Filtered = data.filter((CurrentWord) => CurrentWord.startsWith(LetterFind));
  console.log(Filtered)
  let Sayings = Filtered

  for(let i = 0; i < Filtered.length; i++){
    let Key = UniqueKey(Filtered[i])
    console.log(Key)
  }

  return (
    <ul>
    {Sayings.map((item,index)=>{
        return <li><a href={item.replace(/\s/g, "_")} key={UniqueKey(Filtered[index],index)}>{item}</a></li>
    })}
    </ul>
  );
}