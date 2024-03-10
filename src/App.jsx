import Menu1 from "./menu1/Menu1";
import Menu2 from "./menu2/Menu2";
import MenuItem from "./menu2/MenuItem";
import Counter from "./counter/Counter";
import TimeComp from "./TimeComp";
import UserList from "./UserList";

function App() {
  return (
    <>
      <Menu1 homeColor="red" aboutColor="green" homeText="homePage" />
      <UserList />
      {/* <Menu2>
    <ul>
        <li>
          <a href="/aaa" style={{color:"purple"}} >aaa</a>
        </li>
        <li>
          <a href="/bbb">bbb</a>
        </li>
        
        <MenuItem label="index"  link="index" color="red" comment="comment"/>
       
      </ul>
    </Menu2> */}
      {/* <Counter/> */}
      {1 === 1 && <TimeComp />}
    </>
  );
}

export default App;
