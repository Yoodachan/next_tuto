export default function List() {
  let 상품 = ['Tomato','Pasta','Coconut'];
  let 변수 = 20;
  // let a = [20,30,40];
  // console.log(a[0]);
  let 어레이 = [2,3,4];
  let b = 어레이.map((a,i) => {
    return 10;
  });
  console.log(b);

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {
        상품.map((a,i) => {
          return (
            <div className="food" key={i}>
              <img src={} />
              <h4> {상품[a]} 40달러 </h4>
            </div>
          )
        })
      }
    </div>
  )
}