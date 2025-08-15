import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Plus, Filter, Search } from 'lucide-react';
import { fetchTasks, fetchTaskStats } from '../../store/slices/taskSlice';
import { openModal } from '../../store/slices/uiSlice';
import TaskCard from '../Tasks/TaskCard';
import StatsCard from './StatsCard';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
`;

const Subtitle = styled.p`
  color: #6b7280;
  margin: 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const Controls = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const LeftControls = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 0.875rem;
  min-width: 250px;
  transition: all 0.2s;
  background: white;
  position: relative;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const SearchContainer = styled.div`
  position: relative;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  background: white;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.875rem;
  color: #374151;
  transition: all 0.2s;

  &:hover {
    border-color: #d1d5db;
    background: #f9fafb;
  }
`;

const CreateButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.4);
  }
`;

const TasksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #6b7280;
  grid-column: 1 / -1;
`;

const EmptyTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #374151;
`;

const LoadingSpinner = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  padding: 3rem;
`;

const Dashboard = () => {
  const dispatch = useDispatch();
  const { tasks, stats, loading } = useSelector((state) => state.tasks);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(fetchTaskStats());
  }, [dispatch]);

  const handleCreateTask = () => {
    dispatch(openModal({ modal: 'createTask' }));
  };

  return (
    <Container>
      <Header>
        <Title>Welcome back, {user?.name}!</Title>
        <Subtitle>Here's what's happening with your tasks today.</Subtitle>
      </Header>

      <StatsGrid>
        <StatsCard
          title="Total Tasks"
          value={stats.total}
          color="#3b82f6"
          icon="📊"
        />
        <StatsCard
          title="Completed"
          value={stats.completed}
          color="#10b981"
          icon="✅"
        />
        <StatsCard
          title="In Progress"
          value={stats.inProgress}
          color="#f59e0b"
          icon="🚀"
        />
        <StatsCard
          title="High Priority"
          value={stats.highPriority}
          color="#ef4444"
          icon="🔥"
        />
      </StatsGrid>

      <Controls>
        <LeftControls>
          <SearchContainer>
            <SearchIcon>
              <Search size={16} />
            </SearchIcon>
            <SearchInput
              type="text"
              placeholder="Search tasks..."
            />
          </SearchContainer>
          <FilterButton>
            <Filter size={16} />
            Filters
          </FilterButton>
        </LeftControls>
        
        <CreateButton onClick={handleCreateTask}>
          <Plus size={20} />
          New Task
        </CreateButton>
      </Controls>

      <TasksGrid>
        {loading ? (
          <LoadingSpinner>
            <div>Loading tasks...</div>
          </LoadingSpinner>
        ) : tasks.length === 0 ? (
          <EmptyState>
            <EmptyTitle>No tasks yet</EmptyTitle>
            <p>Create your first task to get started!</p>
          </EmptyState>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))
        )}
      </TasksGrid>
    </Container>
  );
};

export default Dashboard;