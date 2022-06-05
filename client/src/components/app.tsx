import React, { useEffect, MouseEvent } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { User, fetchUsers, vaciarestado, deleteUser } from '../actions/actions';
import { StoreState, IRootState } from '../reducer/reducer';
import { UserStoreState } from '../reducer/users';
import { AppDispatch } from '../store/store'
interface AppProps {
  users?: User[];
  loading: boolean;
  fetchUsers(): any;
  vaciarestado(): any;
  deleteUser(e: string): any;
}

function App(props: AppProps) {
  const users = useSelector<IRootState, User[]>((state) => state.userState.users) //ejemplo de useSelector
  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    // props.fetchUsers()
    props.fetchUsers()
    return () => {
      dispatch(vaciarestado())
    }
    // eslint-disable-next-line
  }, []);

  function destroygame(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    props.deleteUser(e.currentTarget.id)
  }
  return (
    <div>
      <button onClick={props.fetchUsers}>FETCH USERS!</button> <button onClick={props.vaciarestado}>CLEAR USERS</button>

      {
        props.loading
          ? <div>
            Loading...
          </div>
          : users.length === 0 ? <div>No hay usuarios disponibles</div> : props.users.map((user: User) => {
            return (
              <div key={user.id}>
                {user.id}) {user.name} {user.roles}
                <button id={`${user.id}`} key={user.id} onClick={destroygame}>X</button>
              </div>
            );
          })
      }
    </div>
  );
}

const mapStateToProps = (state: StoreState): UserStoreState => {
  return {
    users: state.userState.users,
    loading: state.userState.loading
  };
};

export default connect(mapStateToProps, { fetchUsers, vaciarestado, deleteUser })(App);