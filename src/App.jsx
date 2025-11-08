import React from 'react'
import Card from './components/card'
const App = () => {
  const user='Harsh'
   
  return (
    <>
    <div class="parent">
      <h1>Sankha</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, odio? Ratione quia delectus cupiditate totam perferendis voluptate impedit, nemo deserunt quibusdam repellat aperiam eligendi, id enim voluptates ea optio fugit!
      Eveniet voluptatum odio neque iusto quis fuga blanditiis odit saepe id laboriosam adipisci, officiis fugiat eum sit esse eos libero! Neque molestiae placeat dicta minima enim praesentium quidem eveniet odio!</p>
    </div>
        <div class="child">
      <h1>Sankha</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, odio? Ratione quia delectus cupiditate totam perferendis voluptate impedit, nemo deserunt quibusdam repellat aperiam eligendi, id enim voluptates ea optio fugit!
      Eveniet voluptatum odio neque iusto quis fuga blanditiis odit saepe id laboriosam adipisci, officiis fugiat eum sit esse eos libero! Neque molestiae placeat dicta minima enim praesentium quidem eveniet odio!</p>
    </div>
    <Card/>
    <h1>Hello,guys i am {user}</h1>
    </>
    
  )
}

export default App