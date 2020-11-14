import './App.css';
import { sampleText } from  './sampleText';

function App() {
  return (
    <div className='container-fluid' style={{ marginTop: '5px' }}>
      <div className='row'>
        <div className='col-sm-6'>
          <textarea value = { sampleText } className='form-control' rows='25'></textarea>
        </div>
        <div className='col-sm-6'>
          { sampleText }
        </div>
      </div>
    </div>
  );
}

export default App;
