import { useState } from 'react';
import Profile from './components/Profile.jsx';
import FilterButtons from './components/FilterButtons.jsx';
import TaskItem from './components/TaskItem.jsx';
import TaskFilter from './utils/TaskFilter.js';
import { useTasks } from './hooks/useTasks.js';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');

  const { tasks, loading } = useTasks();

  // #2: Filtering logic inside component
  const visibleTasks = TaskFilter(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      {/* #3: Hardcoded UI, not reusable */}
      <Profile name="Student" />

      {/* #4: Repeated button JSX */}
      <FilterButtons filter={filter} setFilter={setFilter} />

      {/* #5: Inline list rendering */}
      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
