
module.exports = [
  {
    method: ['get','post'],
    path: '/api/driver/getList',
    controller:  function (req, res, next) {
      console.log('/api/driver/getList')
      // setTimeout(()=>{
        res.json({
          total: 100,
          driverList: getDriverList()
        });
      // },1000)
    },
  },
  {
    method: 'get',
    path: '/api/driver/getList2',
    controller:  function (req, res, next) {
      setTimeout(()=>{
        res.json({
          total: 100,
          driverList: getDriverList()
        });
      },1000)
    },
  }
]

function getDriverList() {
  let result = [];
  for(let i=0;i< 10;i++) {
    result.push({
      cityName: '北京',
      driverId: '123'+i,
      phone: '1762011465'+i,
      joinTime: Date.now(),
      hasPrivateCar: i%2 == 0,
      licencePlateNo: '京C12345'+i,
      identityCard: '130274203472937'+i,
      carId: '123',
      carColor: '红',
      carType: 'A6',
      carBrand: '奥迪',
      isBinding: i%2 == 0,
      driverStatus: {
        workStatus: i%2,
        serviceStatus: i%2
      },
      accountStatus: i%2  
    })
  }
  return result;
}