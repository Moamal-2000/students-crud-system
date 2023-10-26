function tableDataSetter(months, lectures) {
  let orders = {};

  for (let i = 1; i <= lectures; i++) {
    for (let j = 1; j <= months; j++) {
      orders[`${i}-${j}`] = "off";
    }
  }

  return orders;
}
export default tableDataSetter
