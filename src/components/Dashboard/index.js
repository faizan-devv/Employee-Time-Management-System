import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../../redux/actions';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';


const Dashboard = () => {
  const [rerenderFlag, setRerenderFlag] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [logData, setLogData] = useState({
    logDate: '',
    hours: 0,
    description: '',
    is_personal_project: 0
  });
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  let UsersList = null; let list = null;
  UsersList = useSelector((state) => state.GetUsers.apiResponse.users);
  let PageCount = useSelector((state) => state.GetUsers.apiResponse.users?.last_page);
  let Logslist = useSelector((state) => state.GetWorkLogs.apiResponse.workLogs?.data);
  let logsLastPage = useSelector((state) => state.GetWorkLogs.apiResponse.workLogs?.last_page);
  if (Logslist) {
    list = [...Logslist];
  }
  let filteredLogs = useSelector((state) => state.GetFilteredLogs.apiResponse.workLogs);
  if (filteredLogs) {
    list = [...filteredLogs];
  }
  const Role = localStorage.getItem('role');
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const temp = { ...userData };
    temp[e.target.name] = e.target.value;
    setUserData(temp);
  };
  const onLogDataChangeHandler = (e) => {
    const temp = { ...logData };
    if (e.target.value === 'on') { temp[e.target.name] = 1; }
    else {
      temp[e.target.name] = e.target.value;
    }
    setLogData(temp);
  }

  const handleRegisterNewUser = (e) => {
    e.preventDefault();
    let token = localStorage.getItem('token');
    let obj = {
      ...userData,
      "userType": "user"
    };
    dispatch(allActions.RegularUserAction.RegisterRegularUser(obj, token));
    setRerenderFlag(!rerenderFlag);
  }

  const handleUpdateUser = (e, id) => {
    e.preventDefault();
    let token = localStorage.getItem('token');
    let obj = userData;
    dispatch(allActions.RegularUserAction.UpdateUser(token, id, obj));
    setRerenderFlag(!rerenderFlag);
  }
  const handleDeleteUser = (e, id) => {
    e.preventDefault();
    let token = localStorage.getItem('token');
    dispatch(allActions.RegularUserAction.DeleteUser(token, id));
    setRerenderFlag(!rerenderFlag);
  }
  const handleUpdateLog = (e, id, logid) => {
    e.preventDefault();
    let token = localStorage.getItem('token');
    let obj = logData;
    dispatch(allActions.WorklogsAction.UpdateWorkLog(obj, token, id, logid));
    setRerenderFlag(!rerenderFlag);
  }
  const handlePageChange = (data) => {
    let temp = data.selected + 1;
    setPageNum(temp);
    let token = localStorage.getItem('token');
    dispatch(allActions.GetUsersAction.GetUsers(token, temp));

  }

  const handleLogsPageChange = (data) => {
    let temp = data.selected + 1;
    setPageNum(temp);
    let token = localStorage.getItem('token');
    let id = localStorage.getItem('id');
    dispatch(allActions.GetWorkLogs.getWorkLogs(id, temp, token));

  }

  const handleCreateWorkLog = (e) => {
    e.preventDefault();
    let token = localStorage.getItem('token');
    let obj = logData;
    dispatch(allActions.WorklogsAction.CreateWorkLog(obj, token));
    setRerenderFlag(!rerenderFlag);
  }

  const handleUpdateWorkingHours = (e, workingHours) => {
    e.preventDefault();
    let token = localStorage.getItem('token');
    let id = localStorage.getItem('id');
    let obj = {
      'workingHours': workingHours
    };
    dispatch(allActions.WorklogsAction.UpdateWorkingHours(obj, id, token));
    setRerenderFlag(!rerenderFlag);
  }

  const handleGetFilteredLogs = (e, from, to) => {
    e.preventDefault();
    let token = localStorage.getItem('token');
    dispatch(allActions.GetFilteredLogsAction.getFilteredLogs(to, from, token));
  }
  const handleRegisterManager = (e) => {
    e.preventDefault();
    dispatch(allActions.registerManagerAction.registerManager(userData));
  }
  useEffect(() => {
    let token = localStorage.getItem('token');
    let id = localStorage.getItem('id');
    if (Role === 'admin') {
      dispatch(allActions.GetUsersAction.GetUsers(token, pageNum));
    }
    if (Role === 'user') {
      dispatch(allActions.GetWorkLogs.getWorkLogs(id, pageNum, token));
    }
  }, [rerenderFlag, dispatch, pageNum, Role]);

  let Dashboard = null;
  if (Role === 'admin' || Role === 'manager') {
    Dashboard = (
      <AdminDashboard
        change={onChangeHandler}
        register={handleRegisterNewUser}
        UsersList={UsersList}
        handleDeleteUser={handleDeleteUser}
        handleUpdateUser={handleUpdateUser}
        PageCount={PageCount}
        handlePageChange={handlePageChange}
        handleRegisterManager={handleRegisterManager}
        role={Role}
      />
    )
  }

  if (Role === 'user') {
    Dashboard = (
      <UserDashboard change={onLogDataChangeHandler}
        createWorkLog={handleCreateWorkLog}
        updateLog={handleUpdateLog}
        updateHours={handleUpdateWorkingHours}
        Logslist={list}
        filteredLogs={handleGetFilteredLogs}
        PageCount={logsLastPage}
        handlePageChange={handleLogsPageChange}
      />
    )
  }

  return (

    <div>
      {Dashboard}
    </div>
  )
}

export default Dashboard;
