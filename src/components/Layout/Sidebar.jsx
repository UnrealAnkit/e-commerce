import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Home, CheckSquare, BarChart3, Settings, X } from 'lucide-react';
import { setSidebarOpen } from '../../store/slices/uiSlice';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 280px;
  background: white;
  border-right: 1px solid #e5e7eb;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 1100;
  overflow-y: auto;

  @media (min-width: 768px) {
    position: sticky;
    transform: none;
    width: 260px;
    height: calc(100vh - 73px);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1050;
  display: ${props => props.show ? 'block' : 'none'};

  @media (min-width: 768px) {
    display: none;
  }
`;

const SidebarHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const Logo = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 6px;
  color: #6b7280;
  transition: all 0.2s;

  &:hover {
    background-color: #f3f4f6;
    color: #374151;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Navigation = styled.nav`
  padding: 1rem;
`;

const NavItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 0.25rem;
  transition: all 0.2s;
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;

  &:hover, &.active {
    background-color: #3b82f6;
    color: white;
  }

  &.active {
    background-color: #3b82f6;
    color: white;
  }
`;

const Sidebar = () => {
  const dispatch = useDispatch();
  const { sidebarOpen } = useSelector((state) => state.ui);

  const handleCloseSidebar = () => {
    dispatch(setSidebarOpen(false));
  };

  const navItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: CheckSquare, label: 'Tasks', active: false },
    { icon: BarChart3, label: 'Analytics', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <>
      <Overlay show={sidebarOpen} onClick={handleCloseSidebar} />
      <SidebarContainer isOpen={sidebarOpen}>
        <SidebarHeader>
          <Logo>TaskFlow</Logo>
          <CloseButton onClick={handleCloseSidebar}>
            <X size={18} />
          </CloseButton>
        </SidebarHeader>

        <Navigation>
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <NavItem key={index} className={item.active ? 'active' : ''}>
                <Icon size={18} />
                {item.label}
              </NavItem>
            );
          })}
        </Navigation>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;