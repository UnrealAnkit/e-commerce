import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../store/slices/authSlice';
import { fetchTasks } from '../../store/slices/taskSlice';
import Header from './Header';
import Sidebar from './Sidebar';
import CreateTaskModal from '../Modals/CreateTaskModal';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
`;

const MainContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 73px);
`;

const Content = styled.main`
  flex: 1;
  overflow-y: auto;
  
  @media (min-width: 768px) {
    margin-left: 0;
  }
`;

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUser());
      dispatch(fetchTasks());
    }
  }, [dispatch, token]);

  return (
    <LayoutContainer>
      <Header />
      <MainContainer>
        <Sidebar />
        <Content>
          {children}
        </Content>
      </MainContainer>
      <CreateTaskModal />
    </LayoutContainer>
  );
};

export default Layout;