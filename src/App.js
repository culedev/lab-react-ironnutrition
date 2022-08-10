import './App.css';
import foods from './foods.json';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';
import { useState } from 'react';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [searchQuery, setSearchQuery] = useState('');
  const [isShowForm, setIsShowForm] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const addNewFood = (food) => {
    setFoodList([...foodList, food]);
  };

  const filterSearch = (search) => {
    setSearchQuery(search);
  };

  const deleteFood = (id) => {
    const filteredFood = foodList.filter(
      (eachFood, i) => eachFood.name + i !== id
    );
    filteredFood.length === 0 ? setIsEmpty(true) : setIsEmpty(false)
    setFoodList(filteredFood);
  };

  const showForm = () => {
    setIsShowForm(!isShowForm);
  };

  const isShow = isShowForm ? 'Hide Form' : 'Add New Food';

 
  

  return (
    <div className="App">
      {isShowForm && <AddFood addNewFood={addNewFood} />}

      <Button onClick={showForm}>{isShow}</Button>

      <Search filterSearch={filterSearch} />

      <Divider>Food List</Divider>
      {!isEmpty ? (
        <Row style={{ width: '100%', justifyContent: 'center' }}>
          {foodList
            .filter((eachFood) =>
              eachFood.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((eachFood, i) => {
              return (
                <FoodBox
                  key={eachFood.name + i}
                  id={eachFood.name + i}
                  eachFood={eachFood}
                  deleteFood={deleteFood}
                />
              );
            })}
        </Row>
      ) : (
        <h1>Oops! There is no more content to show!</h1>
      )}
    </div>
  );
}

export default App;
