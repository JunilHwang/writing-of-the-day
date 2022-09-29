import {notionService} from "./src/services/index.js";

function main() {
  notionService.fetchDiary().then(console.log).catch(console.error);
}

main();