import logo from './logo.svg';
import ShowList from './show/ShowList';
import ShowList2 from './show/ShowList2';
import Data from './data/Data';
import './App.css';
import { useState } from 'react';

function App() {
  //state hooks
  const [data, SetData] = useState(Data);
  const [status, setStatus] = useState(false);
  const [colorBackground, SetColorBackground] = useState('#282c34');
  //removedHandles
  const removedHandles = (id) =>{
      const newData = data.filter(data => data.id !== id)
      SetData(newData)
  }
  return (
    <div className="App" style={{backgroundColor:colorBackground, color: colorBackground == '#282c34' ? '#fff' : '#282c34'}}>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img width={50} className="navbar-brand App-logo" src={logo} />

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => alert('Link')}>Link</a>
              </li>

            </ul>
              <button onClick={() => setStatus(!status)} className={status === true ? 'btn btn-outline-danger' : 'btn btn-outline-success'} type="submit">{status === true ? 'Close' : 'Open'}</button>
              <button onClick={() => colorBackground == '#282c34' ? SetColorBackground('#fff') : SetColorBackground('#282c34')} className="btn btn-outline-success my-2 my-sm-0" type="submit">Thay Giao Diện</button>
          </div>
        </nav>
      </header>
      {status ? <main className="container">
        <h2 className="mt-4 mb-2">Danh sách bài hát</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <ShowList data={data} removed={removedHandles} />
          </tbody>
        </table>
      </main> : null}
    </div>
  );
}

export default App;
