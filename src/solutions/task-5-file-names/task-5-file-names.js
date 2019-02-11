import { $resultsArea } from '../../shared';

export const task5fileNames = () => {
  $resultsArea.innerHTML = `
    <div class="row">
      <div class="col">
        <p><code>yarn run file:create</code> – creates file <code>example.json</code></p>
        <p><code>yarn run file:rename</code> – renames <code>example.json</code> into <code>sample.json</code></p>
        <p>Commands above run from terminal will use the scripts from <code>node-task.js</code></p>
      </div>
    </div>
  `
}
