import { DOMPreset } from '../dom-api/make-dom';

const { div, h5, h6, p, a } = DOMPreset;

/**
 * Zadanie:
 * Zrób komponent "Card" (uzupełnij buildCard) według schematu HTML poniżej:
 * */

/*
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
* */

/**
 * Reusable Card BUILDER
 * Używająć wcześniej przygotowanych metod wytwórczych, budujemy teraz cały komponent
 * */
export function cardElement ({ cardTitle, cardSubtitle, clickCallback }) {
  const cardLink = a('#', 'Card link', 'card-link');
  cardLink.addEventListener('click', clickCallback)
  return div([
    div([
      h5(cardTitle, 'card-title'),
      h6(cardSubtitle, 'card-subtitle.mb-2.text-muted'),
      p('Some example', 'card-text'),
      cardLink,
      a('#', 'Another link', 'card-link')
    ], 'card-body')
  ])
}
