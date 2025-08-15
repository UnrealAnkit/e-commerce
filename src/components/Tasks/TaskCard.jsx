import React from 'react';
import { useDispatch } from 'react-redux';
import { Calendar, Clock, Flag, Edit2, Trash2 } from 'lucide-react';
import { updateTask, deleteTask } from '../../store/slices/taskSlice';
import { openModal } from '../../store/slices/uiSlice';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  border: 2px solid #f3f4f6;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    border-color: #d1d5db;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  flex: 1;
  line-height: 1.4;
`;

const PriorityBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: ${props => {
    switch (props.priority) {
      case 'high': return '#fef2f2';
      case 'medium': return '#fef3c7';
      default: return '#f0fdf4';
    }
  }};
  color: ${props => {
    switch (props.priority) {
      case 'high': return '#dc2626';
      case 'medium': return '#d97706';
      default: return '#16a34a';
    }
  }};
`;

const Description = styled.p`
  color: #6b7280;
  margin: 0 0 1rem 0;
  line-height: 1.5;
  font-size: 0.875rem;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  color: #6b7280;
  font-size: 0.8125rem;
`;

const StatusBadge = styled.span`
  padding: 0.375rem 0.875rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => {
    switch (props.status) {
      case 'completed': return '#d1fae5';
      case 'in-progress': return '#dbeafe';
      default: return '#f3f4f6';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'completed': return '#065f46';
      case 'in-progress': return '#1e40af';
      default: return '#374151';
    }
  }};
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #f3f4f6;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.2s;

  &:hover {
    background: #f9fafb;
  }

  &.edit {
    &:hover {
      background: #eff6ff;
      border-color: #3b82f6;
      color: #3b82f6;
    }
  }

  &.delete {
    &:hover {
      background: #fef2f2;
      border-color: #dc2626;
      color: #dc2626;
    }
  }
`;

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  const handleStatusChange = () => {
    const statusOrder = ['pending', 'in-progress', 'completed'];
    const currentIndex = statusOrder.indexOf(task.status);
    const nextStatus = statusOrder[(currentIndex + 1) % statusOrder.length];
    
    dispatch(updateTask({
      id: task._id,
      updates: { status: nextStatus }
    }));
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    dispatch(openModal({ modal: 'editTask', data: task }));
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    dispatch(openModal({ modal: 'deleteTask', data: task }));
  };

  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Card onClick={handleStatusChange}>
      <Header>
        <Title>{task.title}</Title>
        <PriorityBadge priority={task.priority}>
          {task.priority}
        </PriorityBadge>
      </Header>

      {task.description && (
        <Description>{task.description}</Description>
      )}

      <InfoRow>
        <InfoItem>
          <Flag size={14} />
          {task.category}
        </InfoItem>
        
        {task.dueDate && (
          <InfoItem>
            <Calendar size={14} />
            Due {formatDate(task.dueDate)}
          </InfoItem>
        )}
        
        <InfoItem>
          <Clock size={14} />
          {formatDate(task.createdAt)}
        </InfoItem>
      </InfoRow>

      <StatusBadge status={task.status}>
        {task.status.replace('-', ' ')}
      </StatusBadge>

      <Actions>
        <ActionButton className="edit" onClick={handleEdit}>
          <Edit2 size={14} />
          Edit
        </ActionButton>
        <ActionButton className="delete" onClick={handleDelete}>
          <Trash2 size={14} />
          Delete
        </ActionButton>
      </Actions>
    </Card>
  );
};

export default TaskCard;