'use strict';

import {
  task2duplicate,
  task3removeEven,
  task4endpoints,
  task5fileNames,
} from './solutions/solutions';
import { clearResults } from './shared';

const getTaskButton = (taskName) => document.querySelector(`[data-task-name="${taskName}"]`);

const displayTask = (runTask) => {
  clearResults();
  runTask();
}

getTaskButton('task2').addEventListener('click', () => displayTask(task2duplicate))
getTaskButton('task3').addEventListener('click', () => displayTask(task3removeEven))
getTaskButton('task4').addEventListener('click', () => displayTask(task4endpoints))
getTaskButton('task5').addEventListener('click', () => displayTask(task5fileNames))
