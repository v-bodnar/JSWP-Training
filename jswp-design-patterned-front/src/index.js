import { $ } from './dom-api/dom-helpers';
import './styles.css';
import { DOMPreset } from './dom-api/make-dom'
import { cardElement } from './main/card-element';
// import { }

const { b, div } = DOMPreset;
(function runDefault () {
  const rootDOM = $('#root');
  const rootDiv = div([
    div([
      b('Trzeba zrobić card-element !')
    ]),
    cardElement({
      cardTitle: 'title',
      subTitle: 'subtitle',
      clickCallback: (ev) => { alert('asdg') }
    })
  ], 'container.mt-5');
  rootDOM.appendChild(rootDiv);
})();
