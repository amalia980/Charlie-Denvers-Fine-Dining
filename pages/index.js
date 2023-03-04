import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home"

// export const getStaticProps = async () => {

//   const res = await fetch("http://localhost:3000/api/products/")
//   const data = await res.json()
  
//   return {
//     props: {itemApi: data.parse()}
//   }
// }

export default function Index() {

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
           <Route path="menu" element={<Menu />}/> 
          </Route>
      </Routes>
      </BrowserRouter> */}
      {/* {itemApi.map(i => (
        <div>
          <Menu title={i.title} />
        </div>
      ))} */}
      <Home />
    </>
  );
}

