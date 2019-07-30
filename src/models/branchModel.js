const headquarter = {
    id: 1,
    name: 'Silom',
    position: {
      lat: 13.7200452,
      lng: 100.5135078
    },
    chartData: {
      chartField: ['Month','Amount'],
      datas: [
        { month: 'February', amount: 10392 },
        { month: 'March', amount: 18239 },
        { month: 'April', amount: 14290 },
        { month: 'May', amount: 23912 },
        { month: 'June', amount: 26167 },
        { month: 'July', amount: 28199 },
      ]
    }
  }
  
  let branches = [
    headquarter, {
      id: 2,    
      name: 'Cholburi',
      position: {
        lat: 13.1247584,
        lng: 100.9133127
      },
      chartData: {
        chartField: ['Month','Amount'],
        datas: [
          { month: 'February', amount: 70032 },
          { month: 'March', amount: 54789 },
          { month: 'April', amount: 62789 },
          { month: 'May', amount: 89272 },
          { month: 'June', amount: 100328 },
          { month: 'July', amount: 128903 },
        ]
      }
    }
  ]
  
  export default {
    branches,
    headquarter
  }; 