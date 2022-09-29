import {notionService} from "./src/services/index.js";

async function main() {
  const { data } = await notionService.fetchDiary();
  const { results: pages } = data;
  const [lastPage] = pages;
  const title = lastPage.properties["이름"].title[0].plain_text;
  const contentResponse = await notionService.fetchContent(lastPage.id);
  console.log({title, contents: contentResponse.data.results});
}

main();