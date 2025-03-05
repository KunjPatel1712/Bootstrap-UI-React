import { Image } from 'react-bootstrap'
import './App.css'
import Button from 'react-bootstrap/Button';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
 
  return (
      <>
            <div className='container main'>
              <div className='row'>
                  <div className='col-6 text'>
                       <h1>Hi, Hi, I'm John Deo</h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quidem labore quaerat, voluptates delectus rerum quas modi aut unde minus omnis sed ipsa, at incidunt provident.</p>
                       <Button variant="primary">I am Available</Button>
                      <ul className='lists'>
                        <li><i class="bi bi-facebook"></i></li>
                        <li><i class="bi bi-skype"></i></li>
                        <li><i class="bi bi-instagram"></i></li>
                        <li><i class="bi bi-github"></i></li>
                      </ul>
                    </div>
                  <div className='col-6 images' style={{marginRight:"45px"}}>
                      <img src="images/photo.png" alt="" />
                  </div>
              </div>
            </div>
      </>
  )
}

export default App
