import React,{useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom';

const FilterSort = () => {

const [searchParams, setSearchParams]=useSearchParams();
const initialGenreParams=searchParams.getAll("genre");
const initialSortParams=searchParams.getAll("sortBy");
console.log(initialSortParams)

const [category, setCategory]=useState(initialGenreParams || []);
const [sortBy, setSortBy]= useState( initialSortParams[0] || "");




const handleGenreChange=(e)=>{
  const option=e.target.value;
  let newCategory=[...category];
  if(category.includes(option)){
    newCategory.splice(newCategory.indexOf(option),1);
  }else{
    newCategory.push(option);
  }
  setCategory(newCategory);

}

const handleSortBy=(e)=>{
   setSortBy (e.target.value)
 }
 // console.log(category);

useEffect(()=>{
    if(category || sortBy){
        setSearchParams({genre:category, sortBy:sortBy});
    }
}, [category, setSearchParams, sortBy]);
// console.log(searchParams.getAll("genre"));
console.log(sortBy);
console.log(searchParams.getAll("genre"));

  return (
    <div>
     <h3>Filter</h3>
     <div>
        < input type="checkbox" defaultChecked={category.includes('K-Pop')} value="K-Pop" onChange={handleGenreChange}/>
        <label>K-Pop</label>
     </div>
     <div>
        < input type="checkbox" defaultChecked={category.includes('Country')} value="Country" onChange={handleGenreChange}/>
        <label>Country</label>
     </div>
     <div>
        < input type="checkbox" defaultChecked={category.includes('Pop')} value="Pop" onChange={handleGenreChange}/>
        <label>Pop</label>
     </div>
     {/* <div>
        < input type="checkbox" value="Hard-Rock" onChange={handleGenreChange}/>
        <label>Hard-Rock</label>
     </div> */}
     <div>
        < input type="checkbox" defaultChecked={category.includes('Holiday')} value="Holiday" onChange={handleGenreChange}/>
        <label>Holiday</label>
     </div>
     {/* <div>
        < input type="checkbox" value="Classical Crossover" onChange={handleGenreChange}/>
        <label>Classical Crossover</label>
     </div>
     <div>
        < input type="checkbox" value="Singer/Songwriter" onChange={handleGenreChange}/>
        <label>Singer/Songwriter</label>
     </div> */}
     <div>
        < input type="checkbox" defaultChecked={category.includes('Heavy Metal')} value="Heavy Metal" onChange={handleGenreChange}/>
        <label>Heavy Metal</label>
     </div>
     <h3>Sort</h3>

<div onChange={handleSortBy}>
  <div>
    <input type="radio" value="acc" name="sortBy" defaultChecked={sortBy==='asc'}/>
    <lable>Accending</lable>
  </div>

  <div>
    <input type="radio" name="sortBy" value="desc"  defaultChecked={sortBy==='desc'}/>
    <lable>Descending</lable>
  </div>
</div>
    </div>
  )
}

export default FilterSort
