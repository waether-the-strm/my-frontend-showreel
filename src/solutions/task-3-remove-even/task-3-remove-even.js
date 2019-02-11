import { $resultsArea } from '../../shared';

export const task3removeEven = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const runTask = () => {
    document.getElementById('taskResults').innerHTML = `[${removeEven(numbers)}]`;
  }

  const removeEven = (numberArray) => numberArray.filter(number => number % 2 !== 0)

  $resultsArea.innerHTML = `
    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-outline-primary btn-sm" data-run="removeEven">run: <code>[${numbers}].removeEven()</code></button>
      </div>
    </div>
    <div class="row mt-1">
      <div class="col">
        <code class="card p-3" id="taskResults">[${numbers}]</code>
      </div>
    </div>
  `;

  document.querySelector('[data-run="removeEven"]').addEventListener('click', () => runTask(removeEven(numbers)))

}


// reduce(callbackfn: (previousValue: void, currentValue: number, currentIndex: number, array: number[]) => void, initialValue: void): void
