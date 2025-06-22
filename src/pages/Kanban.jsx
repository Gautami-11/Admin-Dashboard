import React, { useState } from 'react';

const Kanban = () => {
  const [columns, setColumns] = useState({
    todo: { name: 'To Do', items: [] },
    inprogress: { name: 'In Progress', items: [] },
    done: { name: 'Done', items: [] },
  });

  const [newTasks, setNewTasks] = useState({
    todo: '',
    inprogress: '',
    done: '',
  });

  const handleDragStart = (e, fromColKey, itemIndex) => {
    e.dataTransfer.setData('fromColKey', fromColKey);
    e.dataTransfer.setData('itemIndex', itemIndex);
  };

  const handleDrop = (e, toColKey) => {
    const fromColKey = e.dataTransfer.getData('fromColKey');
    const itemIndex = parseInt(e.dataTransfer.getData('itemIndex'), 10);
    if (!fromColKey || isNaN(itemIndex)) return;

    const item = columns[fromColKey].items[itemIndex];
    const updatedColumns = { ...columns };
    updatedColumns[fromColKey].items.splice(itemIndex, 1);
    updatedColumns[toColKey].items.push(item);
    setColumns(updatedColumns);
  };

  const handleInputChange = (e, colKey) => {
    setNewTasks({ ...newTasks, [colKey]: e.target.value });
  };

  const handleAddTask = (colKey) => {
    const task = newTasks[colKey].trim();
    if (!task) return;

    const updatedColumns = { ...columns };
    updatedColumns[colKey].items.push(task);
    setColumns(updatedColumns);

    setNewTasks({ ...newTasks, [colKey]: '' });
  };

  const handleDeleteTask = (colKey, index) => {
    const updatedColumns = { ...columns };
    updatedColumns[colKey].items.splice(index, 1);
    setColumns(updatedColumns);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Kanban Board</h1>
      <div className="flex gap-6 justify-center flex-wrap">
        {Object.entries(columns).map(([key, column]) => (
          <div
            key={key}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, key)}
            className="bg-white w-80 rounded shadow p-4"
          >
            <h2 className="text-xl font-semibold mb-4 text-center">{column.name}</h2>

            {/* Add Task Input */}
            <div className="mb-4">
              <input
                type="text"
                value={newTasks[key]}
                onChange={(e) => handleInputChange(e, key)}
                placeholder="New task"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                onClick={() => handleAddTask(key)}
                className="mt-2 w-full bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
              >
                Add Task
              </button>
            </div>

            {/* Task List */}
            {column.items.map((item, idx) => (
              <div
                key={idx}
                draggable
                onDragStart={(e) => handleDragStart(e, key, idx)}
                className="relative bg-blue-100 p-3 mb-2 rounded shadow cursor-move"
              >
                <span>{item}</span>
                <button
                  onClick={() => handleDeleteTask(key, idx)}
                  className="absolute top-1 right-2 text-red-500 hover:text-red-700 text-xl font-bold"
                  title="Delete Task"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kanban;
