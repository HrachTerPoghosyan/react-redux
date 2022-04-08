import {useDispatch, useSelector} from "react-redux";
import {addCashAction, getCashAction} from "./store/cash";
import {addCustomerAction, removeCustomerAction} from "./store/customer";
import {fetchAction} from "./fetch/fetchAction";
import {fetchDispatch} from "./fetch/fetchDispatch";
import {removeUsersAction} from "./store/users";

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)
    const users = useSelector(state => state.users.users)

    const addCash = (cash) => {
      dispatch(addCashAction(cash))
    }

    const getCash = (cash) => {
        dispatch(getCashAction(cash))
    }

    const addCustomers = (name) => {
      const customer = {
          name,
          id: Date.now()
      }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    const removeUsers = (user) => {
        dispatch(removeUsersAction(user.id))
    }
    

  return (
    <div style={{textAlign: "center"}} className="App">
      <div style={{fontSize: "35px"}}>{cash}</div>
     <button onClick={() => addCash(Number(prompt()))}>ADD CASH</button>
     <button onClick={() => getCash(Number(prompt()))}>GET CASH</button>
     <button onClick={() => addCustomers(prompt())}>ADD CUSTOMERS</button>
     <button onClick={() => dispatch(fetchAction())}>ADD MANY CUSTOMERS</button>
        <button onClick={() => dispatch(fetchDispatch())}>ADD USERS</button>
        {customers.length > 0 ?
        <div>
            {customers.map(customer =>
            <div onClick={() => removeCustomer(customer)} key={customer.id}>{customer.name}</div>
            )}
            </div>
            :
            <div>
                NO CUSTOMERS
            </div>

        }
        {users.length > 0 ?
            <div>
            {users.map(user =>
            <div key={user.id} onClick={() => removeUsers(user)}>{user.name}</div>
            )}
           </div>
            :
            <div>
                NO USERS
            </div>
        }
    </div>
  );
}

export default App;
