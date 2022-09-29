import { notionClient } from "../clients/index.js";

export const notionService = {
  async fetchDiary() {
    return notionClient.post(`/databases/c61eed4c4a7f40819600ec0ebaecc16c/query`, {
      sorts: [
        {
          property: "날짜",
          direction: "descending",
        }
      ]
    });
  }
}