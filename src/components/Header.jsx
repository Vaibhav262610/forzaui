import DATA from '../../public/data.js'
const Header = () => {


  return (
    <>
    {
      DATA.map((record) => {
        return(
          <div key={record} className="responsive text-white h-screen backdrop-blur-sm">
          <div className="boxes w-96 flex flex-col gap-4">
            <div className="flex rounded justify-center text-black bg-white py-2 font-bold">
              <h1>GENERAL</h1>
            </div>
            <div className="border-line mt-4"></div>
            <div>
              <div className="flex flex-col gap-2 w-fit items-center">
                <div className="flex flex-col gap-4">
                  <h1 className=" p-2 btn px-4 w-fit rounded font-semibold">
                    POWER
                  </h1>
                  <h1 className="text-2xl font-bold" key={record.power}>{record.power} hp</h1>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className=" p-2 btn px-4 w-fit rounded font-semibold">
                    TORQUE
                  </h1>
                  <h1 className="text-2xl font-bold" key={record.torque}>{record.torque} N-m</h1>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className=" p-2 btn px-4 w-fit rounded font-semibold">
                    BOOST
                  </h1>
                  <h1 className="text-2xl font-bold" key={record.boost}>{record.boost}</h1>
                </div>
              </div>
              <div className="border-line mt-4"></div>
              <div className="flex justify-between mt-4 ">
                <div className="flex flex-col items-center">
                  <h1 className=" p-2 px-4 w-fit rounded font-semibold">RPM</h1>
                  <h1 className="text-2xl font-bold" key={record.rpm}>{record.rpm}</h1>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <h1 className=" p-2 btn px-4 w-fit rounded font-semibold">
                    E-BRAKE
                  </h1>
                  <h1 className="text-2xl font-bold" key={record.ebrake}>{record.ebrake}%</h1>
                </div>
              </div>
              <div className="border-line mt-4"></div>
              <div className="flex justify-between mt-4">
                <div className="flex flex-col gap-2 items-center">
                  <h1 className=" p-2 btn px-4 w-fit rounded font-semibold">
                    GEAR
                  </h1>
                  <h1 className="text-8xl font-bold" key={record.gear}>{record.gear}</h1>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <h1 className=" p-2 btn px-4 w-fit rounded font-semibold">
                    CLUTCH
                  </h1>
                  <h1 className="text-2xl font-bold" key={record.clutch}>{record.clutch}%</h1>
                </div>
              </div>
              <div className="border-line mt-4"></div>
            </div>
          </div>
  
      {/* #####SECOND PART  */}
  
          <div className="boxes other w-96 flex flex-col gap-4">
            <div className="border-line mt-4"></div>
            <div className="flex flex-col gap-2">
              <h1 className=" p-2 btn px-4 w-fit rounded font-semibold">
                CLUTCH
              </h1>
              <h1 className="text-2xl font-bold" key={record.clutch}>{record.clutch}%</h1>
            </div>
            <div className="border-line mt-4"></div>
            <div className="flex justify-between mt-4 ">
              <div className="flex flex-col items-center">
                <h1 className=" p-2 px-4 w-fit rounded font-semibold">
                  THROTTLE
                </h1>
                <h1 className="text-2xl font-bold"key={record.throttle}>{record.throttle}%</h1>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <h1 className=" p-2 btn px-4 w-fit rounded font-semibold">
                  BRAKE
                </h1>
                <h1 className="text-2xl font-bold" key={record.brake}>{record.brake}%</h1>
              </div>
            </div>
            <div className="border-line mt-4"></div>
            <div className="flex flex-col items-end gap-2">
              <h1 className=" p-2 btn px-4 w-fit rounded font-semibold">SPEED</h1>
              <h1 className="text-8xl font-bold">{record.speed}MPH</h1>
            </div>
          </div>
        </div>
        )
      })
    }
      
    </>
  );
};

export default Header;
