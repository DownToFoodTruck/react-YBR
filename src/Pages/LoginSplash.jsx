import { Link } from 'react-router-dom';


export default function LoginSplash() {


  return (
    <div>
      
      <div className="splash-body">

        <h2 id='absolute' className='yellow'>Select Registration</h2> <br/>

      {/* <!-- User box --> */}
        <div className="splash-container-box">

              <div className="col-center">
                <h3 className='blue'>User Login</h3>
              <Link to="/UserRegister"><div className="user-logo"></div></Link>
            </div>

        </div>
      {/* <!-- end User box --> */}
      <div className="splash-container-box">

            <div className="col-center">
                <h3 className='blue'>Vendor Login</h3>
                <Link to="/VendorLogin"><div className="truck-logo"></div></Link>
          </div>

        </div>

      </div>

    </div>
  );

}
