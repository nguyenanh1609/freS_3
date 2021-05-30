
import './App.css';
import Header from './component/header';
import Content from './component/content';
import { Component } from 'react';

class App extends Component {
  render() {
    let data = [
      {
        id: 1,
        name: 'iphone 6',
        gia: 60000,
        anh: "https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-600x600-600x600-600x600.jpg",
        test: true
      },
      {
        id: 2,
        name: 'iphone 7',
        gia: 70000,
        anh: "https://phuckhangmobile.com/file/iphone-7-plus-bac-900-19479f.jpg",
        test: true
      },
      {
        id: 3,
        name: 'iphone 8',
        gia: 80000,
        anh: "https://bizweb.dktcdn.net/thumb/grande/100/257/835/products/8-3.jpg",
        test: true
      },
      {
        id: 4,
        name: 'iphone 8',
        gia: 80000,
        anh: "https://bizweb.dktcdn.net/thumb/grande/100/257/835/products/8-3.jpg",
        test: true
      },
      {
        id: 5,
        name: 'iphone 8',
        gia: 80000,
        anh: "https://bizweb.dktcdn.net/thumb/grande/100/257/835/products/8-3.jpg",
        test: true
      },
      {
        id: 6,
        name: 'iphone 8',
        gia: 80000,
        anh: "https://bizweb.dktcdn.net/thumb/grande/100/257/835/products/8-3.jpg",
        test: true
      }
    ]
    let xuatData = data.map((dataSp, index) => {
      let hienThi = '';
      if (dataSp.test) {
        hienThi=  <Content
        key={dataSp.id}
        name={dataSp.name}
        anh={dataSp.anh}
        gia={dataSp.gia} />
      }
      return hienThi;

    });

    return (
      <div className="App">
        <Header />
        <div className="container py-5">
          <div className="row">
            {xuatData}
          </div>
        </div>
      </div>

    );

  }
}
export default App;