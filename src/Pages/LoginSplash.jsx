import { Link } from 'react-router-dom';


export default function LoginSplash() {


  return (
    <div>

      <div className="splash-body">


      {/* <!-- User box --> */}
        <div className="splash-container-box">

              <div className="col-center">
                <h3 className='blue'>User Login</h3>
              <Link to="/UserLogin"><div className="user-logo"></div></Link>
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
