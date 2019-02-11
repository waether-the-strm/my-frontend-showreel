import 'babel-polyfill';
import { $resultsArea } from '../../shared';

export const task4endpoints = async () => {
  const baconUrls = [
    'https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=json',
    'https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=json'
  ];

  try {
    const firstStringArray = await fetch(baconUrls[0]).then(res => res.json())
    const secondStringArray = await fetch(baconUrls[1]).then(res => res.json())

    const baconStory = `<p>${firstStringArray.join(' ')}</p><p>${secondStringArray.join(' ')}</p>`;

    $resultsArea.innerHTML = `
      <div class="row">
        <div class="col text-serif">
          ${baconStory}
        </div>
      </div>
    `;
  }
  catch(e) {
    console.error(e)
  }

}
