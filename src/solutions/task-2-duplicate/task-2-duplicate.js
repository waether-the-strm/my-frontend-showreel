import { $resultsArea } from '../../shared';
import { arrayDuplicate } from './array-duplicate';

export const task2duplicate = () => {
  const testDuplicate = () => {
    try {
      const result = [1, 2, 3, 4].duplicate()
      document.getElementById('taskResults').innerText = result;
      console.log(result)
    } catch (error) {
      document.getElementById('taskResults').innerText = error;
      console.error(result)
    }

  }
  const handleDuplicateEnabled = () => {
    arrayDuplicate.enable()
    console.info('Array.prototype.duplicate enabled')
  }
  const handleDuplicateDisabled = () => {
    arrayDuplicate.disable()
    console.info('Array.prototype.duplicate disabled')
  }


  $resultsArea.innerHTML = `
    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-outline-success btn-sm" data-run="handleDuplicateEnabled">enable Array.prototype.duplicate</button>
        <button type="button" class="btn btn-outline-danger btn-sm" data-run="handleDuplicateDisabled">disable Array.prototype.duplicate</button>
        <button type="button" class="btn btn-outline-primary btn-sm" data-run="testDuplicate">run: <code>[1,2,3,4].duplicate()</code></button>
      </div>
    </div>
    <div class="row mt-1">
      <div class="col">
        <code class="card p-3" id="taskResults">Results will appear here (test also with console).</code>
      </div>
    </div>
  `;

  document.querySelector('[data-run="handleDuplicateEnabled"]').addEventListener('click', handleDuplicateEnabled)
  document.querySelector('[data-run="handleDuplicateDisabled"]').addEventListener('click', handleDuplicateDisabled)
  document.querySelector('[data-run="testDuplicate"]').addEventListener('click', testDuplicate)
}
