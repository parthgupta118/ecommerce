import _ from "lodash";

export function paginate(cardItems, pageNumber, cardsPPage) {
  const startIndex = (pageNumber - 1) * cardsPPage;
  return _(cardItems)
    .slice(startIndex)
    .take(cardsPPage)
    .value();
}
