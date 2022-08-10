// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';

// Iteration 4
function AddFood(props) {
  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={undefined} type="text" onChange={() => {}} />

      <label>Image</label>
      <Input type="text" /> 

      <label>Calories</label>
      <Input type="number" />

      <label>Servings</label>
      <Input type="number" />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFood;
