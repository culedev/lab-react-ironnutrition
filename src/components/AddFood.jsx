import { Divider, Input } from 'antd';
import { useState } from 'react';

const AddFood = ({addNewFood}) => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const handleName = (event) => {
        setName(event.target.value);
      };
   
    const handleImage = (event) => {
        setImage(event.target.value);
      };
   
    const handleCalories = (event) => {
        setCalories(event.target.value);
      };
   
    const handleServings = (event) => {
        setServings(event.target.value);
      };
    
    const resetInputs = () => {
        setName("")
        setImage("")
        setCalories(0)
        setServings(0)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newFoodToAdd = {name: name, image: image, calories: calories, servings: servings}
        addNewFood(newFoodToAdd)
        resetInputs()
    }
   


  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input type="text" name="name" onChange={handleName} value={name}/>

      <label>Image</label>
      <Input type="text" name="image" onChange={handleImage} value={image}/>

      <label>Calories</label>
      <Input type="number" name="calories" onChange={handleCalories} value={calories}/>

      <label>Servings</label>
      <Input type="number" name="servings" onChange={handleServings} value={servings}/>

      <button type="submit" onClick={handleSubmit}>Create</button>
    </form>
  );
};

export default AddFood;
